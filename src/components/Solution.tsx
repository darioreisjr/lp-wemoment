import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import solutionBg from "@/assets/solution-organized.jpg";

export const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary fill-primary animate-glow" />
            <span className="text-sm font-medium">A solução definitiva</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
            WeMoment: O Ponto de Encontro
            <br />
            de Toda a Sua Vida a Dois.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Nós criamos um espaço privado e colaborativo, projetado exclusivamente para o seu relacionamento. 
            O WeMoment não é mais um aplicativo, é o seu <span className="font-semibold text-foreground">álbum de memórias</span>, 
            <span className="font-semibold text-foreground"> calendário de eventos</span>, 
            <span className="font-semibold text-foreground"> planejador de aventuras</span> e 
            <span className="font-semibold text-foreground"> livro de sonhos</span>, tudo em um só lugar.
          </p>

          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <Sparkles className="w-5 h-5" />
            <span>É a tecnologia fortalecendo o que mais importa: a sua conexão.</span>
          </div>
        </div>

        {/* Visual Solution */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <img 
              src={solutionBg} 
              alt="WeMoment organizando tudo" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            
            {/* Overlay content */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl">
                Comece agora gratuitamente
              </Button>
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-2xl text-center">
                <p className="text-3xl font-black gradient-text">100%</p>
                <p className="text-sm text-muted-foreground">Privado</p>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <p className="text-3xl font-black gradient-text">∞</p>
                <p className="text-sm text-muted-foreground">Memórias</p>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <p className="text-3xl font-black gradient-text">1</p>
                <p className="text-sm text-muted-foreground">Lugar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
