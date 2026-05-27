import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Get In Touch</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            Start your <span className="text-gradient-red">journey today</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl glass p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-primary/15 grid place-items-center shrink-0">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="mt-1">Ferro Fitness, Erode, Tamil Nadu</div>
                  <a href="https://maps.app.goo.gl/UaFyTvnUFWCt5q2cA" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Get Directions →</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-primary/15 grid place-items-center shrink-0">
                  <Phone className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Call Us</div>
                  <a href="tel:+919000000000" className="block mt-1 hover:text-primary">+91 90000 00000</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-lg bg-primary/15 grid place-items-center shrink-0">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <a href="mailto:hello@ferrofitness.in" className="block mt-1 hover:text-primary">hello@ferrofitness.in</a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href="https://www.instagram.com/ferro_fitness_erode/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-11 grid place-items-center rounded-lg glass hover:bg-primary hover:border-primary transition"><Instagram className="size-5" /></a>
                <a href="#" aria-label="Facebook" className="size-11 grid place-items-center rounded-lg glass hover:bg-primary hover:border-primary transition"><Facebook className="size-5" /></a>
                <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="size-11 grid place-items-center rounded-lg glass hover:bg-primary hover:border-primary transition"><MessageCircle className="size-5" /></a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/5 aspect-video">
              <iframe
                title="Ferro Fitness Erode Location"
                src="https://www.google.com/maps?q=Erode,Tamil+Nadu&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl glass p-6 sm:p-8 space-y-4"
          >
            <h3 className="font-display text-2xl mb-2">Book your free trial</h3>
            <p className="text-sm text-muted-foreground mb-4">Fill the form & our team will reach out within 24 hours.</p>

            <input required placeholder="Your Name" className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition" />
            <input required type="tel" placeholder="Phone Number" className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition" />
            <input type="email" placeholder="Email (optional)" className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition" />
            <select className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition">
              <option>Goal: Weight Loss</option>
              <option>Goal: Muscle Gain</option>
              <option>Goal: General Fitness</option>
              <option>Goal: Personal Training</option>
            </select>
            <textarea rows={4} placeholder="Tell us more..." className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition resize-none" />

            <button type="submit" className="w-full rounded-lg bg-primary py-3 font-semibold uppercase tracking-widest hover:bg-primary/90 transition red-glow">
              {sent ? "✓ Submitted! We'll be in touch" : "Book Free Trial"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
