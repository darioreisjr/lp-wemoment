# WeMoment – Landing Page e Experiência Digital para Casais

Bem-vindo ao repositório da **WeMoment**, uma landing page moderna criada para apresentar um super app que ajuda casais a organizarem compromissos, sonhos e memórias em um único lugar. O projeto combina performance, SEO avançado, storytelling envolvente e uma experiência visual rica construída sobre um design system próprio.

<img width="1906" height="911" alt="image" src="https://github.com/user-attachments/assets/c2728375-3ec6-4f54-92e5-ec741da3bed8" />


## ✨ Principais Recursos

- **Navegação completa por seções**: Hero, Problem, Solution, Features, Pricing, FAQ, About, Testimonials e chamada final para ação.
- **Design system proprietário** baseado em Tailwind CSS com glassmorphism, gradientes e animações suaves.
- **Componentes acessíveis** construídos sobre Radix UI, shadcn/ui e ícones Lucide.
- **SEO avançado** com meta tags dinâmicas, Open Graph, Twitter Cards, JSON-LD e sitemap prontos para produção.
- **Analytics prontos para uso** via Vercel Analytics, com coleta automática de pageviews e métricas de Web Vitals.
- **Integração com WhatsApp** para contato rápido direto da interface.
- **Arquitetura React modular** com React Router, React Query e Helmet Provider, facilitando evolução para um produto completo.

## 🛠️ Stack Tecnológica

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) e [tailwindcss-animate](https://github.com/joe-bell/tailwindcss-animate)
- [Radix UI](https://www.radix-ui.com/) e componentes shadcn/ui personalizados (botões, cards, toasts, tooltips etc.)
- [@tanstack/react-query](https://tanstack.com/query/latest) para gerenciamento de dados assíncronos
- [react-router-dom](https://reactrouter.com/) para roteamento client-side
- [react-helmet-async](https://github.com/staylor/react-helmet-async) para meta tags dinâmicas
- [@vercel/analytics](https://vercel.com/docs/analytics) para métricas de uso

## 📁 Estrutura de Pastas

```
src/
├── App.tsx                # Definição das rotas e layout principal
├── main.tsx               # Bootstrap do React + HelmetProvider + Analytics
├── assets/                # Imagens utilizadas nas seções
├── components/
│   ├── SEO.tsx            # Componente reutilizável para SEO
│   ├── OrganizationSchema.tsx
│   ├── WhatsAppButton.tsx # Atalho fixo para atendimento
│   ├── ui/                # Componentes base (botão, card, toaster, etc.)
│   ├── Hero.tsx, Problem.tsx, Solution.tsx, Features.tsx,
│   │   Pricing.tsx, FAQ.tsx, About.tsx, FinalCTA.tsx, Testimonials.tsx
├── config/seo.ts          # Centralização das configurações de SEO por página
├── hooks/                 # Hooks personalizados (reservado para evolução)
├── lib/                   # Helpers e utilidades compartilhadas
├── pages/NotFound.tsx     # Página 404 com log de acesso
└── index.css              # Design system e utilitários globais
```

> Para detalhes aprofundados sobre as estratégias de SEO e Analytics consulte o arquivo [SEO_DOCUMENTATION.md](./SEO_DOCUMENTATION.md).

## 🚀 Começando

### Pré-requisitos

- Node.js **>= 18**
- Gerenciador de pacotes à sua escolha (`pnpm`, `npm` ou `yarn`)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lp-wemoment.git
cd lp-wemoment

# Instale as dependências (utilizando pnpm por padrão)
pnpm install
# ou
npm install
```

### Scripts Disponíveis

| Comando           | Descrição                                                                 |
| ----------------- | ------------------------------------------------------------------------- |
| `pnpm dev`        | Inicia o servidor de desenvolvimento Vite com hot-reload.                 |
| `pnpm build`      | Gera a versão otimizada para produção na pasta `dist/`.                   |
| `pnpm build:dev`  | Compila em modo `development`, útil para inspecionar bundles não minificados. |
| `pnpm preview`    | Serve localmente o bundle produzido em `dist/`.                           |
| `pnpm lint`       | Executa o ESLint em todo o projeto, garantindo padrões de código.         |

> Substitua `pnpm` por `npm run` ou `yarn` conforme o gerenciador escolhido.

### Ambiente de Desenvolvimento

1. Renomeie/duplique os arquivos de configuração conforme necessário (por padrão não há `.env`).
2. Execute `pnpm dev` e acesse `http://localhost:5173` no navegador.
3. As alterações em arquivos `.tsx` e `.css` são recarregadas automaticamente.

## 📈 SEO e Analytics

- Cada rota possui SEO específico através de `getSEOConfig` e do componente `<SEO />`.
- `OrganizationSchema` injeta dados estruturados globais da marca.
- `sitemap.xml` e `robots.txt` já estão configurados em `public/` para facilitar a indexação.
- O componente `<Analytics />` do Vercel já está montado em `main.tsx`, bastando conectar o projeto na Vercel para visualizar métricas.

## 🎨 Personalização do Design

O design system centralizado em `src/index.css` define variáveis CSS para cores, gradientes, raio de bordas e animações. Alguns pontos de extensão:

- Ajuste a paleta alterando as variáveis `--primary`, `--secondary`, etc.
- Estenda o glassmorphism com a classe utilitária `.glass-card`.
- Utilize as classes `.gradient-text` e `.gradient-primary` para manter consistência visual.

## ➕ Adicionando Novas Seções

1. Crie um componente em `src/components` seguindo o padrão dos existentes.
2. Caso precise de SEO dedicado, inclua `SEO` com a chave correspondente e configure os metadados em `src/config/seo.ts`.
3. Registre a rota em `App.tsx` e atualize o `Navbar` se necessário.
4. Adicione imagens em `src/assets` e importe-as diretamente no componente.

## 🧪 Qualidade e Boas Práticas

- Utilize `pnpm lint` antes de abrir PRs para garantir aderência ao ESLint/TypeScript.
- Prefira componentes e hooks reutilizáveis no diretório `ui/` para manter consistência.
- Novos ícones podem ser importados de `lucide-react` conforme necessidade.

## 🚀 Deploy

1. Execute `pnpm build` para gerar o bundle estático em `dist/`.
2. Faça deploy em qualquer serviço de hospedagem estática (Vercel, Netlify, Cloudflare Pages, etc.).
3. Ao usar Vercel, o analytics será habilitado automaticamente, bastando conectar o repositório.

## 🤝 Contribuindo

1. Crie um fork do projeto.
2. Crie uma branch para sua feature/bugfix: `git checkout -b minha-feature`.
3. Faça commits descritivos e abra um Pull Request.
4. Descreva claramente mudanças visuais ou ajustes em SEO na descrição da PR.

## 📄 Licença

Este projeto não possui uma licença pública explícita. Consulte os responsáveis antes de reutilizar o código em produção.

## 💬 Suporte e Contato

- Botão flutuante do WhatsApp disponível em produção para contato rápido.
- Ou abra uma issue neste repositório descrevendo dúvidas, sugestões ou bugs.

---

Feito com 💖 para criar experiências memoráveis a dois!
