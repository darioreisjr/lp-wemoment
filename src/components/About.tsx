import { Heart, Shield, Sparkles, Users } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/config/seo";

export const About = () => {
  return (
    <>
      <SEO config={getSEOConfig('about')} path="/about" />
      <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 gradient-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-40 left-10 w-3 h-3 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Intro */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Sobre o <span className="gradient-text">WeMoment</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nascemos da crença de que relacionamentos incríveis merecem ferramentas incríveis. 
            O WeMoment é mais do que um aplicativo: é um espaço sagrado onde a tecnologia fortalece o amor.
          </p>
        </div>

        {/* Nossa Missão */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass-card p-10 rounded-3xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ajudar casais a viverem vidas mais organizadas, conectadas e memoráveis, 
              eliminando o caos digital e criando um santuário onde cada momento importa.
            </p>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="mb-16">
          <h3 className="text-4xl font-black text-center mb-12">Nossos Valores</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Privacidade Total</h4>
              <p className="text-muted-foreground">
                Seus momentos são só seus. Criptografia ponta a ponta e zero compartilhamento de dados.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-xl mb-4">
                <Sparkles className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Simplicidade</h4>
              <p className="text-muted-foreground">
                Tecnologia poderosa, interface intuitiva. Complexidade é nossa responsabilidade, não a sua.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Conexão Real</h4>
              <p className="text-muted-foreground">
                Construímos ferramentas que aproximam, não distraem. Cada recurso fortalece vínculos.
              </p>
            </div>
          </div>
        </div>

        {/* Para quem é o WeMoment */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 rounded-3xl">
            <h3 className="text-3xl font-black text-center mb-8">Para Quem é o WeMoment?</h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Para casais que sonham juntos.</strong> Se vocês têm uma lista mental de lugares para visitar, 
                restaurantes para experimentar, ou metas para conquistar, o WeMoment transforma essas ideias em realidade organizada.
              </p>
              <p>
                <strong className="text-foreground">Para os ocupados que se importam.</strong> Agenda cheia não significa amor em segundo plano. 
                Nosso calendário inteligente garante que nenhuma data importante seja esquecida.
              </p>
              <p>
                <strong className="text-foreground">Para quem quer menos caos, mais memórias.</strong> Chega de apps fragmentados. 
                Um só lugar para tudo que importa na vida a dois.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};