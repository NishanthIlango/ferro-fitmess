import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import gym from "@/assets/about.png";

const points = [
  "State-of-the-art imported equipment",
  "Certified personal trainers",
  "Customized nutrition plans",
  "Air-conditioned premium facility",
  "Dedicated cardio & strength zones",
  "Hygienic, spacious & well-lit",
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-primary/60">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={gym}
            alt="Ferro Fitness gym interior"
            width={1600}
            height={1000}
            loading="lazy"
            className="rounded-2xl object-cover aspect-[4/5] w-full"
          />
          <div className="absolute -bottom-6 -right-6 hidden sm:block glass rounded-xl p-6 max-w-[220px]">
            <div className="font-display text-4xl text-gradient-red">8+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
              Years of building champions
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">About Ferro</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            More than a gym.<br /> A <span className="text-gradient-red">brotherhood</span>.
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-6">
            Ferro Fitness was born in Erode with a single mission — to deliver an
            international-grade training experience to every athlete who walks through
            our doors. From the first-time lifter to the seasoned bodybuilder, we shape
            stronger bodies, sharper minds, and unstoppable confidence.
          </p>
          <p className="text-foreground/60 leading-relaxed mb-8">
            <strong className="text-foreground">Our mission:</strong> Make world-class
            fitness accessible to every individual in Erode through science-backed
            training, premium equipment, and unmatched coaching support.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
