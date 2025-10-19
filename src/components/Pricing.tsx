import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Comece <span className="gradient-text">grátis</span>, 
            <br />cresça quando quiser.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O WeMoment é feito para ser acessível. Comece gratuitamente e desbloqueie recursos premium conforme sua jornada evolui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Gratuito */}
          <div className="glass-card p-8 rounded-3xl relative">
            <div className="mb-6">
              <h3 className="text-3xl font-black mb-2">Gratuito</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-black gradient-text">R$ 0</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-muted-foreground">Perfeito para começar a organizar a vida a dois</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Dashboard personalizado com contador de relacionamento</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Calendário compartilhado ilimitado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Lista de desejos com até 50 itens</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Galeria de fotos até 500 MB</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>1 planejador de viagem</span>
              </li>
            </ul>

            <Button variant="outline" size="lg" className="w-full">
              Começar grátis
            </Button>
          </div>

          {/* Plano Premium */}
          <div className="glass-card p-8 rounded-3xl relative border-2 border-primary/50">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="gradient-primary px-6 py-2 rounded-full text-sm font-bold text-white">
                Mais Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-3xl font-black mb-2">Premium</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-black gradient-text">R$ 19,90</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-muted-foreground">Para casais que querem experiência completa</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Tudo do plano Gratuito, mais:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Lista de desejos <strong>ilimitada</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Galeria de fotos até <strong>20 GB</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Planejadores de viagem <strong>ilimitados</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Timeline interativa de memórias</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Temas personalizados exclusivos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Suporte prioritário</span>
              </li>
            </ul>

            <Button variant="hero" size="lg" className="w-full">
              Assinar Premium
            </Button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            🔒 Pagamento seguro • Cancele quando quiser • Sem taxas ocultas
          </p>
        </div>
      </div>
    </section>
  );
};