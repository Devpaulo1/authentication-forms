# AGENTS.md — Authentication Form

## 1. Contexto do projeto

**Nome:** `authentication-form`  
**Objetivo:** Criar uma interface de autenticação com Sign In e Sign Up utilizando React, JavaScript, Vite e Tailwind CSS.

O projeto deve reproduzir as referências visuais fornecidas, mantendo uma arquitetura modular, componentes reutilizáveis e desenvolvimento incremental.

### Objetivos de aprendizagem

- Criar e executar um projeto React com Vite.
- Compreender a diferença entre `create-vite@latest` e utilizar uma versão específica do Vite, incluindo Vite 8.
- Construir uma interface estática antes de adicionar interatividade.
- Criar componentes reutilizáveis com props e children.
- Utilizar Tailwind CSS para layout, tema, estados e responsividade.
- Utilizar `useState`, eventos e renderização condicional.
- Implementar formulários controlados e validação com Zod.
- Organizar responsabilidades por componentes, formulários e páginas.

## 2. Stack tecnológica

- React
- JavaScript com JSX
- Vite
- Tailwind CSS v4
- `@tailwindcss/vite`
- Material UI (`@mui/material`), quando necessário
- i18next e react-i18next
- Zod

### Regras tecnológicas

1. Não utilizar TypeScript.
2. Utilizar Tailwind CSS como sistema principal de estilização.
3. Utilizar `@tailwindcss/vite` para a integração do Tailwind CSS v4.
4. Verificar as dependências existentes antes de instalar ou atualizar pacotes.
5. Não misturar a configuração do Tailwind v3 com a do v4.
6. Não utilizar Material UI para substituir os componentes personalizados definidos neste documento sem justificativa.
7. Não adicionar bibliotecas desnecessárias.
8. Não implementar backend ou autenticação real nesta atividade.

## 3. Referências visuais obrigatórias

Existem duas referências visuais:

- **Referência A:** tela Sign In.
- **Referência B:** tela Sign Up.

Ambas devem ser reproduzidas como parte da mesma aplicação.

As imagens originais devem ser preservadas e, preferencialmente, copiadas para o diretório `references/` do projeto, com nomes claros, por exemplo:

```text
references/
├── auth-signin.png
└── auth-signup.png
```

Se as imagens não estiverem acessíveis no diretório do projeto, solicite que sejam disponibilizadas antes de afirmar que realizou uma comparação visual direta.

### Prioridade das referências

Utilize esta ordem para tomar decisões:

1. Imagens fornecidas pelo usuário.
2. Especificações dimensionais deste documento.
3. Ajustes técnicos necessários para responsividade e acessibilidade.

Não redesenhe a interface por preferência estética própria.

## 4. Direção visual

A interface possui uma estética dark, minimalista e tecnológica, com destaque amarelo e iluminação azul.

### Artboard

- Resolução de referência: `1440 × 1024 px`.
- Fundo principal: `#000814`.
- Fonte: Inter.
- Card centralizado na área principal.
- Elementos decorativos posicionados nas extremidades da tela.

A resolução de referência é utilizada para avaliar a fidelidade visual. Não deve ser imposta como dimensão fixa da aplicação.

### 4.1 Background

O background deve utilizar uma cor sólida com dois glows decorativos.

**Glow amarelo:**

- Dimensão: `520 × 520 px`.
- Posição: `left: -120px; top: -130px`.
- Blur: `100px`.
- Tonalidade amarela ou amarelo-oliva, conforme a referência.
- Opacidade suficiente para produzir iluminação suave, sem prejudicar a leitura.

**Glow azul:**

- Dimensão: `600 × 600 px`.
- Posicionado parcialmente fora do canto inferior direito.
- Blur: `120px`.
- Tonalidade azul profunda, com centro mais luminoso.
- Opacidade ajustada para reproduzir a referência.

Regras:

- Não substituir os dois glows por um gradiente genérico de página inteira.
- Manter o fundo principal em `#000814`.
- Implementar os glows como elementos decorativos independentes.
- Utilizar `pointer-events: none` nos elementos decorativos.
- Evitar overflow horizontal.
- Não utilizar animações contínuas nos glows sem necessidade.

### 4.2 Elementos de topo

**Badge esquerdo**

Texto exato:

`AUTHENTICATION UI`

Características:

- Posição de referência: `left: 56px; top: 48px`.
- Formato pill.
- Fundo amarelo translúcido.
- Borda amarela discreta.
- Border radius de `999px`.
- Texto amarelo, pequeno e em caixa alta.

O badge deve estar presente em ambas as telas desde a versão estática.

**Indicador direito**

- `SIGN IN` na tela de login.
- `SIGN UP` na tela de cadastro.

O indicador deve mudar conforme o estado controlado por `AuthPage`.

## 5. Tela Sign In

A primeira referência representa o formulário de login.

### Conteúdo e hierarquia

Ordem visual obrigatória:

1. Título `Welcome Back`.
2. Subtítulo `Sign in to continue your journey`.
3. Campo `Email Address`.
4. Campo `Password`.
5. Linha com `Remember me` e `Forgot password?`.
6. Botão principal `Sign In`.
7. Separador `OR CONTINUE WITH`.
8. Três botões sociais.
9. Texto `Don't have an account?` com o link `Sign Up`.

### Comportamentos visuais

- Título em amarelo, com destaque tipográfico.
- Subtítulo em azul acinzentado.
- Labels em branco.
- Campos azul-escuros com bordas azuis.
- Botão principal amarelo com texto escuro.
- Links de destaque amarelos.
- Separador com linhas azuis finas.
- Botões sociais escuros, com bordas azuis e símbolos amarelos.

### Dimensões

- Largura de referência do card: `480px`.
- Altura aproximada sem erros: `594px`.
- Padding horizontal: `30px`.
- Padding superior: `34px`.
- Padding inferior: `30px`.
- Border radius: `24px`.

Não force uma altura fixa caso o conteúdo precise crescer.

### Campos

**Email Address**

- Tipo `email`.
- Placeholder: `you@example.com`.
- Autocomplete: `email`.

**Password**

- Tipo `password`.
- Placeholder visual semelhante a `••••••••`.
- Autocomplete: `current-password`.

**Remember me**

- Deve ser representado por um controle acessível de seleção.
- Não precisa persistir a seleção nesta atividade.
- A posição deve corresponder à referência.

**Forgot password?**

- Link visual amarelo.
- Pode exibir uma mensagem demonstrativa de recuperação.
- Não implementar recuperação real sem backend.

## 6. Tela Sign Up

A segunda referência representa o formulário de cadastro.

### Conteúdo e hierarquia

Ordem visual obrigatória:

1. Título `Create Account`.
2. Subtítulo `Join our community today`.
3. Campo `Full Name`.
4. Campo `Email Address`.
5. Campo `Password`.
6. Botão principal `Create Account`.
7. Separador `OR CONTINUE WITH`.
8. Três botões sociais.
9. Texto `Already have an account?` com o link `Sign In`.

### Dimensões

- Largura de referência do card: `480px`.
- Altura aproximada sem erros: `652px`.
- Padding horizontal: `30px`.
- Padding superior: `34px`.
- Padding inferior: `30px`.
- Border radius: `24px`.

### Campos

**Full Name**

- Tipo `text`.
- Placeholder: `Your full name`.
- Autocomplete: `name`.

**Email Address**

- Tipo `email`.
- Placeholder: `you@example.com`.
- Autocomplete: `email`.

**Password**

- Tipo `password`.
- Placeholder visual semelhante a `••••••••`.
- Autocomplete: `new-password`.

A referência visual de cadastro contém três campos. Não adicionar um campo visível de confirmação de senha, pois isso alteraria a composição visual.

A validação deve respeitar os campos apresentados. Se uma confirmação de senha for considerada necessária posteriormente, sua inclusão deve ser discutida antes de modificar o layout.

## 7. Design tokens

Centralizar os valores compartilhados e evitar estilos inconsistentes entre os formulários.

### Cores

| Token | Valor ou orientação |
|---|---|
| Background principal | `#000814` |
| Primary | `#FFD60A` |
| Primary foreground | `#000814` |
| Texto principal | Branco próximo de `#F8FAFC` |
| Texto secundário | Azul acinzentado |
| Superfície do card | Azul-marinho muito escuro |
| Fundo dos inputs | Azul-marinho |
| Borda dos inputs | Azul escuro |
| Borda do card | Azul escuro |
| Erro | Vermelho acessível |
| Focus | Amarelo principal |

Os valores exatos das superfícies, bordas e textos secundários devem ser ajustados por inspeção das referências. Não afirmar que foram extraídos diretamente do Figma se isso não tiver sido realizado.

### Tipografia

| Token | Valor |
|---|---|
| Família | Inter |
| Label | `13px` |
| Peso regular | `400` |
| Peso médio | `500` |
| Peso semibold | `600` |
| Peso bold | `700` |

O tamanho dos títulos deve reproduzir as imagens de referência.

### Espaçamentos e dimensões

| Token | Valor |
|---|---|
| Largura do card | `480px` |
| Padding horizontal | `30px` |
| Padding superior | `34px` |
| Padding inferior | `30px` |
| Espaçamento entre blocos | `18px` |
| Espaço entre label e campo | `8px` |
| Altura dos inputs | `56px` |
| Altura do botão principal | `56px` |
| Dimensão dos botões sociais | `56 × 56px` |
| Espaçamento entre botões sociais | `14px` |
| Radius do card | `24px` |
| Radius de input e botão | `12px` |
| Radius social | `14px` |
| Radius do badge | `999px` |

### Implementação dos tokens

Declarar os tokens compartilhados em `src/index.css` e utilizar as classes do Tailwind CSS para compor os layouts.

Não criar várias definições diferentes para a mesma cor ou dimensão.

## 8. Componentes e arquitetura

Arquitetura obrigatória:

```text
App
└── AuthPage
    ├── BackgroundEffects
    ├── AuthBadge
    ├── SignInForm
    │   ├── Input
    │   ├── Button
    │   ├── AuthDivider
    │   └── SocialLogin
    │       └── SocialButton
    └── SignUpForm
        ├── Input
        ├── Button
        ├── AuthDivider
        └── SocialLogin
            └── SocialButton
```

### Responsabilidades

**App.jsx**

Renderiza a página principal de autenticação.

**AuthPage.jsx**

- Controla a alternância entre Sign In e Sign Up.
- Renderiza o formulário ativo.
- Atualiza o indicador de topo.
- Mantém a lógica de navegação entre os formulários.

**BackgroundEffects.jsx**

Renderiza os glows decorativos, sem lógica de autenticação.

**AuthBadge.jsx**

Renderiza o badge `AUTHENTICATION UI`.

**Input.jsx**

Componente reutilizável com:

- `label`
- `name`
- `type`
- `value`
- `onChange`
- `placeholder`
- `error`
- `autoComplete`

Deve associar corretamente labels, campos e mensagens de erro.

**Button.jsx**

Componente reutilizável para o botão principal. Deve aceitar `children`, `type`, `disabled` e as propriedades necessárias à interação.

**SocialButton.jsx**

Componente reutilizável para os três botões sociais.

**AuthDivider.jsx**

Renderiza o separador com linhas e o texto `OR CONTINUE WITH`.

**SocialLogin.jsx**

Compõe os três botões sociais utilizando `SocialButton`.

**SignInForm.jsx**

Controla os campos, a validação e o submit do login.

**SignUpForm.jsx**

Controla os campos, a validação e o submit do cadastro.

Os formulários não devem controlar a navegação global da página.

## 9. Botões sociais

A referência apresenta três botões com símbolos visuais:

- `G`
- `A`
- `f`

Reproduzir a aparência visual da referência.

Cada botão deve ter:

- Dimensão `56 × 56px`.
- Border radius `14px`.
- Borda azul sutil.
- Fundo azul-marinho.
- Símbolo amarelo.
- Estados de hover e foco.

Não substituir os símbolos por outros ícones sem justificativa visual.

Os botões são demonstrativos. Não implementar OAuth, chamadas externas ou autenticação social real.

## 10. Estrutura de arquivos

```text
authentication-form/
├── references/
│   ├── auth-signin.png
│   └── auth-signup.png
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AuthBadge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── SocialButton.jsx
│   │   ├── auth/
│   │   │   ├── AuthDivider.jsx
│   │   │   ├── SignInForm.jsx
│   │   │   ├── SignUpForm.jsx
│   │   │   └── SocialLogin.jsx
│   │   └── layout/
│   │       └── BackgroundEffects.jsx
│   ├── pages/
│   │   └── AuthPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── AGENTS.md
```

A pasta `references/` deve conter as imagens reais quando forem disponibilizadas no projeto. Não criar arquivos de imagem fictícios.

Arquivos adicionais para configuração do i18next, schemas Zod e testes podem ser criados quando necessários.

## 11. Estado e interação

### Alternância entre formulários

O estado pertence a `AuthPage`.

Exemplo conceitual:

```jsx
const [activeForm, setActiveForm] = useState("signin");
```

Utilizar renderização condicional para apresentar o formulário correto.

O link `Sign Up` deve ativar o cadastro. O link `Sign In` deve retornar ao login.

Não recarregar a página para realizar a alternância.

### Estado dos campos

Cada formulário controla os próprios campos.

Utilizar inputs controlados, handlers claros e atualizações imutáveis de estado.

Não mover o estado dos campos para `App.jsx` ou `AuthPage.jsx` sem necessidade justificada.

## 12. Validação com Zod

### Sign In

Validar:

- E-mail obrigatório e válido.
- Senha obrigatória.

### Sign Up

Validar:

- Nome obrigatório.
- E-mail obrigatório e válido.
- Senha obrigatória, com comprimento mínimo definido pelo exercício.

A referência visual do cadastro contém apenas três campos. Não adicionar campos visíveis extras sem autorização.

### Comportamento

- Executar a validação no submit.
- Exibir mensagens junto aos campos.
- Atualizar os erros quando os valores forem corrigidos.
- Não enviar dados para um backend inexistente.
- Não registrar senhas no console.

## 13. Segurança e escopo

Não há backend nesta atividade.

Ao enviar um formulário válido:

1. Validar os dados.
2. Exibir feedback demonstrativo.
3. Não afirmar que um usuário foi autenticado ou cadastrado em um servidor.
4. Não armazenar credenciais.
5. Não registrar senhas ou confirmações de senha no console.

Nunca armazenar senhas em `localStorage` ou `sessionStorage`.

A recuperação de senha, o login social e a autenticação real estão fora do escopo.

## 14. Responsividade

A fidelidade visual deve ser avaliada primeiro no artboard de `1440 × 1024px`.

### Desktop

- Manter o card centralizado.
- Preservar a largura de referência de `480px`.
- Preservar os glows e os elementos de topo.
- Reproduzir os espaçamentos das referências.

### Mobile

- Utilizar largura fluida com limite máximo de `480px`.
- Preservar margens laterais adequadas.
- Evitar overflow horizontal.
- Ajustar os elementos superiores quando necessário.
- Permitir rolagem vertical.
- Evitar cortes de campos, mensagens e botões.

Não alterar a aparência desktop para resolver problemas específicos do mobile.

## 15. Acessibilidade

- Utilizar HTML semântico.
- Garantir labels associados aos campos.
- Garantir navegação por teclado.
- Preservar indicadores de foco.
- Utilizar `aria-invalid` nos campos inválidos.
- Associar mensagens de erro por `aria-describedby`.
- Incluir nomes acessíveis nos botões sociais.
- Não depender exclusivamente de cores para comunicar erros.
- Respeitar `prefers-reduced-motion`.

## 16. Processo de desenvolvimento obrigatório

O projeto deve evoluir em etapas.

### Etapa 01 — Inicialização

- Inspecionar o projeto.
- Verificar dependências e versões.
- Criar ou confirmar a configuração do Vite.
- Executar a aplicação inicial.
- Explicar a diferença entre `@latest` e Vite 8.

### Etapa 02 — Interface estática

- Criar o esqueleto JSX.
- Adicionar o background.
- Adicionar os glows.
- Criar o badge e o indicador de modo.
- Montar o card de login.
- Reproduzir o conteúdo visual da referência.

### Etapa 03 — Tailwind e design tokens

- Configurar Tailwind CSS v4.
- Importar Inter.
- Declarar tokens.
- Implementar cores, bordas, espaçamentos e estados.
- Comparar o resultado com a referência.

### Etapa 04 — Componentização

Criar e testar:

- `AuthBadge`
- `Input`
- `Button`
- `SocialButton`

Depois, criar:

- `AuthDivider`
- `SocialLogin`

### Etapa 05 — Composição

- Criar `SignInForm`.
- Criar `SignUpForm`.
- Preservar as diferenças visuais entre eles.
- Reutilizar os componentes compartilhados.

### Etapa 06 — Interação

- Implementar a alternância em `AuthPage`.
- Atualizar o indicador de modo.
- Implementar os links inferiores.
- Testar a navegação entre formulários.

### Etapa 07 — Validação

- Implementar estado controlado.
- Criar schemas Zod.
- Exibir erros.
- Implementar feedback de submit.

### Etapa 08 — Refinamento

- Configurar internacionalização quando necessária.
- Implementar responsividade.
- Revisar acessibilidade.
- Ajustar os estados visuais.

### Etapa 09 — Verificação final

- Executar a aplicação.
- Conferir erros de console e build.
- Validar ambos os formulários.
- Comparar o desktop com as referências.
- Testar o mobile.
- Atualizar o README.

Não implementar todas as etapas de uma só vez. Ao concluir cada etapa, apresentar um resumo e aguardar autorização para avançar.

## 17. Comparação visual

Sempre que possível, comparar a aplicação e as referências utilizando o mesmo tamanho de viewport.

Verificar:

- Posição e dimensão do card.
- Distância entre o card e os elementos superiores.
- Intensidade e posição dos glows.
- Cor do background.
- Tipografia e peso dos títulos.
- Dimensões dos campos e botões.
- Espaçamento entre os elementos.
- Alinhamento dos botões sociais.
- Aparência de ambos os formulários.

Corrigir primeiro as diferenças estruturais e depois os detalhes menores.

Não declarar fidelidade visual perfeita sem realizar uma comparação efetiva.

## 18. Regras para o OpenCode

Antes de editar:

- Ler este arquivo integralmente.
- Inspecionar a estrutura do projeto.
- Ler `package.json` e as configurações existentes.
- Verificar se as referências estão disponíveis.
- Preservar alterações preexistentes do usuário.

Durante o trabalho:

- Seguir a etapa atual.
- Alterar apenas os arquivos necessários.
- Evitar duplicação de código.
- Não introduzir funcionalidades fora do escopo.
- Não substituir o background por um gradiente genérico.
- Não concentrar toda a aplicação em um componente.
- Não instalar dependências sem necessidade.
- Não realizar commits sem autorização.
- Não afirmar que executou verificações que não foram realizadas.

Ao terminar cada etapa, informar:

1. Arquivos criados ou modificados.
2. O que foi implementado.
3. Verificações executadas.
4. Problemas encontrados.
5. Próxima etapa sugerida.

## 19. Critérios de conclusão

- [ ] Vite e React executam corretamente.
- [ ] Tailwind CSS está configurado corretamente.
- [ ] A fonte Inter está aplicada.
- [ ] O background corresponde às referências.
- [ ] Os dois glows estão presentes.
- [ ] O badge `AUTHENTICATION UI` está presente.
- [ ] O indicador superior reflete o formulário ativo.
- [ ] Sign In corresponde à primeira referência.
- [ ] Sign Up corresponde à segunda referência.
- [ ] Os componentes de UI são reutilizáveis.
- [ ] Os formulários são componentes de composição.
- [ ] A alternância entre os formulários funciona.
- [ ] A validação Zod apresenta feedback.
- [ ] O submit é demonstrativo e não utiliza backend.
- [ ] Nenhuma senha é persistida ou registrada.
- [ ] A interface é responsiva e acessível.
- [ ] A aplicação foi verificada no desktop e no mobile.
- [ ] O README documenta instalação e execução.

## 20. Princípio final

A implementação deve respeitar três princípios:

**Fidelidade visual:** reproduzir as referências fornecidas, sem redesign não solicitado.

**Arquitetura:** utilizar componentes pequenos, reutilizáveis e com responsabilidades bem definidas.

**Aprendizagem incremental:** evoluir de interface estática para estilização, composição, interação e validação, sem pular etapas.

Quando houver dúvida, inspecione o código e as referências, escolha a solução mais simples compatível com os requisitos e explique qualquer decisão que altere o comportamento ou a aparência esperada.
