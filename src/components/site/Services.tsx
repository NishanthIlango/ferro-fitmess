import { motion } from "framer-motion";
import { Dumbbell, Flame, UserCog, Zap, Heart, Apple } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Weight Training", desc: "Build raw strength with progressive overload programs on premium plate-loaded equipment." },
  { icon: Flame, title: "Fat Loss", desc: "Science-backed HIIT, cardio and nutrition protocols engineered to torch fat sustainably." },
  { icon: UserCog, title: "Personal Training", desc: "1-on-1 coaching with personalized programming, form correction and accountability." },
  { icon: Zap, title: "Strength & Conditioning", desc: "Athletic development for explosiveness, power and functional performance." },
  { icon: Heart, title: "Cardio Zone", desc: "Treadmills, ellipticals, bikes and assault rowers — all curated for elite cardio gains." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Custom meal plans built around your body, goals, lifestyle and budget." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-card/40 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What We Offer</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            Programs that <span className="text-gradient-red">deliver results</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl p-8 bg-card border border-white/5 hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="size-14 rounded-xl bg-primary/10 grid place-items-center mb-6 group-hover:bg-primary group-hover:scale-110 transition">
                  <s.icon className="size-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
