import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/data/products';

// Initialize Stripe with the server-side secret key.
// NOTE: No hardcoded keys — read from environment variables only.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        {
          error:
            'Payment is not configured. Set STRIPE_SECRET_KEY in .env.local (see .env.local.example).',
        },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { items }: { items: { id: string; quantity: number }[] } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    // Resolve and validate each cart item against the product catalog.
    const lineItems = items.map(({ id, quantity }) => {
      const product = products.find(p => p.id === id);
      if (!product) {
        throw new Error(`Unknown product: ${id}`);
      }
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description.slice(0, 200),
            images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${product.image}`],
            metadata: { sku: product.sku },
          },
          unit_amount: product.price,
        },
        quantity,
      };
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'HK', 'SG', 'JP', 'CN'],
      },
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to create checkout session.' },
      { status: 500 }
    );
  }
}
