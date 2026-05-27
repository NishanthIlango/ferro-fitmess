import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Ramesh K.",
    role: "Member · 2 years",
    text: "Ferro Fitness completely changed my life. The coaches actually care about your progress and the equipment is top-notch. Lost 22kg and gained confidence I never had.",
  },
  {
    name: "Divya M.",
    role: "Member · 1 year",
    text: "As a woman, I felt completely safe and supported here. The female trainers understand our goals. Best gym in Erode by a mile.",
  },
  {
    name: "Aravind P.",
    role: "Member · 3 years",
    text: "From skinny guy to competing in regional bodybuilding shows — Ferro made it possible. Vikram sir's coaching is world class.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 lg:py-32 bg-card/40 border-y border-white/5">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Testimonials</div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-12">
          Stories of <span className="text-gradient-red">strength</span>
        </h2>

        <div className="relative">
          <Quote className="size-12 text-primary/30 mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 mb-8">
                "{reviews[i].text}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="font-display text-xl">{reviews[i].name}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {reviews[i].role}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-10">
            <button onClick={prev} aria-label="Previous" className="size-10 grid place-items-center rounded-full glass hover:bg-white/10">
              <ChevronLeft className="size-5" />
            </button>
            <button onClick={next} aria-label="Next" className="size-10 grid place-items-center rounded-full glass hover:bg-white/10">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
