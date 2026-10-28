# Authentication Form

Interface de autenticação (Sign In / Sign Up) em React + Vite + Tailwind CSS v4.

## Stack

- React 19
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Zod (validação)
- Inter (Google Fonts)

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

Abra `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Estrutura

```
src/
├── components/
│   ├── ui/          (AuthBadge, Button, Input, SocialButton)
│   ├── auth/        (AuthDivider, SignInForm, SignUpForm, SocialLogin)
│   └── layout/      (BackgroundEffects)
├── pages/           (AuthPage)
├── schemas/         (authSchemas.js)
├── App.jsx
├── index.css
└── main.jsx
```

## Observações

- Sem backend: o submit é demonstrativo e não persiste nem registra credenciais.
- A alternância entre Sign In e Sign Up ocorre via estado em `AuthPage`.
- Referências visuais devem ser colocadas em `references/auth-signin.png` e `references/auth-signup.png`.