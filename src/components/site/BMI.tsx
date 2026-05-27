import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export function BMI() {
  const [h, setH] = useState(170);
  const [w, setW] = useState(70);

  const { bmi, cat, color } = useMemo(() => {
    const m = h / 100;
    const b = w / (m * m);
    let cat = "Normal", color = "text-emerald-400";
    if (b < 18.5) { cat = "Underweight"; color = "text-yellow-400"; }
    else if (b >= 25 && b < 30) { cat = "Overweight"; color = "text-orange-400"; }
    else if (b >= 30) { cat = "Obese"; color = "text-primary"; }
    return { bmi: b.toFixed(1), cat, color };
  }, [h, w]);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Free Tool</div>
            <h2 className="font-display text-4xl sm:text-5xl mb-4">
              Know your <span className="text-gradient-red">BMI</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Calculate your Body Mass Index and understand where your fitness journey begins.
            </p>

            <div className="space-y-5">
              <div>
                <label className="flex justify-between text-sm mb-2">
                  <span>Height</span><span className="text-primary font-medium">{h} cm</span>
                </label>
                <input type="range" min={120} max={220} value={h} onChange={(e) => setH(+e.target.value)}
                  className="w-full accent-primary" />
              </div>
              <div>
                <label className="flex justify-between text-sm mb-2">
                  <span>Weight</span><span className="text-primary font-medium">{w} kg</span>
                </label>
                <input type="range" min={30} max={180} value={w} onChange={(e) => setW(+e.target.value)}
                  className="w-full accent-primary" />
              </div>
            </div>
          </div>

          <div className="text-center bg-background/60 rounded-2xl p-10">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Your BMI</div>
            <div className="font-display text-7xl text-gradient-red mb-2">{bmi}</div>
            <div className={`text-lg font-semibold uppercase tracking-widest ${color}`}>{cat}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
