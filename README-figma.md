# Nomos — Hero (Redesenho da Dobra Principal)

Redesenho da primeira dobra da Home da Nomos, em HTML/CSS/JS, **construído para importar no Figma**.

## Arquivos
- `index.html` — estrutura (HTML semântico, SVG inline)
- `styles.css` — estilos com **design tokens** em CSS variables
- `script.js` — menu mobile + animações GSAP
- `README-figma.md` — este guia

## Como rodar localmente
Abra o `index.html` no navegador (duplo clique) **ou** suba um servidor:
```
npx http-server hero-redesign -p 4321
```

---

## Como transferir para o Figma

### Opção A — Plugin "html.to.design" (recomendada)
1. No Figma, instale o plugin **html.to.design**.
2. Abra o `index.html` no navegador e **deixe a animação de entrada terminar (~1,5s)** — assim todos os elementos ficam visíveis para a captura.
3. No plugin, escolha **importar por URL** (se hospedar) ou **colar o HTML** / usar a extensão de navegador que captura a aba atual.
4. O plugin converte a estrutura flex/grid em **Auto Layout** e traz as cores/tipografia.

### Opção B — Builder.io (Figma plugin)
Mesma ideia: o Builder importa a página renderizada para frames editáveis no Figma.

### Opção C — Reconstrução manual a partir dos tokens
Se preferir montar à mão (resultado mais limpo), use a tabela de tokens abaixo. A estrutura já está pensada como Auto Layout (cada bloco = um frame com direção e gap definidos).

---

## Por que este código importa bem no Figma
- **Flexbox / CSS Grid** em toda a estrutura → vira **Auto Layout** (frames com direção, gap e padding).
- **Fontes reais do Google Fonts** (Sora + Inter) → ative as mesmas no Figma.
- **SVG inline** (logo, ícones, bússola) → entram como vetores editáveis, não como imagem rasterizada.
- **Tokens em CSS variables** → viram **Variáveis/Estilos** do Figma.
- **`gsap.from()`** → o estado final é o CSS visível; após a animação, o DOM está 100% pronto para captura (nada fica invisível).
- **Sem canvas, sem background-image de conteúdo** → o importador captura tudo.

---

## Design Tokens

### Cores
| Token        | Hex       | Uso                                  |
|--------------|-----------|--------------------------------------|
| navy-900     | `#0E1A26` | Fundo                                |
| navy-800     | `#15242F` | Superfícies / cards                  |
| navy-700     | `#1E3140` | Bordas                               |
| lime         | `#C7F24A` | Acento / CTA primário / título       |
| lime-600     | `#B6E22C` | Hover do CTA                         |
| white        | `#FFFFFF` | Texto principal                      |
| muted        | `#9DB1C0` | Texto secundário                     |
| muted-2      | `#6B8190` | Selos / labels                       |

### Tipografia
| Estilo            | Fonte | Peso | Tamanho (desktop)       |
|-------------------|-------|------|-------------------------|
| H1 (título)       | Sora  | 800  | 68px (clamp 40→68)      |
| Botões / labels   | Sora  | 600  | 15–16px                 |
| Subtítulo / corpo | Inter | 400  | 19px (clamp 16→19)      |
| Selos             | Inter | 500  | 13px, uppercase         |

### Espaçamento (escala 4/8)
`8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 px`

### Raio
`16px` (cards) · `999px` (pílulas/botões)

---

## Decisão sobre GSAP (faz sentido?)
**Sim, com moderação.** Uma assessoria de investimentos premium se beneficia de microinterações que passam sofisticação, desde que não distraiam. O que foi aplicado:
1. **Entrada encadeada** (nav → eyebrow → título → sub → cards → bússola) com stagger — guia o olho na ordem da hierarquia.
2. **Flutuação sutil da bússola** (loop lento) — dá vida sem competir com o conteúdo.
3. **Anel pontilhado girando devagar + oscilação mínima da agulha** — reforça a metáfora do "norte financeiro".

Tudo respeita **`prefers-reduced-motion`**: quem tem essa preferência ativa recebe a página estática, sem nenhuma animação (acessibilidade).
