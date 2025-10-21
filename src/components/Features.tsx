import { Card } from "@/components/ui/card";
import { LayoutDashboard, CalendarRange, Heart } from "lucide-react";
import dashboardImg from "@/assets/feature-dashboard.jpg";
import calendarImg from "@/assets/feature-calendar.jpg";
import wishlistImg from "@/assets/feature-wishlist.jpg";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/config/seo";

const features = [
  {
    icon: LayoutDashboard,
    title: "Seu Painel do Amor",
    description: "Comece cada dia com uma saudação personalizada e veja o tempo exato do seu relacionamento. Acompanhe estatísticas, próximos eventos e atalhos para registrar memórias em segundos.",
    image: dashboardImg,
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: CalendarRange,
    title: "Planejem o Futuro, Juntos",
    description: "Desde o próximo encontro até a viagem dos sonhos. Nosso calendário interativo e planejador de viagens completo (com checklist e controle de despesas) tornam qualquer planejamento simples e divertido.",
    image: calendarImg,
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Do Sonho à Realidade",
    description: "Criem uma lista de desejos compartilhada, categorizada por prioridades. Conquistem cada item e eternizem o momento em uma galeria de fotos organizada por eventos, e não apenas por datas.",
    image: wishlistImg,
    color: "from-purple-500 to-violet-500",
  },
];

export const Features = () => {
  return (
    <>
      <SEO config={getSEOConfig('features')} path="/features" />
      <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Os Pilares da Conexão
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Funcionalidades pensadas para fortalecer o que realmente importa: vocês dois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group glass-card border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 gradient-text">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};
