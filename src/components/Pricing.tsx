import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/config/seo";

export const Pricing = () => {
  return (
    <>
      <SEO config={getSEOConfig('pricing')} path="/pricing" />
      <section id="precos" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Planos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Flexíveis
        </span>
      </h2>
      <p className="md:w-1/2 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        Escolha o plano que melhor se adapta à sua jornada. Comece de graça e evolua quando estiverem prontos.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Plano Gratuito */}
        <Card className="flex flex-col justify-between shadow-lg">
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              Gratuito
            </CardTitle>
            <CardDescription>
              Comece a organizar a vida do casal com as funcionalidades essenciais. Perfeito para conhecer o WeMoment.
            </CardDescription>
            <div>
              <span className="text-3xl font-bold">R$0</span>
              <span className="text-muted-foreground"> / para sempre</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>Cadastro para o casal (2 perfis)</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>Dashboard com estatísticas</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>Até 15 eventos no Calendário</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>Até 10 desejos na Lista</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>Até 5 anotações</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>Até 20 fotos na Galeria (100MB)</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>1 Planejamento de Viagem</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Começar Agora</Button>
          </CardFooter>
        </Card>

        {/* Plano Premium */}
        <Card className="flex flex-col justify-between border-2 border-primary shadow-lg dark:border-primary relative">
          <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
            <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Mais Popular
            </span>
          </div>
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              WeMoment Premium
            </CardTitle>
            <CardDescription>
              A experiência completa para casais que não querem limites para suas memórias e planos.
            </CardDescription>
            <div>
              <span className="text-3xl font-bold">R$19,90</span>
              <span className="text-muted-foreground"> /mês</span>
            </div>
            <p className="text-sm text-muted-foreground">ou R$199,90 por ano (2 meses grátis)</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center font-semibold">
                <Check className="text-primary mr-2" />
                <span>Tudo do plano Gratuito, e mais:</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Eventos, Desejos e Anotações Ilimitados</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Galeria de Fotos Ilimitada (10GB)</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Planejamento de Viagens Ilimitado</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Backup em Nuvem seguro</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Temas e personalização da interface</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Exportação de Memórias em PDF</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Suporte Prioritário</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled>
              Em breve
            </Button>
          </CardFooter>
        </Card>

        {/* Plano Viagens */}
        <Card className="flex flex-col justify-between shadow-lg">
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              WeMoment Viagens
            </CardTitle>
            <CardDescription>
              Planeje uma viagem inesquecível com todos os recursos, sem a necessidade de uma assinatura mensal.
            </CardDescription>
            <div>
              <span className="text-3xl font-bold">R$29,90</span>
              <span className="text-muted-foreground"> /por viagem</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center font-semibold">
                <Check className="text-primary mr-2" />
                <span>Acesso completo para uma viagem:</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Checklist ilimitado para a viagem</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Controle de despesas completo</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Galeria de fotos exclusiva da viagem</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Compartilhamento do roteiro</span>
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2" />
                <span>Pagamento único, acesso vitalício àquela viagem</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" disabled>
              Em breve
            </Button>
          </CardFooter>
        </Card>
      </div>
      </section>
    </>
  );
};