const STORAGE_KEY = "brand-flow-state-v1";

const archetypes = [
  {
    id: "innocent",
    name: "Inocente",
    icon: "✦",
    short: "Marcas simples, otimistas e confiáveis, com presença leve e positiva.",
    keywords: ["otimismo", "pureza", "simplicidade"],
    summary: "O arquétipo Inocente cria marcas que prometem leveza, segurança e uma experiência sem complicação.",
    behavior: "Age com transparência, evita excesso de complexidade e valoriza mensagens claras.",
    voice: "Gentil, otimista, simples e direta.",
    visual: "Muito espaço em branco, composições limpas, formas suaves e imagens luminosas.",
    colors: "Branco, bege, azul claro, amarelo suave e verdes leves.",
    fonts: "Sans-serif arredondadas, fontes limpas e amigáveis.",
    elements: "Círculos, nuvens, brilhos suaves, bordas arredondadas e ilustrações leves.",
    useWhen: "Use para marcas de bem-estar, educação inicial, produtos familiares, saúde leve e soluções simples.",
    avoidWhen: "Evite quando a marca precisa parecer intensa, radical, técnica demais ou altamente luxuosa.",
    examples: "Produtos naturais, apps simples, marcas infantis, wellness e atendimento acolhedor."
  },
  {
    id: "sage",
    name: "Sábio",
    icon: "◇",
    short: "Marcas que educam, explicam e transmitem conhecimento com clareza.",
    keywords: ["clareza", "autoridade", "conhecimento"],
    summary: "O Sábio constrói confiança por meio de informação, análise e profundidade. É ideal para marcas que querem orientar decisões.",
    behavior: "Explica antes de vender, usa dados, estrutura ideias e evita promessas vazias.",
    voice: "Clara, racional, educativa, precisa e confiável.",
    visual: "Editorial, organizado, limpo, técnico e com hierarquia forte.",
    colors: "Azul, cinza, branco, tons frios e acentos controlados.",
    fonts: "Serifadas editoriais ou sans-serif neutras e técnicas.",
    elements: "Grids, linhas finas, cards informativos, diagramas, tabelas e sistemas visuais limpos.",
    useWhen: "Use para consultorias, educação, tecnologia, finanças, dados, ciência e marcas especialistas.",
    avoidWhen: "Evite quando a marca precisa ser caótica, irreverente ou emocional em primeiro plano.",
    examples: "Plataformas educacionais, consultorias, dashboards, pesquisa, SaaS B2B e especialistas."
  },
  {
    id: "explorer",
    name: "Explorador",
    icon: "↗",
    short: "Marcas movidas por liberdade, descoberta, autonomia e movimento.",
    keywords: ["liberdade", "descoberta", "movimento"],
    summary: "O Explorador representa marcas que convidam o público a sair do comum e encontrar novos caminhos.",
    behavior: "Incentiva autonomia, experiência prática, movimento e descoberta pessoal.",
    voice: "Livre, direta, inspiradora, natural e confiante.",
    visual: "Aberto, expansivo, orgânico, com sensação de espaço e trajetória.",
    colors: "Verde, areia, azul profundo, terracota e tons naturais.",
    fonts: "Sans humanistas, fontes orgânicas e combinações modernas com textura humana.",
    elements: "Mapas, linhas de rota, texturas naturais, fotografias amplas e setas sutis.",
    useWhen: "Use para turismo, esportes outdoor, educação independente, lifestyle e inovação prática.",
    avoidWhen: "Evite quando a marca precisa comunicar controle absoluto, luxo rígido ou tradição forte.",
    examples: "Marcas de viagem, aventura, comunidades, apps de produtividade livre e educação alternativa."
  },
  {
    id: "hero",
    name: "Herói",
    icon: "▲",
    short: "Marcas fortes, determinadas e focadas em superação, performance e vitória.",
    keywords: ["força", "coragem", "performance"],
    summary: "O Herói cria marcas com energia de ação, conquista e transformação por esforço.",
    behavior: "Desafia, motiva, prova resultado e valoriza disciplina.",
    voice: "Forte, direta, motivacional, confiante e assertiva.",
    visual: "Contraste alto, composições firmes, formas angulares e presença marcante.",
    colors: "Vermelho, preto, amarelo, azul intenso e neutros fortes.",
    fonts: "Bold, condensadas, geométricas e impactantes.",
    elements: "Setas, diagonais, barras de progresso, medalhas, escudos e grafismos de velocidade.",
    useWhen: "Use para esporte, performance, educação intensa, vendas, fitness, desafios e transformação.",
    avoidWhen: "Evite para marcas que precisam soar delicadas, contemplativas ou acolhedoras demais.",
    examples: "Academias, marcas esportivas, campanhas de desafio, consultorias de alta performance."
  },
  {
    id: "outlaw",
    name: "Fora da Lei",
    icon: "✕",
    short: "Marcas de ruptura, provocação, atitude e oposição ao comum.",
    keywords: ["ruptura", "atitude", "rebeldia"],
    summary: "O Fora da Lei cria uma marca que questiona regras, chama atenção e assume posição forte.",
    behavior: "Provoca, desafia padrões, comunica sem pedir licença e valoriza diferenciação radical.",
    voice: "Direta, provocativa, intensa, urbana e sem excesso de polidez.",
    visual: "Escuro, pesado, urbano, com alto contraste e energia crua.",
    colors: "Preto, vermelho, roxo escuro, cinza metálico e acentos ácidos.",
    fonts: "Display fortes, grotescas, condensadas ou pesadas.",
    elements: "Stickers, rasgos, ruído, símbolos fortes, contraste e composições assimétricas.",
    useWhen: "Use para moda urbana, cultura alternativa, música, produtos disruptivos e marcas anti-mainstream.",
    avoidWhen: "Evite em saúde sensível, educação infantil, instituições tradicionais e marcas que precisam máxima confiança formal.",
    examples: "Streetwear, tecnologia disruptiva, criadores autorais, marcas de entretenimento intenso."
  },
  {
    id: "magician",
    name: "Mago",
    icon: "✧",
    short: "Marcas de transformação, encantamento, visão e experiência memorável.",
    keywords: ["transformação", "visão", "encanto"],
    summary: "O Mago cria marcas que prometem mudança real e uma experiência acima do comum.",
    behavior: "Mostra possibilidades, cria rituais, usa narrativa forte e transforma percepção.",
    voice: "Inspiradora, sofisticada, visionária e magnética.",
    visual: "Misterioso, luminoso, futurista, premium e simbólico.",
    colors: "Roxo, azul elétrico, dourado, preto profundo e gradientes.",
    fonts: "Elegantes, tecnológicas ou sofisticadas com detalhe expressivo.",
    elements: "Glows, halos, partículas, símbolos, gradientes, transparências e efeitos de luz.",
    useWhen: "Use para IA, tecnologia, experiências premium, educação transformadora e produtos aspiracionais.",
    avoidWhen: "Evite quando a marca precisa parecer simples, popular e totalmente pragmática.",
    examples: "Apps de IA, marcas de transformação pessoal, experiências digitais e produtos premium."
  },
  {
    id: "everyman",
    name: "Pessoa Comum",
    icon: "●",
    short: "Marcas acessíveis, próximas, simples e criadas para gerar pertencimento.",
    keywords: ["proximidade", "confiança", "pertencimento"],
    summary: "A Pessoa Comum constrói conexão por familiaridade, utilidade e linguagem sem distância.",
    behavior: "Simplifica, conversa de igual para igual e valoriza praticidade.",
    voice: "Humana, simples, direta, acessível e cotidiana.",
    visual: "Funcional, limpo, amigável, com aparência real e pouco artificial.",
    colors: "Azul médio, verde, bege, cinza suave e tons equilibrados.",
    fonts: "Sans-serif legíveis, neutras e populares.",
    elements: "Cards simples, fotos reais, ícones diretos, layout objetivo e linguagem cotidiana.",
    useWhen: "Use para negócios locais, serviços populares, apps utilitários e comunidades.",
    avoidWhen: "Evite quando a marca precisa parecer altamente exclusiva, misteriosa ou radical.",
    examples: "Mercados, bancos digitais acessíveis, comunidades, serviços locais e produtos de massa."
  },
  {
    id: "lover",
    name: "Amante",
    icon: "♥",
    short: "Marcas sensoriais, elegantes e emocionais, focadas em desejo e conexão.",
    keywords: ["beleza", "desejo", "conexão"],
    summary: "O Amante cria marcas com apelo estético, sensorial e emocional. A experiência precisa ser sentida.",
    behavior: "Valoriza detalhes, desejo, cuidado visual e conexão emocional.",
    voice: "Elegante, sensível, calorosa, envolvente e refinada.",
    visual: "Quente, sofisticado, com ritmo suave e composições delicadas.",
    colors: "Vinho, rosa, nude, dourado suave, creme e tons quentes.",
    fonts: "Serifadas elegantes, displays delicadas e sans humanistas.",
    elements: "Curvas, texturas suaves, fotografia sensorial, brilho discreto e layouts editoriais.",
    useWhen: "Use para moda, beleza, gastronomia, lifestyle, marcas premium e experiências afetivas.",
    avoidWhen: "Evite quando a marca precisa parecer fria, técnica, agressiva ou extremamente popular.",
    examples: "Cosméticos, marcas de moda, restaurantes, perfumes, fotografia e produtos premium."
  },
  {
    id: "jester",
    name: "Bobo da Corte",
    icon: "☻",
    short: "Marcas leves, divertidas, espontâneas e feitas para gerar prazer imediato.",
    keywords: ["diversão", "leveza", "humor"],
    summary: "O Bobo da Corte usa humor e espontaneidade para criar proximidade e memorabilidade.",
    behavior: "Quebra formalidade, simplifica tensão, entretém e cria momentos compartilháveis.",
    voice: "Divertida, rápida, informal, espirituosa e leve.",
    visual: "Colorido, dinâmico, arredondado, expressivo e com movimento.",
    colors: "Amarelo, laranja, rosa, azul vibrante e combinações contrastantes.",
    fonts: "Display arredondadas, bolds amigáveis e fontes com personalidade.",
    elements: "Stickers, emojis, mascotes, bolhas, formas orgânicas e microinterações.",
    useWhen: "Use para entretenimento, alimentos, produtos jovens, creators, campanhas sociais leves e apps casuais.",
    avoidWhen: "Evite para marcas que precisam comunicar seriedade, risco, luxo formal ou autoridade técnica.",
    examples: "Snacks, jogos, creators, marcas jovens, experiências sociais e entretenimento digital."
  },
  {
    id: "caregiver",
    name: "Cuidador",
    icon: "+",
    short: "Marcas acolhedoras, protetoras e focadas em apoio, segurança e cuidado.",
    keywords: ["cuidado", "apoio", "segurança"],
    summary: "O Cuidador cria confiança pela atenção ao outro, proteção e suporte constante.",
    behavior: "Acolhe, orienta, reduz ansiedade e mostra presença nos momentos importantes.",
    voice: "Calma, gentil, acolhedora, paciente e segura.",
    visual: "Suave, humano, claro, com formas arredondadas e hierarquia tranquila.",
    colors: "Verde claro, azul suave, creme, rosa pálido e tons naturais.",
    fonts: "Arredondadas, legíveis, suaves e humanas.",
    elements: "Círculos, mãos, abraços simbólicos, linhas suaves, cards acolhedores e fotos humanas.",
    useWhen: "Use para saúde, educação, suporte, impacto social, serviços humanos e marcas familiares.",
    avoidWhen: "Evite quando a marca precisa comunicar confronto, irreverência ou exclusividade fria.",
    examples: "Clínicas, psicologia, educação, suporte ao cliente, ONGs e produtos de cuidado."
  },
  {
    id: "creator",
    name: "Criador",
    icon: "✺",
    short: "Marcas autorais, expressivas e construídas em torno de imaginação e originalidade.",
    keywords: ["autoria", "imaginação", "expressão"],
    summary: "O Criador transforma ideias em forma. É ideal para marcas que querem parecer autorais e inventivas.",
    behavior: "Experimenta, cria sistemas visuais próprios, valoriza processo e diferenciação estética.",
    voice: "Criativa, confiante, curiosa, visual e inspiradora.",
    visual: "Experimental, flexível, artístico, com composições fortes e detalhes autorais.",
    colors: "Roxo, magenta, laranja, off-white e combinações expressivas.",
    fonts: "Displays criativas combinadas com sans-serif limpas.",
    elements: "Blobs, colagens, grids soltos, patterns, formas abstratas, ilustrações e motion.",
    useWhen: "Use para design, conteúdo, moda, creator economy, estúdios, produtos digitais e inovação visual.",
    avoidWhen: "Evite quando a marca precisa parecer extremamente tradicional, rígida ou padronizada.",
    examples: "Estúdios criativos, agências, portfólios, apps de criação e marcas autorais."
  },
  {
    id: "ruler",
    name: "Governante",
    icon: "♛",
    short: "Marcas de liderança, prestígio, ordem, controle e autoridade premium.",
    keywords: ["liderança", "prestígio", "ordem"],
    summary: "O Governante cria marcas que transmitem controle, status e confiança institucional.",
    behavior: "Organiza, lidera, define padrões e comunica excelência.",
    voice: "Segura, elegante, formal na medida, objetiva e institucional.",
    visual: "Premium, estruturado, sólido, simétrico e com acabamento refinado.",
    colors: "Preto, dourado, azul-marinho, branco, cinza e tons nobres.",
    fonts: "Serifadas clássicas ou sans sofisticadas e bem estruturadas.",
    elements: "Brasões, molduras, grids rígidos, selos, linhas finas e composições centralizadas.",
    useWhen: "Use para negócios premium, consultorias, finanças, gestão, luxo, imobiliário e instituições.",
    avoidWhen: "Evite para marcas que precisam parecer populares, muito espontâneas ou rebeldes.",
    examples: "Marcas de luxo, consultorias executivas, produtos premium, finanças e educação executiva."
  }
];

const secondaryCompatibility = {
  innocent: ["caregiver", "everyman", "sage", "lover"],
  sage: ["creator", "ruler", "magician", "caregiver", "explorer"],
  explorer: ["sage", "hero", "creator", "outlaw", "everyman"],
  hero: ["ruler", "explorer", "sage", "magician", "outlaw"],
  outlaw: ["hero", "explorer", "magician", "creator", "jester"],
  magician: ["sage", "creator", "ruler", "hero", "lover"],
  everyman: ["innocent", "caregiver", "jester", "explorer", "lover"],
  lover: ["creator", "innocent", "caregiver", "ruler", "magician"],
  jester: ["everyman", "creator", "outlaw", "innocent", "lover"],
  caregiver: ["innocent", "everyman", "sage", "lover", "ruler"],
  creator: ["magician", "sage", "lover", "jester", "explorer"],
  ruler: ["sage", "hero", "magician", "caregiver", "lover"]
};

const typographyByArchetype = {
  innocent: [
    { font: "Nunito", feeling: "amigável, simples e otimista", pairings: [{ font: "Inter", feeling: "limpa e digital" }, { font: "Lato", feeling: "humana e acessível" }, { font: "Open Sans", feeling: "neutra e universal" }] },
    { font: "Quicksand", feeling: "leve, arredondada e acolhedora", pairings: [{ font: "Nunito Sans", feeling: "suave e legível" }, { font: "DM Sans", feeling: "moderna e simples" }, { font: "Manrope", feeling: "digital e organizada" }] },
    { font: "DM Sans", feeling: "minimalista, clara e positiva", pairings: [{ font: "Nunito", feeling: "amigável e leve" }, { font: "Source Sans 3", feeling: "editorial e limpa" }, { font: "Work Sans", feeling: "funcional e direta" }] }
  ],
  sage: [
    { font: "Playfair Display", feeling: "editorial, sofisticada e intelectual", pairings: [{ font: "Inter", feeling: "limpa, moderna e legível" }, { font: "Source Sans 3", feeling: "editorial e fluida" }, { font: "IBM Plex Sans", feeling: "técnica e confiável" }] },
    { font: "Merriweather", feeling: "confiável, profunda e clássica", pairings: [{ font: "Lato", feeling: "humana e clara" }, { font: "Open Sans", feeling: "neutra e universal" }, { font: "Nunito Sans", feeling: "leve e acessível" }] },
    { font: "Libre Baskerville", feeling: "clássica, séria e precisa", pairings: [{ font: "Montserrat", feeling: "estruturada e moderna" }, { font: "Work Sans", feeling: "funcional e clara" }, { font: "DM Sans", feeling: "minimalista e atual" }] }
  ],
  explorer: [
    { font: "Alegreya Sans", feeling: "orgânica, livre e humana", pairings: [{ font: "Lato", feeling: "acessível e equilibrada" }, { font: "Source Sans 3", feeling: "clara e editorial" }, { font: "Nunito Sans", feeling: "leve e amigável" }] },
    { font: "Montserrat", feeling: "aberta, moderna e confiante", pairings: [{ font: "Merriweather Sans", feeling: "natural e legível" }, { font: "Open Sans", feeling: "simples e funcional" }, { font: "Work Sans", feeling: "limpa e prática" }] },
    { font: "Manrope", feeling: "digital, livre e contemporânea", pairings: [{ font: "Inter", feeling: "neutra e precisa" }, { font: "DM Sans", feeling: "leve e moderna" }, { font: "Lora", feeling: "humana e narrativa" }] }
  ],
  hero: [
    { font: "Oswald", feeling: "forte, direta e determinada", pairings: [{ font: "Inter", feeling: "limpa e objetiva" }, { font: "Roboto", feeling: "funcional e clara" }, { font: "Source Sans 3", feeling: "legível e editorial" }] },
    { font: "Bebas Neue", feeling: "impactante, esportiva e energética", pairings: [{ font: "Montserrat", feeling: "forte e moderna" }, { font: "Manrope", feeling: "digital e controlada" }, { font: "Lato", feeling: "humana e direta" }] },
    { font: "Anton", feeling: "pesada, intensa e memorável", pairings: [{ font: "Open Sans", feeling: "simples e estável" }, { font: "DM Sans", feeling: "limpa e atual" }, { font: "Work Sans", feeling: "funcional e firme" }] }
  ],
  outlaw: [
    { font: "Archivo Black", feeling: "radical, pesada e provocativa", pairings: [{ font: "Inter", feeling: "neutra e legível" }, { font: "IBM Plex Sans", feeling: "técnica e precisa" }, { font: "Roboto", feeling: "funcional e direta" }] },
    { font: "Space Grotesk", feeling: "moderna, disruptiva e tecnológica", pairings: [{ font: "Manrope", feeling: "digital e refinada" }, { font: "DM Sans", feeling: "limpa e minimalista" }, { font: "Source Sans 3", feeling: "clara e editorial" }] },
    { font: "Bebas Neue", feeling: "urbana, intensa e direta", pairings: [{ font: "Montserrat", feeling: "estruturada e forte" }, { font: "Work Sans", feeling: "funcional e seca" }, { font: "Open Sans", feeling: "simples e estável" }] }
  ],
  magician: [
    { font: "Cinzel", feeling: "mística, elegante e transformadora", pairings: [{ font: "Inter", feeling: "moderna e limpa" }, { font: "Manrope", feeling: "digital e sofisticada" }, { font: "Source Sans 3", feeling: "clara e editorial" }] },
    { font: "Syne", feeling: "futurista, criativa e magnética", pairings: [{ font: "DM Sans", feeling: "minimalista e digital" }, { font: "Sora", feeling: "geométrica e tecnológica" }, { font: "IBM Plex Sans", feeling: "técnica e confiável" }] },
    { font: "Cormorant Garamond", feeling: "sofisticada, simbólica e encantadora", pairings: [{ font: "Montserrat", feeling: "moderna e estruturada" }, { font: "Work Sans", feeling: "clara e funcional" }, { font: "Lato", feeling: "humana e leve" }] }
  ],
  everyman: [
    { font: "Inter", feeling: "simples, acessível e confiável", pairings: [{ font: "Merriweather", feeling: "humana e editorial" }, { font: "Nunito Sans", feeling: "leve e amigável" }, { font: "Source Sans 3", feeling: "clara e objetiva" }] },
    { font: "Lato", feeling: "humana, próxima e equilibrada", pairings: [{ font: "Montserrat", feeling: "moderna e organizada" }, { font: "Open Sans", feeling: "universal e estável" }, { font: "Roboto", feeling: "funcional e direta" }] },
    { font: "Open Sans", feeling: "neutra, simples e popular", pairings: [{ font: "Lora", feeling: "humana e narrativa" }, { font: "DM Sans", feeling: "digital e limpa" }, { font: "Work Sans", feeling: "prática e clara" }] }
  ],
  lover: [
    { font: "Cormorant Garamond", feeling: "elegante, sensorial e refinada", pairings: [{ font: "Montserrat", feeling: "moderna e premium" }, { font: "Lato", feeling: "humana e suave" }, { font: "Manrope", feeling: "digital e elegante" }] },
    { font: "Playfair Display", feeling: "charmosa, editorial e emocional", pairings: [{ font: "Inter", feeling: "limpa e contemporânea" }, { font: "DM Sans", feeling: "minimalista e sofisticada" }, { font: "Source Sans 3", feeling: "editorial e legível" }] },
    { font: "Prata", feeling: "luxuosa, delicada e marcante", pairings: [{ font: "Open Sans", feeling: "simples e equilibrada" }, { font: "Work Sans", feeling: "moderna e discreta" }, { font: "Nunito Sans", feeling: "leve e acolhedora" }] }
  ],
  jester: [
    { font: "Fredoka", feeling: "divertida, arredondada e expressiva", pairings: [{ font: "Inter", feeling: "organizada e legível" }, { font: "Nunito Sans", feeling: "leve e amigável" }, { font: "DM Sans", feeling: "moderna e simples" }] },
    { font: "Baloo 2", feeling: "brincalhona, marcante e popular", pairings: [{ font: "Lato", feeling: "humana e clara" }, { font: "Open Sans", feeling: "simples e estável" }, { font: "Work Sans", feeling: "funcional e limpa" }] },
    { font: "Bricolage Grotesque", feeling: "criativa, expressiva e contemporânea", pairings: [{ font: "Manrope", feeling: "digital e organizada" }, { font: "Sora", feeling: "geométrica e moderna" }, { font: "Source Sans 3", feeling: "editorial e legível" }] }
  ],
  caregiver: [
    { font: "Nunito", feeling: "acolhedora, gentil e segura", pairings: [{ font: "Lato", feeling: "humana e clara" }, { font: "Open Sans", feeling: "simples e acessível" }, { font: "Source Sans 3", feeling: "editorial e limpa" }] },
    { font: "Lora", feeling: "sensível, humana e confiável", pairings: [{ font: "Inter", feeling: "clara e moderna" }, { font: "DM Sans", feeling: "leve e digital" }, { font: "Work Sans", feeling: "funcional e objetiva" }] },
    { font: "Quicksand", feeling: "suave, próxima e amigável", pairings: [{ font: "Nunito Sans", feeling: "acolhedora e legível" }, { font: "Manrope", feeling: "moderna e organizada" }, { font: "Roboto", feeling: "simples e funcional" }] }
  ],
  creator: [
    { font: "Syne", feeling: "autoral, experimental e contemporânea", pairings: [{ font: "Inter", feeling: "limpa e estável" }, { font: "DM Sans", feeling: "minimalista e digital" }, { font: "Sora", feeling: "geométrica e moderna" }] },
    { font: "Bricolage Grotesque", feeling: "expressiva, artística e flexível", pairings: [{ font: "Manrope", feeling: "digital e organizada" }, { font: "Source Sans 3", feeling: "editorial e clara" }, { font: "Work Sans", feeling: "funcional e contemporânea" }] },
    { font: "Fraunces", feeling: "criativa, elegante e autoral", pairings: [{ font: "Inter", feeling: "limpa e moderna" }, { font: "Nunito Sans", feeling: "leve e acessível" }, { font: "IBM Plex Sans", feeling: "técnica e precisa" }] }
  ],
  ruler: [
    { font: "Cinzel", feeling: "nobre, clássica e institucional", pairings: [{ font: "Inter", feeling: "moderna e objetiva" }, { font: "Source Sans 3", feeling: "editorial e clara" }, { font: "Manrope", feeling: "sofisticada e digital" }] },
    { font: "Cormorant Garamond", feeling: "elegante, premium e tradicional", pairings: [{ font: "Montserrat", feeling: "estruturada e moderna" }, { font: "Lato", feeling: "humana e equilibrada" }, { font: "Work Sans", feeling: "funcional e refinada" }] },
    { font: "Montserrat", feeling: "forte, corporativa e organizada", pairings: [{ font: "Libre Baskerville", feeling: "clássica e confiável" }, { font: "DM Sans", feeling: "minimalista e digital" }, { font: "Open Sans", feeling: "simples e estável" }] }
  ]
};

const primaryColorOptions = {
  innocent: [color("Luz Suave", "#FFEEAD", "Otimismo leve, clareza e sensação de simplicidade."), color("Azul Sereno", "#93C5FD", "Confiança, pureza e comunicação tranquila."), color("Verde Fresco", "#A7F3D0", "Naturalidade, leveza e bem-estar.")],
  sage: [color("Azul Estratégico", "#2563EB", "Clareza, inteligência e confiança."), color("Azul Profundo", "#1E3A8A", "Autoridade, profundidade e estabilidade."), color("Ciano Técnico", "#0891B2", "Precisão, tecnologia e visão analítica.")],
  explorer: [color("Verde Trilha", "#15803D", "Natureza, autonomia e descoberta."), color("Areia Solar", "#D97706", "Movimento, calor e experiência prática."), color("Azul Horizonte", "#0E7490", "Liberdade, amplitude e direção.")],
  hero: [color("Vermelho Ação", "#DC2626", "Força, energia e decisão."), color("Azul Impacto", "#1D4ED8", "Confiança, potência e foco."), color("Âmbar Vitória", "#F59E0B", "Superação, destaque e conquista.")],
  outlaw: [color("Vermelho Ruptura", "#E11D48", "Atitude, tensão e provocação."), color("Roxo Urbano", "#7E22CE", "Mistério, diferenciação e cultura alternativa."), color("Grafite Ácido", "#3F3F46", "Peso, sobriedade e estética underground.")],
  magician: [color("Roxo Transformação", "#7C3AED", "Visão, transformação e encantamento."), color("Azul Elétrico", "#2563EB", "Tecnologia, futuro e impacto."), color("Dourado Místico", "#D97706", "Valor, ritual e sofisticação.")],
  everyman: [color("Azul Acesso", "#3B82F6", "Confiança simples e comunicação popular."), color("Verde Próximo", "#22C55E", "Praticidade, equilíbrio e familiaridade."), color("Cinza Humano", "#64748B", "Neutralidade, clareza e estabilidade.")],
  lover: [color("Vinho Sensorial", "#9F1239", "Desejo, profundidade e sofisticação."), color("Rosa Calor", "#DB2777", "Afeto, beleza e presença emocional."), color("Nude Premium", "#D4A373", "Elegância, delicadeza e calor visual.")],
  jester: [color("Amarelo Energia", "#FFD100", "Alegria, humor e presença imediata."), color("Laranja Vivo", "#F97316", "Movimento, espontaneidade e diversão."), color("Rosa Pop", "#EC4899", "Expressão, leveza e memorabilidade.")],
  caregiver: [color("Verde Cuidado", "#34D399", "Acolhimento, saúde e apoio."), color("Azul Calma", "#60A5FA", "Segurança, serenidade e proteção."), color("Rosa Acolher", "#FDA4AF", "Gentileza, afeto e proximidade.")],
  creator: [color("Roxo Autoral", "#8B5CF6", "Imaginação, originalidade e expressão."), color("Magenta Ideia", "#D946EF", "Criatividade, impacto e energia visual."), color("Laranja Criação", "#F97316", "Construção, movimento e presença criativa.")],
  ruler: [color("Azul Nobre", "#1E3A8A", "Controle, autoridade e tradição."), color("Dourado Poder", "#B45309", "Prestígio, liderança e valor."), color("Preto Premium", "#111827", "Sofisticação, controle e imponência.")]
};

function color(name, hex, meaning) {
  return { id: slug(`${name}-${hex}`), name, hex, meaning };
}

const defaultState = {
  currentStep: "intro",
  primaryArchetype: null,
  secondaryArchetype: null,
  selectedHeadingFont: null,
  selectedBodyFont: null,
  selectedPrimaryColor: null,
  selectedSecondaryColor: null,
  selectedAccentColor: null,
  selectedBackgroundColor: null,
  selectedTextColor: null,
  colors: {
    primary: "#2563EB",
    secondary: "#64748B",
    accent: "#F59E0B",
    background: "#F8FAFC",
    text: "#0F172A"
  },
  brandName: "NOVA",
  tagline: "Uma marca criada com direção, personalidade e presença."
};

let state = loadState();
let activeModalArchetype = null;
let modalMode = "primary";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function init() {
  closeModal(true);
  bindBaseEvents();
  renderStep();
  syncBrandInputs();
  updatePreview();
}

function bindBaseEvents() {
  $("[data-start-app]").addEventListener("click", () => goToStep("primary-archetype"));
  $("[data-reset]").addEventListener("click", resetApp);
  $("[data-export]").addEventListener("click", exportJson);
  $("[data-back-step]").addEventListener("click", goBack);
  $("[data-close-modal]").addEventListener("click", closeModal);
  $("[data-modal]").addEventListener("click", (event) => {
    if (event.target.matches("[data-modal]")) closeModal();
  });
  $("[data-skip-secondary]").addEventListener("click", () => {
    state.secondaryArchetype = null;
    state.currentStep = "builder";
    primeInitialSelections();
    saveState();
    renderStep();
  });
  $("[data-brand-name]").addEventListener("input", (event) => {
    state.brandName = event.target.value || "NOVA";
    saveState();
    updatePreview();
  });
  $("[data-brand-tagline]").addEventListener("input", (event) => {
    state.tagline = event.target.value || defaultState.tagline;
    saveState();
    updatePreview();
  });

  bindCarouselButton("[data-carousel-prev]", "primary", -1);
  bindCarouselButton("[data-carousel-next]", "primary", 1);
  bindCarouselButton("[data-carousel-prev-secondary]", "secondary", -1);
  bindCarouselButton("[data-carousel-next-secondary]", "secondary", 1);
}

function bindCarouselButton(selector, carouselName, direction) {
  $(selector).addEventListener("click", () => {
    const carousel = $(`[data-carousel="${carouselName}"]`);
    carousel.scrollBy({ left: direction * 270, behavior: "smooth" });
  });
}

function renderStep() {
  const step = state.currentStep || "intro";
  $$("[data-screen]").forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === step));
  $("[data-topbar]").hidden = step === "intro";

  if (step === "primary-archetype") renderArchetypeCarousel("primary");
  if (step === "secondary-archetype") renderArchetypeCarousel("secondary");
  if (step === "builder") {
    primeInitialSelections();
    renderBuilder();
    syncBrandInputs();
    updatePreview();
  }
}

function renderArchetypeCarousel(mode) {
  const carousel = $(`[data-carousel="${mode}"]`);
  carousel.innerHTML = archetypes.map((item, index) => {
    const disabledReason = getArchetypeDisabledReason(item.id, mode);
    const selected = mode === "primary" ? state.primaryArchetype === item.id : state.secondaryArchetype === item.id;
    const style = `--tilt:${index % 2 === 0 ? "-7deg" : "7deg"}`;
    return `
      <article class="archetype-card ${disabledReason ? "is-disabled" : ""} ${selected ? "is-selected" : ""}" style="${style}" data-archetype-card data-id="${item.id}">
        ${disabledReason ? `<span class="card-badge">${disabledReason}</span>` : ""}
        <div class="archetype-icon">${item.icon}</div>
        <h3>${item.name}</h3>
        <p>${item.short}</p>
        <div class="keyword-list">${item.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>
        <button class="read-btn" type="button" data-read-more="${item.id}" ${disabledReason ? "disabled" : ""}>Ler mais</button>
      </article>
    `;
  }).join("");

  carousel.addEventListener("scroll", () => updateCenterCard(carousel), { passive: true });
  carousel.addEventListener("click", handleCarouselClick);
  requestAnimationFrame(() => updateCenterCard(carousel));
}

function handleCarouselClick(event) {
  const button = event.target.closest("[data-read-more]");
  if (!button) return;
  const carousel = event.currentTarget;
  modalMode = carousel.dataset.carousel;
  openArchetypeModal(button.dataset.readMore, modalMode);
}

function updateCenterCard(carousel) {
  const cards = $$('[data-archetype-card]', carousel);
  const center = carousel.scrollLeft + carousel.clientWidth / 2;
  let closest = null;
  let closestDistance = Infinity;
  cards.forEach((card) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(center - cardCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = card;
    }
  });
  cards.forEach((card) => card.classList.toggle("is-center", card === closest && !card.classList.contains("is-disabled")));
}

function getArchetypeDisabledReason(id, mode) {
  if (mode !== "secondary") return "";
  if (id === state.primaryArchetype) return "Arquétipo principal";
  const allowed = secondaryCompatibility[state.primaryArchetype] || [];
  if (!allowed.includes(id)) return "Pouco compatível";
  return "";
}

function openArchetypeModal(id, mode) {
  activeModalArchetype = id;
  modalMode = mode;
  const item = getArchetype(id);
  const modal = $("[data-modal]");
  $("[data-modal-content]").innerHTML = `
    <span class="eyebrow">Arquétipo ${mode === "primary" ? "principal" : "secundário"}</span>
    <h2 id="modal-title">${item.name}</h2>
    <p class="modal-lead">${item.summary}</p>
    <div class="modal-grid">
      ${modalInfo("Como se comporta", item.behavior)}
      ${modalInfo("Tom de voz", item.voice)}
      ${modalInfo("Direção visual", item.visual)}
      ${modalInfo("Cores recomendadas", item.colors)}
      ${modalInfo("Fontes recomendadas", item.fonts)}
      ${modalInfo("Elementos visuais", item.elements)}
      ${modalInfo("Quando usar", item.useWhen)}
      ${modalInfo("Quando evitar", item.avoidWhen)}
      ${modalInfo("Exemplos de aplicação", item.examples)}
    </div>
    <div class="modal-actions">
      <button class="primary-btn" type="button" data-use-archetype>Usar este arquétipo</button>
      <button class="ghost-btn" type="button" data-close-modal-secondary>Voltar aos cards</button>
    </div>
  `;
  $("[data-use-archetype]").addEventListener("click", useActiveArchetype);
  $("[data-close-modal-secondary]").addEventListener("click", closeModal);
  modal.hidden = false;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function modalInfo(title, text) {
  return `<div class="modal-info"><strong>${title}</strong><p>${text}</p></div>`;
}

function closeModal(force = false) {
  const modal = $("[data-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.hidden = true;
  const content = $("[data-modal-content]");
  if (content && force) content.innerHTML = "";
  activeModalArchetype = null;
  document.body.style.overflow = "";
}

function useActiveArchetype() {
  if (!activeModalArchetype) return;
  if (modalMode === "primary") {
    state.primaryArchetype = activeModalArchetype;
    state.secondaryArchetype = null;
    clearAfterArchetype();
    state.currentStep = "secondary-archetype";
  } else {
    state.secondaryArchetype = activeModalArchetype;
    clearAfterArchetype();
    state.currentStep = "builder";
  }
  closeModal();
  primeInitialSelections();
  saveState();
  renderStep();
}

function clearAfterArchetype() {
  state.selectedHeadingFont = null;
  state.selectedBodyFont = null;
  state.selectedPrimaryColor = null;
  state.selectedSecondaryColor = null;
  state.selectedAccentColor = null;
  state.selectedBackgroundColor = null;
  state.selectedTextColor = null;
}

function primeInitialSelections() {
  if (!state.primaryArchetype) state.primaryArchetype = "sage";
  const headingOptions = getTypographyOptions();
  if (state.selectedHeadingFont && !headingOptions.some((item) => item.font === state.selectedHeadingFont)) {
    state.selectedHeadingFont = null;
    state.selectedBodyFont = null;
  }
  if (!state.colors.primary) state.colors.primary = "#2563EB";
}

function renderBuilder() {
  renderArchetypeNode();
  renderHeadingNodes();
  renderBodyNodes();
  renderPrimaryColorNodes();
  renderLinkedColors();
}

function renderArchetypeNode() {
  const primary = getArchetype(state.primaryArchetype);
  const secondary = state.secondaryArchetype ? getArchetype(state.secondaryArchetype) : null;
  $("[data-node-row='arch']").innerHTML = `
    <article class="flow-node is-selected" data-change-archetype>
      <span class="node-label">Arquétipos</span>
      <h3>${primary.name}${secondary ? ` + ${secondary.name}` : ""}</h3>
      <p>Principal: ${primary.name}<br>Secundário: ${secondary ? secondary.name : "Não definido"}</p>
    </article>
  `;
  $("[data-change-archetype]").addEventListener("click", () => goToStep("primary-archetype"));
}

function getTypographyOptions() {
  const primaryOptions = typographyByArchetype[state.primaryArchetype] || typographyByArchetype.sage;
  if (!state.secondaryArchetype) return primaryOptions;
  const secondaryOptions = typographyByArchetype[state.secondaryArchetype] || [];
  return [primaryOptions[0], primaryOptions[1], secondaryOptions[0] || primaryOptions[2]];
}

function renderHeadingNodes() {
  const options = getTypographyOptions();
  $("[data-node-row='heading']").innerHTML = options.map((item, index) => `
    <article class="flow-node ${state.selectedHeadingFont === item.font ? "is-selected" : ""}" data-heading-font="${item.font}">
      <span class="node-label">Fonte principal ${index + 1}</span>
      <h3 style="font-family:'${item.font}', sans-serif">${item.font}</h3>
      <p>${item.feeling}</p>
      <div class="sample-text" style="font-family:'${item.font}', sans-serif">Brand System</div>
    </article>
  `).join("");
  $$('[data-heading-font]').forEach((node) => node.addEventListener("click", () => selectHeadingFont(node.dataset.headingFont)));
}

function selectHeadingFont(font) {
  state.selectedHeadingFont = font;
  state.selectedBodyFont = null;
  state.selectedPrimaryColor = null;
  state.selectedSecondaryColor = null;
  state.selectedAccentColor = null;
  state.selectedBackgroundColor = null;
  state.selectedTextColor = null;
  saveState();
  renderBuilder();
  updatePreview();
}

function getSelectedHeading() {
  return getTypographyOptions().find((item) => item.font === state.selectedHeadingFont);
}

function renderBodyNodes() {
  const heading = getSelectedHeading();
  const row = $("[data-node-row='body']");
  if (!heading) {
    row.innerHTML = `<article class="flow-node is-locked"><span class="node-label">Fonte secundária</span><h3>Escolha uma fonte principal</h3><p>Os pairings aparecem depois da primeira seleção.</p></article>`;
    return;
  }
  row.innerHTML = heading.pairings.map((item, index) => `
    <article class="flow-node ${state.selectedBodyFont === item.font ? "is-selected" : ""}" data-body-font="${item.font}">
      <span class="node-label">Pairing ${index + 1}</span>
      <h3 style="font-family:'${item.font}', sans-serif">${item.font}</h3>
      <p>${item.feeling}</p>
      <div class="sample-text" style="font-family:'${item.font}', sans-serif">Texto de apoio claro e legível.</div>
    </article>
  `).join("");
  $$('[data-body-font]').forEach((node) => node.addEventListener("click", () => selectBodyFont(node.dataset.bodyFont)));
}

function selectBodyFont(font) {
  state.selectedBodyFont = font;
  state.selectedPrimaryColor = null;
  state.selectedSecondaryColor = null;
  state.selectedAccentColor = null;
  state.selectedBackgroundColor = null;
  state.selectedTextColor = null;
  saveState();
  renderBuilder();
  updatePreview();
}

function renderPrimaryColorNodes() {
  const row = $("[data-node-row='primary-color']");
  if (!state.selectedBodyFont) {
    row.innerHTML = `<article class="flow-node is-locked"><span class="node-label">Cor principal</span><h3>Escolha o pairing</h3><p>As cores aparecem depois da fonte secundária.</p></article>`;
    return;
  }
  const options = generatePrimaryColorOptions(state.primaryArchetype, state.secondaryArchetype, state.selectedHeadingFont, state.selectedBodyFont);
  row.innerHTML = options.map((item, index) => `
    <article class="color-node ${state.selectedPrimaryColor?.hex === item.hex ? "is-selected" : ""}" data-primary-color="${item.hex}">
      <span class="node-label">Cor principal ${index + 1}</span>
      <h4>${item.name}</h4>
      <div class="swatch-main" style="background:${item.hex}"></div>
      <span class="hex">${item.hex}</span>
      <p>${item.meaning}</p>
    </article>
  `).join("");
  $$('[data-primary-color]').forEach((node) => {
    node.addEventListener("click", () => {
      const selected = options.find((item) => item.hex === node.dataset.primaryColor);
      selectPrimaryColor(selected);
    });
  });
}

function generatePrimaryColorOptions(primaryArchetype, secondaryArchetype, headingFont, bodyFont) {
  const base = primaryColorOptions[primaryArchetype] || primaryColorOptions.sage;
  if (!secondaryArchetype) return adjustPrimaryColorsByTypography(base, headingFont, bodyFont);
  const secondary = primaryColorOptions[secondaryArchetype] || [];
  const mixed = [base[0], base[1], secondary[0] || base[2]];
  return adjustPrimaryColorsByTypography(mixed, headingFont, bodyFont);
}

function adjustPrimaryColorsByTypography(colors, headingFont) {
  const mood = getFontMood(headingFont);
  return colors.map((item) => ({
    ...item,
    meaning: `${item.meaning} ${mood === "editorial" ? "A fonte escolhida pede contraste elegante e aplicação mais refinada." : mood === "expressive" ? "A fonte escolhida permite mais personalidade e acentos fortes." : "A fonte escolhida funciona bem com interface limpa e contraste funcional."}`
  }));
}

function selectPrimaryColor(colorOption) {
  state.selectedPrimaryColor = colorOption;
  state.colors.primary = colorOption.hex;
  const linked = generateLinkedColorOptions(colorOption, state.primaryArchetype, state.secondaryArchetype, state.selectedHeadingFont, state.selectedBodyFont);
  state.selectedSecondaryColor = linked.secondary[0];
  state.selectedAccentColor = linked.accent[0];
  state.selectedBackgroundColor = linked.background[0];
  state.selectedTextColor = getBestTextColor(linked.text, state.selectedBackgroundColor.hex);
  state.colors.secondary = state.selectedSecondaryColor.hex;
  state.colors.accent = state.selectedAccentColor.hex;
  state.colors.background = state.selectedBackgroundColor.hex;
  state.colors.text = state.selectedTextColor.hex;
  saveState();
  renderBuilder();
  updatePreview();
}

function renderLinkedColors() {
  const branch = $("[data-color-branch]");
  const container = $("[data-linked-colors]");
  if (!state.selectedPrimaryColor) {
    branch.hidden = true;
    container.innerHTML = "";
    return;
  }
  branch.hidden = false;
  const options = generateLinkedColorOptions(state.selectedPrimaryColor, state.primaryArchetype, state.secondaryArchetype, state.selectedHeadingFont, state.selectedBodyFont);
  container.innerHTML = [
    renderColorGroup("secondary", "Secundária", options.secondary, state.selectedSecondaryColor),
    renderColorGroup("accent", "Destaque", options.accent, state.selectedAccentColor),
    renderColorGroup("background", "Fundo", options.background, state.selectedBackgroundColor),
    renderColorGroup("text", "Texto", options.text, state.selectedTextColor)
  ].join("");

  $$('[data-linked-color]').forEach((node) => {
    node.addEventListener("click", () => {
      const role = node.dataset.role;
      const option = options[role].find((item) => item.hex === node.dataset.linkedColor);
      selectLinkedColor(role, option);
    });
  });
}

function renderColorGroup(role, title, options, selected) {
  return `
    <section class="color-group">
      <h4>${title}</h4>
      ${options.map((item) => {
        const isText = role === "text";
        const contrast = isText && state.selectedBackgroundColor ? getContrastRatio(item.hex, state.selectedBackgroundColor.hex) : null;
        const blocked = isText && contrast < 4.5;
        return `
          <article class="color-node ${selected?.hex === item.hex ? "is-selected" : ""} ${blocked ? "is-blocked" : ""}" data-linked-color="${item.hex}" data-role="${role}">
            <div class="swatch-main" style="background:${item.hex}"></div>
            <strong>${item.name}</strong><br>
            <span class="hex">${item.hex}</span>
            <p>${item.reason}</p>
            ${isText ? `<span class="contrast-pill ${blocked ? "bad" : "ok"}">${blocked ? "baixo contraste" : "contraste ok"}</span>` : ""}
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function selectLinkedColor(role, option) {
  if (!option) return;
  const stateKey = `selected${capitalize(role)}Color`;
  state[stateKey] = option;
  state.colors[role] = option.hex;
  if (role === "background") {
    const linked = generateLinkedColorOptions(state.selectedPrimaryColor, state.primaryArchetype, state.secondaryArchetype, state.selectedHeadingFont, state.selectedBodyFont);
    state.selectedTextColor = getBestTextColor(linked.text, option.hex);
    state.colors.text = state.selectedTextColor.hex;
  }
  saveState();
  renderLinkedColors();
  updatePreview();
}

function generateLinkedColorOptions(primaryColor, primaryArchetype, secondaryArchetype, headingFont, bodyFont) {
  const hex = primaryColor.hex;
  const mood = getFontMood(headingFont);
  const dark = shade(hex, -48);
  const soft = mix(hex, "#F8FAFC", 78);
  const muted = mix(hex, "#64748B", 54);
  const accentBase = secondaryArchetype ? (primaryColorOptions[secondaryArchetype]?.[0]?.hex || "#FFD100") : getComplement(hex);
  const accentTwo = mood === "expressive" ? "#FFEE32" : getComplement(hex);
  const backgroundDark = mood === "editorial" ? "#111827" : "#202020";

  return {
    secondary: [
      { name: "Variação Profunda", hex: dark, reason: "Apoia a cor principal com mais autoridade." },
      { name: "Neutro Colorido", hex: muted, reason: "Complementa sem competir com a principal." },
      { name: "Variação Suave", hex: mix(hex, "#D6D6D6", 58), reason: "Cria respiro e unidade visual." }
    ],
    accent: [
      { name: "Contraste Direto", hex: accentBase, reason: "Cria destaque para CTAs e badges." },
      { name: "Acento Luminoso", hex: accentTwo, reason: "Adiciona energia visual sem perder coerência." },
      { name: "Acento Técnico", hex: "#22D3EE", reason: "Funciona bem em interfaces digitais e detalhes." }
    ],
    background: [
      { name: "Base Clara", hex: soft, reason: "Valoriza a cor principal e mantém leitura." },
      { name: "Base Neutra", hex: "#F8FAFC", reason: "Fundo limpo para marcas mais editoriais." },
      { name: "Base Escura", hex: backgroundDark, reason: "Cria uma versão premium e contrastada." }
    ],
    text: [
      { name: "Grafite", hex: "#0F172A", reason: "Alto contraste em fundos claros." },
      { name: "Branco Neve", hex: "#F8FAFC", reason: "Alto contraste em fundos escuros." },
      { name: "Chumbo", hex: "#1F2937", reason: "Leitura confortável em fundos claros." }
    ]
  };
}

function getFontMood(fontName) {
  const serifFonts = ["Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Lora", "Merriweather", "Prata", "Cinzel", "Fraunces"];
  const expressiveFonts = ["Syne", "Bricolage Grotesque", "Bebas Neue", "Anton", "Archivo Black", "Fredoka", "Baloo 2"];
  if (serifFonts.includes(fontName)) return "editorial";
  if (expressiveFonts.includes(fontName)) return "expressive";
  return "digital";
}

function getBestTextColor(options, background) {
  const sorted = [...options].sort((a, b) => getContrastRatio(b.hex, background) - getContrastRatio(a.hex, background));
  return sorted[0];
}

function updatePreview() {
  document.documentElement.style.setProperty("--brand-primary", state.colors.primary || "#2563EB");
  document.documentElement.style.setProperty("--brand-secondary", state.colors.secondary || "#64748B");
  document.documentElement.style.setProperty("--brand-accent", state.colors.accent || "#F59E0B");
  document.documentElement.style.setProperty("--brand-background", state.colors.background || "#F8FAFC");
  document.documentElement.style.setProperty("--brand-text", state.colors.text || "#0F172A");
  document.documentElement.style.setProperty("--brand-font-heading", `"${state.selectedHeadingFont || "Playfair Display"}", ${isSerif(state.selectedHeadingFont) ? "serif" : "sans-serif"}`);
  document.documentElement.style.setProperty("--brand-font-body", `"${state.selectedBodyFont || "Inter"}", sans-serif`);

  $("[data-preview-title]").textContent = state.brandName || "NOVA";
  $("[data-preview-tagline]").textContent = state.tagline || defaultState.tagline;
  $("[data-preview-social-title]").textContent = `${state.brandName || "NOVA"}: identidade com direção.`;
  $("[data-preview-social-text]").textContent = "Arquétipos, fontes e cores trabalhando como um sistema.";

  const primary = state.primaryArchetype ? getArchetype(state.primaryArchetype)?.name : "Arquétipo";
  const secondary = state.secondaryArchetype ? ` + ${getArchetype(state.secondaryArchetype)?.name}` : "";
  $("[data-preview-archetypes]").textContent = `${primary}${secondary}`;
  $("[data-preview-summary]").innerHTML = [
    `Fonte título: ${state.selectedHeadingFont || "Não definida"}`,
    `Fonte texto: ${state.selectedBodyFont || "Não definida"}`,
    `Principal: ${state.colors.primary || "Não definida"}`,
    `Secundária: ${state.colors.secondary || "Não definida"}`,
    `Destaque: ${state.colors.accent || "Não definida"}`,
    `Fundo: ${state.colors.background || "Não definida"}`,
    `Texto: ${state.colors.text || "Não definida"}`
  ].map((line) => `<div class="summary-line">${line}</div>`).join("");
}

function syncBrandInputs() {
  const nameInput = $("[data-brand-name]");
  const taglineInput = $("[data-brand-tagline]");
  if (nameInput) nameInput.value = state.brandName || "";
  if (taglineInput) taglineInput.value = state.tagline || "";
}

function goToStep(step) {
  state.currentStep = step;
  saveState();
  renderStep();
}

function goBack() {
  const order = ["intro", "primary-archetype", "secondary-archetype", "builder"];
  const currentIndex = order.indexOf(state.currentStep);
  const previous = order[Math.max(0, currentIndex - 1)] || "intro";
  goToStep(previous);
}

function resetApp() {
  state = structuredClone(defaultState);
  saveState();
  renderStep();
  syncBrandInputs();
  updatePreview();
  showToast("Brand Flow reiniciado.");
}

function exportJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "Brand Flow",
    primaryArchetype: state.primaryArchetype ? getArchetype(state.primaryArchetype)?.name : null,
    secondaryArchetype: state.secondaryArchetype ? getArchetype(state.secondaryArchetype)?.name : null,
    typography: {
      heading: state.selectedHeadingFont,
      body: state.selectedBodyFont
    },
    colors: state.colors,
    brandName: state.brandName,
    tagline: state.tagline
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slug(state.brandName || "brand-flow")}-kit.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("JSON exportado.");
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? deepMerge(structuredClone(defaultState), saved) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function deepMerge(target, source) {
  Object.entries(source || {}).forEach(([key, value]) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      target[key] = deepMerge(target[key] || {}, value);
    } else {
      target[key] = value;
    }
  });
  return target;
}

function showToast(message) {
  const toast = $("[data-toast]");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { toast.hidden = true; }, 2200);
}

function getArchetype(id) {
  return archetypes.find((item) => item.id === id) || archetypes[0];
}

function slug(text) {
  return String(text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function isSerif(font) {
  return ["Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Lora", "Merriweather", "Prata", "Cinzel", "Fraunces"].includes(font);
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}

function mix(hexA, hexB, percentB = 50) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const p = percentB / 100;
  return rgbToHex({ r: a.r * (1 - p) + b.r * p, g: a.g * (1 - p) + b.g * p, b: a.b * (1 - p) + b.b * p });
}

function shade(hex, percent) {
  const rgb = hexToRgb(hex);
  const target = percent > 0 ? 255 : 0;
  const p = Math.abs(percent) / 100;
  return rgbToHex({ r: rgb.r + (target - rgb.r) * p, g: rgb.g + (target - rgb.g) * p, b: rgb.b + (target - rgb.b) * p });
}

function getComplement(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex({ r: 255 - r, g: 255 - g, b: 255 - b });
}

function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const channel = [r, g, b].map((value) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * channel[0] + 0.7152 * channel[1] + 0.0722 * channel[2];
}

function getContrastRatio(colorA, colorB) {
  const lumA = getLuminance(colorA);
  const lumB = getLuminance(colorB);
  const brightest = Math.max(lumA, lumB);
  const darkest = Math.min(lumA, lumB);
  return (brightest + 0.05) / (darkest + 0.05);
}

init();
