import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sofia M.",
    role: "Analista de Marketing",
    quote: "Eu costumava ter 5 apps diferentes para organizar nossa vida. O WeMoment mudou tudo! Agora, nosso calendário, planos de viagem e até a lista de restaurantes para visitar estão em um só lugar. É um alívio!",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    name: "Mateus L.",
    role: "Engenheiro de Software",
    quote: "Minha agenda é uma loucura, e eu sempre esquecia datas importantes. Com o WeMoment, eu não só lembro, como participo ativamente do planejamento. A lista de desejos compartilhada é minha arma secreta para surpreendê-la.",
    gradient: "from-purple-500 to-violet-500",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Histórias Reais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Casais que transformaram a organização do relacionamento com o WeMoment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card border-0 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote icon background */}
              <div className={`absolute top-4 right-4 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-3xl opacity-20`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 mb-6 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full`}></div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
