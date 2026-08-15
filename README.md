# Documentação Técnica — MeCart Front-end

## Visão Geral

**Nome do projeto:** MeCart Front-end (`mecart-front`)  
**Propósito:** fornecer a interface web do produto MeCart para criação e gestão de carrinhos de compra.  
**Função principal:** permitir o cadastro, edição, remoção e consulta de carrinhos e itens, com cálculo de totais e organização da experiência de compra no cliente.

## Stack Tecnológica

### Linguagens de programação
- TypeScript
- JavaScript (ecossistema de build e dependências)
- CSS-in-JS (via Stitches)

### Frameworks e bibliotecas principais
- **Front-end:** React 18
- **Roteamento:** React Router DOM
- **Gerenciamento de estado:** Zustand
- **Formulários e validação:** React Hook Form, Zod, `@hookform/resolvers`
- **HTTP client (preparado para integração):** Axios
- **UI e componentes:** Radix UI, Stitches, Phosphor Icons, React Select, Swiper, React Hot Toast
- **Utilitários:** date-fns, uuid

### Banco(s) de dados utilizados
- **No escopo deste repositório (front-end):** não há acesso direto a banco relacional/NoSQL.
- **Persistência local no cliente:** `localStorage` para carrinhos, itens e lista de produtos.
- **Persistência server-side:** consumida indiretamente por API externa do ecossistema MeCart.

### Build, versionamento e infraestrutura
- **Build tool/bundler:** Vite
- **Linguagem/transpilação:** TypeScript (`tsc`)
- **PWA:** `vite-plugin-pwa` + Workbox
- **Qualidade de código:** ESLint (`@rocketseat/eslint-config`)
- **Versionamento:** Git
- **Infraestrutura de hospedagem front-end:** configuração de roteamento para Vercel (`vercel.json`)

## Integrações Externas

- **API MeCart (backend):** `https://mecart.onrender.com`  
  Base de integração HTTP definida para comunicação com serviços de negócio do ecossistema MeCart.
- **Vercel (plataforma de hospedagem):** usada para servir o SPA com rewrite de rotas para a aplicação cliente.

## Arquitetura do Sistema

- **Padrão arquitetural:** SPA (Single Page Application) em React, com arquitetura modular por domínio de página e estado local centralizado em stores Zustand.

### Fluxo de dados (descrição textual)
1. O usuário interage com páginas de Carrinhos, Carrinho e Produtos.
2. Componentes de UI disparam ações nas stores (`cartsStorage` e `productsStorage`).
3. As stores atualizam estado em memória e persistem dados locais em `localStorage`.
4. Hooks de cálculo (ex.: totais de carrinho) derivam dados do estado para renderização.
5. A camada de serviços HTTP está preparada para integração com backend externo quando aplicável ao fluxo funcional.

### Justificativa arquitetural
- **React + Vite:** produtividade alta e entrega rápida de interface moderna.
- **Zustand:** gerenciamento de estado simples, com baixo boilerplate e boa separação de responsabilidades.
- **Persistência em `localStorage`:** suporte a uso imediato no cliente, reduzindo acoplamento para operações locais.
- **Estrutura por páginas/componentes:** facilita manutenção incremental e evolução de funcionalidades.

## Contato do Desenvolvedor

- **Nome:** DamasoMagno
- **E-mail:** limamdamaso@gmail.com
