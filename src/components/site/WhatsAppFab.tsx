import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 grid place-items-center rounded-full bg-emerald-500 hover:bg-emerald-600 transition shadow-2xl shadow-emerald-500/30"
    >
      <MessageCircle className="size-7 text-white" />
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
    </a>
  );
}
