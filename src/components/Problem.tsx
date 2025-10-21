import { Camera, Calendar, Plane, FileText } from "lucide-react";
import problemBg from "@/assets/problem-chaos.jpg";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/config/seo";

const problems = [
  { icon: Camera, label: "Fotos perdidas" },
  { icon: Calendar, label: "Datas esquecidas" },
  { icon: Plane, label: "Viagens desorganizadas" },
  { icon: FileText, label: "Ideias soltas" },
];

export const Problem = () => {
  return (
    <>
      <SEO config={getSEOConfig('problem')} path="/problem" />
      <section id="problem" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Sua história de amor está espalhada por todo o lugar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Fotos no Google Photos, planos de viagem em planilhas, datas importantes perdidas no WhatsApp 
            e aquela lista de sonhos em um bloco de notas esquecido. A vida a dois gera um universo de informações, 
            e a fragmentação digital causa estresse, perda de contexto e memórias que se perdem no tempo.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground mt-6">
            Soa familiar?
          </p>
        </div>

        {/* Visual representation */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={problemBg} 
              alt="Representação do caos digital" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
          </div>
        </div>

        {/* Problem icons grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center rotate-3 hover:rotate-6 transition-transform">
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-foreground">{problem.label}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};
