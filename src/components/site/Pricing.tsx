import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "1,499",
    period: "/month",
    features: ["Unlimited gym access", "All cardio & weights", "Locker facility", "Free assessment"],
  },
  {
    name: "Quarterly",
    price: "3,999",
    period: "/3 months",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Monthly",
      "1 free PT session/month",
      "Diet consultation",
      "Body composition tracking",
      "Priority support",
    ],
  },
  {
    name: "Yearly",
    price: "12,999",
    period: "/year",
    features: [
      "Everything in Quarterly",
      "4 PT sessions included",
      "Custom diet plan",
      "Free supplements starter",
      "Family discount eligible",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Membership</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            Choose your <span className="text-gradient-red">plan</span>
          </h2>
          <p className="text-muted-foreground mt-4">No hidden fees. Cancel anytime. Real value.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition ${
                p.featured
                  ? "bg-gradient-to-b from-primary/20 to-card border-primary red-glow scale-[1.02]"
                  : "bg-card border-white/5 hover:border-white/15"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {p.badge}
                </div>
              )}
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{p.name}</div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl">₹</span>
                <span className="font-display text-5xl">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-primary shrink-0 mt-1" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center rounded-md py-3 text-sm font-semibold uppercase tracking-widest transition ${
                  p.featured ? "bg-primary hover:bg-primary/90" : "glass hover:bg-white/10"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
