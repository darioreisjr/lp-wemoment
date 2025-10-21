import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/config/seo";

export const Hero = () => {
  return (
    <>
      <SEO config={getSEOConfig('home')} path="/home" />
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 animate-float">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">O santuário digital para casais</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text leading-tight">
          Suas memórias, seus planos,
          <br />
          seu universo a dois.
          <br />
          <span className="text-primary">Centralizado.</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          O WeMoment é o santuário digital para casais. Chega de caos em múltiplos apps. 
          Organizem a vida, celebrem a jornada e fortaleçam a conexão, tudo em um só lugar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 rounded-full">
            Crie seu espaço grátis
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-6 rounded-full">
            Saiba mais
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Cadastro rápido, sem necessidade de cartão de crédito.
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>
    </>
  );
};
