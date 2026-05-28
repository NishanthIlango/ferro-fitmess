import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import hero from "@/assets/heros.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Ferro Fitness Erode gym"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] mb-6">
            <span className="size-1.5 rounded-full green-glow animate-pulse" />
            Erode's Premium Fitness Destination
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] mb-6">
            Forge Your <br />
            <span className="text-yellow">Iron Body</span>
          </h1>

          <p className="text-lg text-foreground/80 max-w-xl mb-10 leading-relaxed">
            At Ferro Fitness Erode, we don't just train muscles — we build mindsets.
            World-class equipment, expert coaches, and a community that refuses average.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition red-glow"
            >
              Join Now
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md glass px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition"
            >
              <Play className="size-4" /> Book Free Trial
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { v: "1500+", l: "Active Members" },
              { v: "12+", l: "Expert Trainers" },
              { v: "500+", l: "Transformations" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl sm:text-4xl text-gradient-red">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
