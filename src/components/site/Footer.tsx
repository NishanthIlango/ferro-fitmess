import { Dumbbell, Instagram, Facebook, MessageCircle } from "lucide-react";
import  logo from "@/assets/logos.png";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
            <div className="logo">
              <img src={logo} alt="Ferro Fitness logo" height={100} width={110}/>
            </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Erode's premium fitness destination. Building stronger bodies and stronger mindsets since day one.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#services" className="hover:text-foreground">Programs</a></li>
            <li><a href="#trainers" className="hover:text-foreground">Trainers</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Hours</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon–Sat: 5:00 AM – 10:30 PM</li>
            <li>Sunday: 6:00 AM – 11:00 AM</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Follow</div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/ferro_fitness_erode/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-10 grid place-items-center rounded-lg glass hover:bg-primary transition"><Instagram className="size-5" /></a>
            <a href="#" aria-label="Facebook" className="size-10 grid place-items-center rounded-lg glass hover:bg-primary transition"><Facebook className="size-5" /></a>
            <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="size-10 grid place-items-center rounded-lg glass hover:bg-primary transition"><MessageCircle className="size-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ferro Fitness Erode. All rights reserved.
      </div>
    </footer>
  );
}
