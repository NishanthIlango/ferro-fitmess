import { motion } from "framer-motion";
import tr1 from "@/assets/transform1.jpg";
import tr2 from "@/assets/transform2.jpg";
import tr3 from "@/assets/transform3.jpg";

const items = [
  { img: tr1, name: "Karthik R.", result: "Lost 18 kg in 5 months" },
  { img: tr2, name: "Meena S.", result: "Lost 14 kg · Toned physique" },
  { img: tr3, name: "Sanjay V.", result: "Gained 9 kg lean muscle" },
];

export function Transformations() {
  return (
    <section id="transformations" className="py-24 lg:py-32 bg-card/40 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Real Results</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            Member <span className="text-gradient-red">transformations</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={it.img}
                alt={`${it.name} transformation`}
                width={1024}
                height={1024}
                loading="lazy"
                className="size-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">{it.result}</div>
                <div className="font-display text-2xl">{it.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
