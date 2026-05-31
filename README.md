# Brand Flow

Brand Flow é um Branding Kit App interativo para criar uma direção visual de marca a partir de arquétipos, fontes e cores.

## Funcionalidades

- Escolha de arquétipo principal
- Escolha opcional de arquétipo secundário
- Sugestões de Google Fonts
- Font pairing progressivo
- Escolha progressiva de cores
- Verificação de contraste
- Preview em tempo real
- Salvamento local
- Interface editorial com efeito halftone
- Design tokens do brand kit salvos no navegador

## Modelo de token salvo

O app salva o estado visual e também um token estruturado na chave `brand-flow-token` do `localStorage`.

```json
{
  "archetype": {
    "primary": "Sage",
    "secondary": "Creator",
    "mode": "primary-secondary"
  },
  "typography": {
    "heading": "Zilla Slab",
    "body": "Nunito Sans",
    "display": "Space Grotesk",
    "mono": "IBM Plex Mono"
  },
  "colors": {
    "background": "#F8FAFC",
    "surface": "#EEF2FF",
    "primary": "#1E3A8A",
    "secondary": "#6D28D9",
    "accent": "#06B6D4",
    "text": "#0F172A",
    "muted": "#475569",
    "border": "#C7D2FE"
  },
  "contrastRules": {
    "normalText": "4.5:1 minimum",
    "largeText": "3:1 minimum",
    "colorOnlyWarning": true
  }
}
```

## Tecnologias

- HTML
- CSS
- JavaScript puro
- Google Fonts

## Como rodar

Abra o arquivo `index.html` no navegador ou publique no GitHub Pages.
