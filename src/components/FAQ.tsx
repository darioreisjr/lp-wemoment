import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "O WeMoment é realmente gratuito?",
      answer:
        "Sim! O plano gratuito inclui dashboard personalizado, calendário compartilhado ilimitado, lista de desejos com até 50 itens, 500 MB de fotos e 1 planejador de viagem. Você pode usar o WeMoment gratuitamente para sempre. O plano Premium oferece recursos extras para quem quer ainda mais funcionalidades.",
    },
    {
      question: "Preciso de cartão de crédito para começar?",
      answer:
        "Não! Para usar o plano gratuito, você não precisa informar nenhum dado de pagamento. Basta criar sua conta e começar a usar imediatamente.",
    },
    {
      question: "Meus dados estão seguros?",
      answer:
        "Absolutamente. Usamos criptografia ponta a ponta para proteger todas as suas informações. Seus momentos, fotos e dados pessoais são 100% privados e nunca são compartilhados com terceiros. Privacidade é um dos nossos valores fundamentais.",
    },
    {
      question: "Como funciona o compartilhamento entre o casal?",
      answer:
        "Quando você cria sua conta, pode convidar seu parceiro(a) por e-mail. Assim que aceitar o convite, vocês terão acesso ao mesmo espaço compartilhado, onde podem adicionar memórias, planejar eventos e atualizar a lista de desejos juntos, em tempo real.",
    },
    {
      question: "Posso cancelar o plano Premium a qualquer momento?",
      answer:
        "Sim! Você pode cancelar sua assinatura Premium quando quiser, sem multas ou taxas ocultas. Após o cancelamento, sua conta volta automaticamente para o plano gratuito e você mantém acesso às funcionalidades básicas.",
    },
    {
      question: "O que acontece com minhas fotos se eu cancelar o Premium?",
      answer:
        "Suas fotos nunca serão excluídas. Se você cancelar o Premium, continuará tendo acesso às suas fotos, mas o limite de armazenamento voltará para 500 MB. Se você já tiver mais que isso, não perderá nada, mas não poderá adicionar novas fotos até liberar espaço ou reativar o Premium.",
    },
    {
      question: "Posso usar o WeMoment em vários dispositivos?",
      answer:
        "Sim! O WeMoment é acessível via web de qualquer dispositivo (computador, tablet ou celular). Basta fazer login e todos os seus dados estarão sincronizados automaticamente.",
    },
    {
      question: "Como funciona o planejador de viagens?",
      answer:
        "O planejador de viagens permite criar roteiros detalhados com datas, locais, reservas e até controle de despesas. Você pode adicionar checklists personalizados, anexar documentos importantes e compartilhar tudo com seu parceiro(a) em tempo real.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">Perguntas Frequentes</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Dúvidas? <span className="gradient-text">Temos respostas.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa saber sobre o WeMoment em um só lugar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact support */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <button className="text-primary font-semibold hover:underline">
              Entre em contato
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};