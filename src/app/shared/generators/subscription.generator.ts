import { GroupGenerator } from "@shared/generators/group.generator";
import { SubscriptionInterface } from "@shared/interfaces/subscription.interface";

export class SubscriptionGenerator {
  static subscription(): SubscriptionInterface {
    return {
      id: 1,
      name: "Test subscription",
      description: "Description of test subscription",
      price: 99,
      currency: "CHF",
      trial_period: 0,
      trial_unit: null,
      recurrence_period: 0,
      recurrence_unit: null,
      category: "premium",
      group: GroupGenerator.group()
    };
  }
}