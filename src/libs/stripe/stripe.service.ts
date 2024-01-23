import { Stripe } from 'stripe';

export class StripeService extends Stripe {
  private static stripe: StripeService;
  private constructor() {
    super(process.env.STRIPE_SECRET_KEY, {
      apiVersion: `2023-10-16`,
    });
  }

  static getStripeService() {
    if (!StripeService.stripe) {
      StripeService.stripe = new StripeService();
    }
    return StripeService.stripe
  }

  payment(stripe: StripeService) {
    // stripe.payment()
  }

  webhookEvent(stripe: StripeService) {

  }
}