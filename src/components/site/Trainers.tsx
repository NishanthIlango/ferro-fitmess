import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import t1 from "@/assets/trainer1.jpg";
import t2 from "@/assets/trainer2.jpg";
import t3 from "@/assets/trainer3.jpg";

const trainers = [
  { img: t1, name: "Arjun Kumar", role: "Head Coach · Strength", exp: "8+ Years", cert: "ACE, K11 Certified" },
  { img: t2, name: "Priya Ravi", role: "Women's Fitness & Toning", exp: "6+ Years", cert: "ACSM, Nutrition Coach" },
  { img: t3, name: "Vikram Singh", role: "Bodybuilding · Hypertrophy", exp: "10+ Years", cert: "IFBB, Sports Nutritionist" },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Meet The Team</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            Coaches who <span className="text-gradient-red">make champions</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-white/5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  width={768}
                  height={960}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">{t.role}</div>
                <h3 className="font-display text-2xl mb-2">{t.name}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{t.exp} · {t.cert}</span>
                  <div className="flex gap-2">
                    <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="size-4" /></a>
                    <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="size-4" /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
