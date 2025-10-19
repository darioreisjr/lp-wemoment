import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import ctaBg from "@/assets/cta-universe.jpg";

export const FinalCTA = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 gradient-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 gradient-primary rounded-full animate-float opacity-60" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-float">
            <Heart className="w-5 h-5 text-primary fill-primary animate-glow" />
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-base font-semibold">Construa seu universo</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="gradient-text">Sua história merece</span>
            <br />
            <span className="text-foreground">um lugar especial.</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Comece a construir seu santuário digital hoje.
            <br />
            <span className="font-semibold text-foreground">É grátis e leva menos de um minuto.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 rounded-full shadow-2xl">
              Centralizar minha vida a dois
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-3xl font-black gradient-text mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Gratuito</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-3xl font-black gradient-text mb-2">60s</p>
              <p className="text-sm text-muted-foreground">Para começar</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-3xl font-black gradient-text mb-2">🔒</p>
              <p className="text-sm text-muted-foreground">100% Privado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-64 gradient-primary blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
};
