import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Do you offer a free trial session?", a: "Yes! We offer a complimentary trial workout for all first-time visitors. Just walk in or book online." },
  { q: "What are the timings?", a: "We're open Mon–Sat: 5:00 AM – 10:30 PM and Sun: 6:00 AM – 11:00 AM." },
  { q: "Do you provide diet plans?", a: "Absolutely. Our certified nutrition coaches build customized diet plans based on your goal, body type, and lifestyle." },
  { q: "Is there separate women's training?", a: "Yes, we have dedicated women's slots and female trainers to ensure complete comfort and safety." },
  { q: "What's included in personal training?", a: "1-on-1 coaching, personalized programming, form correction, nutrition support and regular progress tracking." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 bg-card/40 border-y border-white/5">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">FAQ</div>
          <h2 className="font-display text-4xl sm:text-5xl">
            Frequently <span className="text-gradient-red">asked</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-xl bg-card border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <Plus className={`size-5 text-primary transition ${open === i ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
