const STORAGE_KEY = "brand-flow-state-v3";

const archetypes = [
  { id:"innocent", name:"Inocente", keywords:["otimismo","pureza","simplicidade"], short:"Marcas leves, positivas e confiáveis.", summary:"O Inocente busca simplicidade, segurança e uma relação clara com o público.", voice:"Gentil, otimista, simples e transparente.", visual:"Muito espaço, formas suaves, luz, clareza e poucos ruídos visuais.", colors:"Brancos, beges, azuis claros e amarelos suaves.", fonts:"Sans arredondadas e fontes limpas com leitura fácil.", use:"Marcas de bem-estar, educação básica, produtos familiares, projetos leves e acessíveis.", avoid:"Quando a marca precisa parecer agressiva, disruptiva ou extremamente técnica." },
  { id:"sage", name:"Sábio", keywords:["clareza","conhecimento","confiança"], short:"Marcas que ensinam, analisam e orientam.", summary:"O Sábio constrói autoridade por meio de conhecimento, precisão e pensamento claro.", voice:"Didático, objetivo, racional e confiável.", visual:"Editorial, organizado, técnico, limpo e estruturado.", colors:"Azuis, cinzas, branco, grafite e tons frios.", fonts:"Serifas editoriais, sans neutras e fontes técnicas.", use:"Consultorias, educação, tecnologia, pesquisa, conteúdo estratégico e dados.", avoid:"Quando a marca precisa ser muito impulsiva, cômica ou sensorial." },
  { id:"explorer", name:"Explorador", keywords:["liberdade","movimento","descoberta"], short:"Marcas que incentivam autonomia e jornada.", summary:"O Explorador representa liberdade, descoberta e desejo de sair do comum.", voice:"Livre, inspirador, direto e curioso.", visual:"Aberto, natural, expansivo, com sensação de movimento.", colors:"Verdes, areia, azul profundo, tons terrosos e naturais.", fonts:"Humanistas, orgânicas e sans modernas.", use:"Turismo, lifestyle, educação independente, esportes, aventura e carreira.", avoid:"Quando a marca precisa transmitir controle rígido ou tradição institucional." },
  { id:"hero", name:"Herói", keywords:["coragem","força","superação"], short:"Marcas de performance, desafio e conquista.", summary:"O Herói inspira ação, disciplina, coragem e transformação por esforço.", voice:"Forte, motivador, direto e competitivo.", visual:"Contraste alto, composição firme, impacto e energia.", colors:"Vermelho, preto, amarelo, azul intenso e branco.", fonts:"Bold, condensadas, geométricas e impactantes.", use:"Esporte, performance, vendas, desafios, fitness, carreira e liderança.", avoid:"Quando a marca precisa parecer calma, acolhedora ou delicada." },
  { id:"outlaw", name:"Fora da Lei", keywords:["ruptura","atitude","provocação"], short:"Marcas que quebram regras e desafiam padrões.", summary:"O Fora da Lei cria atenção por contraste, coragem estética e posicionamento forte.", voice:"Provocador, ousado, direto e inconformado.", visual:"Escuro, urbano, intenso, contrastado e menos polido.", colors:"Preto, vermelho, roxo escuro, cinza metálico e branco sujo.", fonts:"Display fortes, grotescas, condensadas e pesadas.", use:"Moda, cultura, música, tecnologia disruptiva e marcas jovens com atitude.", avoid:"Quando a marca precisa parecer muito segura, familiar ou institucional." },
  { id:"magician", name:"Mago", keywords:["transformação","visão","encanto"], short:"Marcas que prometem transformação e futuro.", summary:"O Mago traduz possibilidades, mudança e uma sensação de experiência especial.", voice:"Visionário, simbólico, inspirador e magnético.", visual:"Misterioso, luminoso, futurista, elegante e aspiracional.", colors:"Roxo, azul elétrico, dourado, preto profundo e ciano.", fonts:"Elegantes, tecnológicas ou sofisticadas.", use:"IA, inovação, beleza premium, experiências, tecnologia e transformação pessoal.", avoid:"Quando a marca precisa ser cotidiana, simples ou totalmente pragmática." },
  { id:"everyman", name:"Pessoa Comum", keywords:["proximidade","pertencimento","simplicidade"], short:"Marcas acessíveis, humanas e diretas.", summary:"A Pessoa Comum se conecta pela identificação, pela linguagem simples e pela confiança.", voice:"Próximo, simples, honesto e acolhedor.", visual:"Cotidiano, claro, acessível, estável e humano.", colors:"Azul médio, verde, bege, cinza suave e branco.", fonts:"Sans legíveis, neutras e populares.", use:"Serviços locais, varejo, comunidades, atendimento e marcas populares.", avoid:"Quando a marca precisa parecer exclusiva, luxuosa ou altamente disruptiva." },
  { id:"lover", name:"Amante", keywords:["beleza","conexão","desejo"], short:"Marcas sensoriais, elegantes e emocionais.", summary:"O Amante constrói desejo por estética, conexão, cuidado visual e experiência sensorial.", voice:"Caloroso, elegante, envolvente e emocional.", visual:"Refinado, quente, delicado, premium e sensorial.", colors:"Vinho, rosa, nude, dourado suave, creme e marrom quente.", fonts:"Serifas elegantes, displays suaves e humanistas.", use:"Moda, beleza, gastronomia, lifestyle, fotografia, eventos e experiências premium.", avoid:"Quando a marca precisa parecer puramente técnica ou agressiva." },
  { id:"jester", name:"Bobo da Corte", keywords:["humor","leveza","espontaneidade"], short:"Marcas divertidas, memoráveis e expressivas.", summary:"O Bobo da Corte usa humor, surpresa e leveza para criar vínculo rápido.", voice:"Divertido, espontâneo, irreverente e simples.", visual:"Colorido, dinâmico, expressivo, arredondado e vivo.", colors:"Amarelo, laranja, rosa, azul vibrante e verde claro.", fonts:"Display arredondadas, bold e descontraídas.", use:"Entretenimento, alimentos, social media, educação leve, games e marcas jovens.", avoid:"Quando a marca precisa transmitir máxima seriedade ou autoridade formal." },
  { id:"caregiver", name:"Cuidador", keywords:["apoio","proteção","acolhimento"], short:"Marcas que acolhem, protegem e ajudam.", summary:"O Cuidador comunica segurança, atenção e suporte com sensibilidade.", voice:"Gentil, claro, paciente e responsável.", visual:"Calmo, suave, humano, limpo e confiável.", colors:"Verde claro, azul suave, creme, rosa pálido e branco.", fonts:"Arredondadas, suaves e muito legíveis.", use:"Saúde, educação, assistência, família, atendimento, serviços sociais e bem-estar.", avoid:"Quando a marca precisa parecer rebelde, competitiva ou fria." },
  { id:"creator", name:"Criador", keywords:["autoria","imaginação","expressão"], short:"Marcas autorais, criativas e construtivas.", summary:"O Criador transforma ideias em forma, estilo, linguagem e sistema visual.", voice:"Autoral, criativo, inteligente e expressivo.", visual:"Experimental, flexível, artístico, visualmente marcante e modular.", colors:"Roxo, magenta, laranja, off-white, preto e tons vibrantes.", fonts:"Displays criativas combinadas com sans limpas.", use:"Design, conteúdo, tecnologia criativa, moda, arte, produtos digitais e estúdios.", avoid:"Quando a marca precisa parecer simples, neutra ou invisível." },
  { id:"ruler", name:"Governante", keywords:["liderança","prestígio","ordem"], short:"Marcas premium, sólidas e autoritativas.", summary:"O Governante transmite domínio, controle, qualidade, tradição e alto padrão.", voice:"Seguro, formal, preciso e confiante.", visual:"Premium, estruturado, elegante, sólido e simétrico.", colors:"Preto, dourado, azul-marinho, branco, cinza e vinho.", fonts:"Serifas clássicas ou sans sofisticadas.", use:"Luxo, finanças, gestão, jurídico, imóveis, marcas institucionais e premium.", avoid:"Quando a marca precisa parecer divertida, acessível ou improvisada." }
];

const compatibility = {
  innocent:["caregiver","everyman","sage","lover"], sage:["creator","ruler","magician","caregiver","explorer"], explorer:["sage","hero","creator","outlaw","everyman"],
  hero:["ruler","explorer","sage","magician","outlaw"], outlaw:["hero","explorer","magician","creator","jester"], magician:["sage","creator","ruler","hero","lover"],
  everyman:["innocent","caregiver","jester","explorer","lover"], lover:["creator","innocent","caregiver","ruler","magician"], jester:["everyman","creator","outlaw","innocent","lover"],
  caregiver:["innocent","everyman","sage","lover","ruler"], creator:["magician","sage","lover","jester","explorer"], ruler:["sage","hero","magician","caregiver","lover"]
};

const typographyByArchetype = {
  innocent:[font("Nunito","amigável, simples e otimista",["Inter","Lato","Open Sans"]),font("Quicksand","leve, arredondada e acolhedora",["Nunito Sans","DM Sans","Manrope"]),font("DM Sans","minimalista, clara e positiva",["Nunito","Source Sans 3","Work Sans"])],
  sage:[font("Playfair Display","editorial, sofisticada e intelectual",["Inter","Source Sans 3","IBM Plex Sans"]),font("Merriweather","confiável, profunda e clássica",["Lato","Open Sans","Nunito Sans"]),font("Libre Baskerville","clássica, séria e precisa",["Montserrat","Work Sans","DM Sans"])],
  explorer:[font("Alegreya Sans","orgânica, livre e humana",["Lato","Source Sans 3","Nunito Sans"]),font("Montserrat","aberta, moderna e confiante",["Merriweather Sans","Open Sans","Work Sans"]),font("Manrope","digital, livre e contemporânea",["Inter","DM Sans","Lora"])],
  hero:[font("Oswald","forte, direta e determinada",["Inter","Roboto","Source Sans 3"]),font("Bebas Neue","impactante, esportiva e energética",["Montserrat","Manrope","Lato"]),font("Anton","pesada, intensa e memorável",["Open Sans","DM Sans","Work Sans"])],
  outlaw:[font("Archivo Black","radical, pesada e provocativa",["Inter","IBM Plex Sans","Roboto"]),font("Space Grotesk","moderna, disruptiva e tecnológica",["Manrope","DM Sans","Source Sans 3"]),font("Bebas Neue","urbana, intensa e direta",["Montserrat","Work Sans","Open Sans"])],
  magician:[font("Cinzel","mística, elegante e transformadora",["Inter","Manrope","Source Sans 3"]),font("Syne","futurista, criativa e magnética",["DM Sans","Sora","IBM Plex Sans"]),font("Cormorant Garamond","sofisticada, simbólica e encantadora",["Montserrat","Work Sans","Lato"])],
  everyman:[font("Inter","simples, acessível e confiável",["Merriweather","Nunito Sans","Source Sans 3"]),font("Lato","humana, próxima e equilibrada",["Montserrat","Open Sans","Roboto"]),font("Open Sans","neutra, simples e popular",["Lora","DM Sans","Work Sans"])],
  lover:[font("Cormorant Garamond","elegante, sensorial e refinada",["Montserrat","Lato","Manrope"]),font("Playfair Display","charmosa, editorial e emocional",["Inter","DM Sans","Source Sans 3"]),font("Prata","luxuosa, delicada e marcante",["Open Sans","Work Sans","Nunito Sans"])],
  jester:[font("Fredoka","divertida, arredondada e expressiva",["Inter","Nunito Sans","DM Sans"]),font("Baloo 2","brincalhona, marcante e popular",["Lato","Open Sans","Work Sans"]),font("Bricolage Grotesque","criativa, expressiva e contemporânea",["Manrope","Sora","Source Sans 3"])],
  caregiver:[font("Nunito","acolhedora, gentil e segura",["Lato","Open Sans","Source Sans 3"]),font("Lora","sensível, humana e confiável",["Inter","DM Sans","Work Sans"]),font("Quicksand","suave, próxima e amigável",["Nunito Sans","Manrope","Roboto"])],
  creator:[font("Syne","autoral, experimental e contemporânea",["Inter","DM Sans","Sora"]),font("Bricolage Grotesque","expressiva, artística e flexível",["Manrope","Source Sans 3","Work Sans"]),font("Fraunces","criativa, elegante e autoral",["Inter","Nunito Sans","IBM Plex Sans"])],
  ruler:[font("Cinzel","nobre, clássica e institucional",["Inter","Source Sans 3","Manrope"]),font("Cormorant Garamond","elegante, premium e tradicional",["Montserrat","Lato","Work Sans"]),font("Montserrat","forte, corporativa e organizada",["Libre Baskerville","DM Sans","Open Sans"])]
};

function font(name, feeling, pairNames) {
  return { id: slug(name), font: name, feeling, pairings: pairNames.map(p => ({ id: slug(p), font: p, feeling: pairingFeeling(p) })) };
}
function pairingFeeling(name) {
  const map = { Inter:"limpa, digital e precisa", Lato:"humana, clara e acessível", "Open Sans":"neutra, estável e universal", "Nunito Sans":"leve, suave e legível", "DM Sans":"moderna, minimalista e direta", Manrope:"digital, elegante e organizada", "Source Sans 3":"editorial, clara e fluida", "Work Sans":"funcional, limpa e contemporânea", Montserrat:"moderna, estruturada e forte", "IBM Plex Sans":"técnica, confiável e racional", Sora:"geométrica, tecnológica e moderna", Roboto:"funcional, simples e objetiva", Lora:"humana, narrativa e elegante", Merriweather:"editorial, séria e confiável", "Merriweather Sans":"natural, legível e equilibrada", "Libre Baskerville":"clássica, confiável e sofisticada" };
  return map[name] || "complementar, legível e equilibrada";
}

const primaryColorByArchetype = {
  innocent:[c("Luz Suave","#FFEEA8","otimismo, leveza e simplicidade"),c("Azul Claro","#9DDCFF","confiança, calma e pureza"),c("Creme Limpo","#F7E8C8","acolhimento e clareza")],
  sage:[c("Azul Estratégico","#2563EB","clareza, inteligência e confiança"),c("Azul Profundo","#1E3A8A","autoridade e profundidade"),c("Ciano Técnico","#0891B2","precisão e tecnologia")],
  explorer:[c("Verde Trilha","#3F7D20","natureza e liberdade"),c("Azul Horizonte","#0E7490","movimento e descoberta"),c("Areia Viva","#D6A35A","território e aventura")],
  hero:[c("Vermelho Energia","#DC2626","força e ação"),c("Azul Vitória","#1D4ED8","confiança e performance"),c("Âmbar Impacto","#F59E0B","energia e conquista")],
  outlaw:[c("Vermelho Ruptura","#E11D48","atitude e provocação"),c("Roxo Urbano","#7E22CE","rebeldia e mistério"),c("Grafite Radical","#27272A","força e contraste")],
  magician:[c("Roxo Transformação","#7C3AED","visão e encantamento"),c("Azul Elétrico","#2563EB","futuro e tecnologia"),c("Dourado Místico","#D97706","valor e brilho")],
  everyman:[c("Azul Próximo","#3B82F6","confiança e acesso"),c("Verde Cotidiano","#16A34A","equilíbrio e simplicidade"),c("Cinza Humano","#64748B","neutralidade e estabilidade")],
  lover:[c("Vinho Sensorial","#9F1239","desejo e profundidade"),c("Rosa Elegante","#DB2777","conexão e beleza"),c("Nude Quente","#D6A68A","calor e sofisticação")],
  jester:[c("Amarelo Vivo","#FFD100","alegria e destaque"),c("Laranja Brincante","#F97316","energia e espontaneidade"),c("Rosa Pop","#EC4899","expressão e diversão")],
  caregiver:[c("Verde Acolhimento","#22C55E","cuidado e segurança"),c("Azul Sereno","#60A5FA","calma e confiança"),c("Rosa Suave","#F9A8D4","gentileza e proximidade")],
  creator:[c("Roxo Autoral","#8B5CF6","imaginação e expressão"),c("Magenta Criativo","#D946EF","originalidade e presença"),c("Laranja Ideia","#F97316","energia criativa")],
  ruler:[c("Dourado Premium","#D4AF37","prestígio e liderança"),c("Azul Marinho","#172554","ordem e autoridade"),c("Vinho Real","#7F1D1D","tradição e poder")]
};
function c(name, hex, meaning) { return { id: slug(name), name, hex, meaning }; }

const defaultState = {
  currentStep:"intro",
  primaryArchetype:null,
  secondaryArchetype:null,
  selectedHeadingFont:null,
  selectedBodyFont:null,
  selectedPrimaryColor:null,
  selectedSecondaryColor:null,
  selectedAccentColor:null,
  selectedBackgroundColor:null,
  selectedTextColor:null,
  colors:{ primary:null, secondary:null, accent:null, background:null, text:null },
  brandName:"NOVA",
  tagline:"Uma marca criada com direção, personalidade e presença."
};

let state = loadState();
let centerArchetypeId = null;
const app = document.querySelector("#app");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

init();

function init() {
  closeModal();
  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  renderStep();
}

function handleClick(event) {
  const action = event.target.closest("[data-action]");
  if (!action) return;
  const type = action.dataset.action;
  const id = action.dataset.id;
  const value = action.dataset.value;

  if (type === "start") setStep("primary-archetype");
  if (type === "reset") resetApp();
  if (type === "export") exportJSON();
  if (type === "prev-step") setStep(value);
  if (type === "read-archetype") openArchetypeModal(id, action.dataset.mode || "primary");
  if (type === "use-archetype") useArchetype(id, action.dataset.mode || "primary");
  if (type === "skip-secondary") { state.secondaryArchetype = null; setStep("typography"); }
  if (type === "select-heading") selectHeading(id);
  if (type === "select-body") selectBody(id);
  if (type === "select-primary-color") selectPrimaryColor(id);
  if (type === "select-linked-color") selectLinkedColor(action.dataset.role, id);
  if (type === "copy-hex") copyText(value);
  if (type === "go-final") setStep("final");
  if (type === "back-colors") setStep("colors");
  if (type === "carousel-prev") moveCarousel(-1);
  if (type === "carousel-next") moveCarousel(1);
}

function handleInput(event) {
  const input = event.target.closest("[data-bind]");
  if (!input) return;
  const key = input.dataset.bind;
  state[key] = input.value;
  saveState();
  updateBrandVars();
  const preview = document.querySelector("#preview-panel");
  if (preview) preview.innerHTML = renderPreview();
}

function setStep(step) {
  state.currentStep = step;
  saveState();
  renderStep();
}

function renderStep() {
  closeModal();
  updateBrandVars();
  if (state.currentStep === "intro") return renderIntro();
  app.innerHTML = renderTopbar() + `<main class="screen">${renderCurrentContent()}</main>`;
  if (["primary-archetype", "secondary-archetype"].includes(state.currentStep)) setupCarousel();
}

function renderIntro() {
  app.innerHTML = `
    <main class="intro-screen">
      <section class="intro-card">
        <span class="kicker">Branding Kit App</span>
        <h1>Brand Flow</h1>
        <p class="intro-lead">Crie um mini branding kit visual em poucos passos.</p>
        <p class="intro-copy">Escolha a personalidade da marca, combine fontes do Google Fonts e construa um sistema visual coerente em um fluxo de nodes.</p>
        <button class="btn btn-primary" type="button" data-action="start">Começar</button>
      </section>
    </main>`;
}

function renderTopbar() {
  return `<header class="topbar">
    <div class="brand-mark"><span class="brand-dot"></span>Brand Flow</div>
    <div class="top-actions">
      <span class="pill">${getStepLabel()}</span>
      <button class="btn btn-secondary" data-action="reset" type="button">Resetar</button>
      <button class="btn btn-ghost" data-action="export" type="button">Exportar JSON</button>
    </div>
  </header>`;
}

function getStepLabel() {
  return {"primary-archetype":"Arquétipo principal","secondary-archetype":"Arquétipo secundário","typography":"Fontes","colors":"Cores","final":"Preview"}[state.currentStep] || "Brand Flow";
}

function renderCurrentContent() {
  if (state.currentStep === "primary-archetype") return renderArchetypeStep("primary");
  if (state.currentStep === "secondary-archetype") return renderArchetypeStep("secondary");
  if (state.currentStep === "typography") return renderTypographyStep();
  if (state.currentStep === "colors") return renderColorsStep();
  if (state.currentStep === "final") return renderFinalStep();
  return "";
}

function renderArchetypeStep(mode) {
  const isSecondary = mode === "secondary";
  return `
    <section>
      <div class="step-head">
        <span class="kicker">${isSecondary ? "Etapa opcional" : "Primeira decisão"}</span>
        <h2 class="step-title">${isSecondary ? "Escolha um arquétipo secundário" : "Escolha o arquétipo da sua marca"}</h2>
        <p class="step-lead">${isSecondary ? "O arquétipo secundário adiciona nuances à personalidade da marca. Você pode pular essa etapa." : "Cada arquétipo define uma direção visual, verbal e emocional para a identidade."}</p>
      </div>
      <div class="carousel-wrap">
        <button class="nav-arrow prev" type="button" data-action="carousel-prev">‹</button>
        <div class="carousel" id="archetype-carousel">
          ${archetypes.map((a, i) => renderArchetypeCard(a, mode, i)).join("")}
        </div>
        <button class="nav-arrow next" type="button" data-action="carousel-next">›</button>
      </div>
      <div class="step-actions">
        ${isSecondary ? `<button class="btn btn-secondary" type="button" data-action="prev-step" data-value="primary-archetype">Voltar</button><button class="btn btn-primary" type="button" data-action="skip-secondary">Pular</button>` : ""}
      </div>
    </section>`;
}

function renderArchetypeCard(a, mode, index) {
  let disabled = false;
  let badge = "";
  if (mode === "secondary") {
    if (a.id === state.primaryArchetype) { disabled = true; badge = "Arquétipo principal"; }
    else if (!compatibility[state.primaryArchetype]?.includes(a.id)) { disabled = true; badge = "Pouco compatível"; }
  }
  const tilt = ((index % 5) - 2) * 4;
  return `<article class="arch-card ${disabled ? "is-disabled" : ""}" style="--tilt:${tilt}deg" data-arch-card data-id="${a.id}">
    ${badge ? `<span class="lock-badge">${badge}</span>` : ""}
    <div>
      <h3>${a.name}</h3>
      <p>${a.short}</p>
      <div class="keyword-row">${a.keywords.map(k => `<span class="tag">${k}</span>`).join("")}</div>
    </div>
    <div class="card-actions">
      <button class="btn btn-secondary" type="button" data-action="read-archetype" data-id="${a.id}" data-mode="${mode}" ${disabled ? "disabled" : ""}>Ler mais</button>
      <button class="btn btn-primary" type="button" data-action="use-archetype" data-id="${a.id}" data-mode="${mode}" ${disabled ? "disabled" : ""}>Usar</button>
    </div>
  </article>`;
}

function setupCarousel() {
  const carousel = document.querySelector("#archetype-carousel");
  if (!carousel) return;
  const cards = [...carousel.querySelectorAll("[data-arch-card]")];
  const update = () => {
    const center = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let closest = null;
    let min = Infinity;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - center);
      if (dist < min) { min = dist; closest = card; }
    });
    cards.forEach(card => card.classList.toggle("is-center", card === closest));
    centerArchetypeId = closest?.dataset.id || null;
  };
  carousel.addEventListener("scroll", () => window.requestAnimationFrame(update));
  setTimeout(() => {
    const targetId = state.currentStep === "secondary-archetype" ? (compatibility[state.primaryArchetype]?.[0] || archetypes[0].id) : (state.primaryArchetype || archetypes[0].id);
    const target = cards.find(c => c.dataset.id === targetId && !c.classList.contains("is-disabled")) || cards[0];
    target?.scrollIntoView({ inline:"center", block:"nearest" });
    update();
  }, 80);
}

function moveCarousel(direction) {
  const carousel = document.querySelector("#archetype-carousel");
  if (!carousel) return;
  carousel.scrollBy({ left: direction * 270, behavior:"smooth" });
}

function openArchetypeModal(id, mode) {
  const a = getArch(id);
  modalContent.innerHTML = `
    <span class="kicker">Arquétipo ${mode === "secondary" ? "secundário" : "principal"}</span>
    <h2 id="modal-title">${a.name}</h2>
    <p>${a.summary}</p>
    <div class="modal-grid">
      ${modalBox("Como se comporta", a.summary)}
      ${modalBox("Tom de voz", a.voice)}
      ${modalBox("Direção visual", a.visual)}
      ${modalBox("Cores recomendadas", a.colors)}
      ${modalBox("Fontes recomendadas", a.fonts)}
      ${modalBox("Quando usar", a.use)}
      ${modalBox("Quando evitar", a.avoid)}
      ${modalBox("Aplicação", `Use esse arquétipo para guiar escolhas de linguagem, cor, tipografia, forma, composição e experiência.`)}
    </div>
    <button class="btn btn-primary" type="button" data-action="use-archetype" data-id="${a.id}" data-mode="${mode}">Usar este arquétipo</button>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}
function modalBox(title, text) { return `<div class="modal-box"><h4>${title}</h4><p>${text}</p></div>`; }

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (modalContent) modalContent.innerHTML = "";
}
document.addEventListener("click", e => { if (e.target.closest("[data-close-modal]")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function useArchetype(id, mode) {
  if (mode === "primary") {
    state.primaryArchetype = id;
    state.secondaryArchetype = null;
    clearAfterArchetype();
    setStep("secondary-archetype");
  } else {
    state.secondaryArchetype = id;
    clearAfterArchetype();
    setStep("typography");
  }
}

function clearAfterArchetype() {
  state.selectedHeadingFont = null;
  state.selectedBodyFont = null;
  state.selectedPrimaryColor = null;
  state.selectedSecondaryColor = null;
  state.selectedAccentColor = null;
  state.selectedBackgroundColor = null;
  state.selectedTextColor = null;
  state.colors = { primary:null, secondary:null, accent:null, background:null, text:null };
}

function renderTypographyStep() {
  ensurePrimary();
  const options = getTypographyOptions();
  const selectedHeading = options.find(o => o.id === state.selectedHeadingFont);
  return `
    <section class="flow-layout">
      <div class="flow-board">
        <span class="kicker">Fluxo tipográfico</span>
        <h2 class="flow-title">Escolha as fontes</h2>
        <p class="flow-subtitle">As opções usam Google Fonts. Primeiro escolha a fonte principal. Depois, escolha uma fonte secundária compatível.</p>
        <div class="node-section">
          <p class="node-label">Arquétipos escolhidos</p>
          <div class="node-grid two">
            ${summaryNode("Principal", getArch(state.primaryArchetype).name, getArch(state.primaryArchetype).short)}
            ${summaryNode("Secundário", state.secondaryArchetype ? getArch(state.secondaryArchetype).name : "Não definido", state.secondaryArchetype ? getArch(state.secondaryArchetype).short : "A marca seguirá apenas a base principal.")}
          </div>
        </div>
        <div class="node-section">
          <p class="node-label">Fonte principal</p>
          <div class="node-grid">
            ${options.map(o => renderFontNode(o, "heading")).join("")}
          </div>
        </div>
        <div class="node-section">
          <p class="node-label">Fonte secundária</p>
          ${selectedHeading ? `<div class="node-grid">${selectedHeading.pairings.map(p => renderFontNode(p, "body")).join("")}</div>` : `<button class="node is-disabled" type="button"><h3>Bloqueado</h3><p>Escolha uma fonte principal para liberar os pairings.</p></button>`}
        </div>
        <div class="final-actions">
          <button class="btn btn-secondary" type="button" data-action="prev-step" data-value="secondary-archetype">Voltar</button>
          <button class="btn btn-primary" type="button" data-action="prev-step" data-value="colors" ${!state.selectedBodyFont ? "disabled" : ""}>Continuar para cores</button>
        </div>
      </div>
      <aside class="preview-panel" id="preview-panel">${renderPreview()}</aside>
    </section>`;
}

function summaryNode(label, title, text) { return `<div class="node"><small>${label}</small><h3>${title}</h3><p>${text}</p></div>`; }

function renderFontNode(f, role) {
  const selected = role === "heading" ? state.selectedHeadingFont === f.id : state.selectedBodyFont === f.id;
  const action = role === "heading" ? "select-heading" : "select-body";
  const family = fontStack(f.font);
  return `<button class="node ${selected ? "is-selected" : ""}" type="button" data-action="${action}" data-id="${f.id}">
    <div class="font-sample" style="font-family:${family}">${f.font}</div>
    <h3>${role === "heading" ? "Título" : "Texto"}</h3>
    <p>${f.feeling}</p>
  </button>`;
}

function getTypographyOptions() {
  if (!state.secondaryArchetype) return typographyByArchetype[state.primaryArchetype];
  const p = typographyByArchetype[state.primaryArchetype];
  const s = typographyByArchetype[state.secondaryArchetype];
  return [p[0], p[1], s[0]];
}

function selectHeading(id) {
  state.selectedHeadingFont = id;
  state.selectedBodyFont = null;
  state.selectedPrimaryColor = null;
  state.colors = { primary:null, secondary:null, accent:null, background:null, text:null };
  saveState();
  renderStep();
}
function selectBody(id) {
  state.selectedBodyFont = id;
  saveState();
  updateBrandVars();
  renderStep();
}

function renderColorsStep() {
  ensurePrimary();
  if (!state.selectedBodyFont) state.currentStep = "typography";
  const primaryOptions = generatePrimaryColorOptions();
  const selectedPrimary = primaryOptions.find(o => o.id === state.selectedPrimaryColor) || null;
  const linked = selectedPrimary ? generateLinkedColorOptions(selectedPrimary.hex) : null;
  return `
    <section class="flow-layout">
      <div class="flow-board">
        <span class="kicker">Sistema cromático</span>
        <h2 class="flow-title">Escolha as cores</h2>
        <p class="flow-subtitle">Primeiro escolha a cor principal. Depois, os nodes de secundária, destaque, fundo e texto abrem em paralelo.</p>
        <div class="node-section">
          <p class="node-label">Cor principal</p>
          <div class="node-grid">
            ${primaryOptions.map(color => renderColorNode(color, "primary", state.selectedPrimaryColor === color.id)).join("")}
          </div>
        </div>
        <div class="node-section">
          <p class="node-label">Cores complementares</p>
          ${selectedPrimary ? renderLinkedColorColumns(linked) : `<button class="node is-disabled" type="button"><h3>Bloqueado</h3><p>Escolha uma cor principal para liberar as cores complementares.</p></button>`}
        </div>
        <div class="final-actions">
          <button class="btn btn-secondary" type="button" data-action="prev-step" data-value="typography">Voltar</button>
          <button class="btn btn-primary" type="button" data-action="go-final" ${!isColorComplete() ? "disabled" : ""}>Ver preview final</button>
        </div>
      </div>
      <aside class="preview-panel" id="preview-panel">${renderPreview()}</aside>
    </section>`;
}

function generatePrimaryColorOptions() {
  const base = [...primaryColorByArchetype[state.primaryArchetype]];
  if (state.secondaryArchetype) base[2] = primaryColorByArchetype[state.secondaryArchetype][0];
  return base.map((x, i) => ({...x, reason: i < 2 ? `Combina com o arquétipo ${getArch(state.primaryArchetype).name} e com a direção tipográfica escolhida.` : `Traz nuance do arquétipo ${state.secondaryArchetype ? getArch(state.secondaryArchetype).name : getArch(state.primaryArchetype).name}.` }));
}

function renderColorNode(color, role, selected, extra = "") {
  const action = role === "primary" ? "select-primary-color" : "select-linked-color";
  return `<button class="node ${selected ? "is-selected" : ""} ${extra}" type="button" data-action="${action}" data-id="${color.id}" ${role !== "primary" ? `data-role="${role}"` : ""}>
    <div class="color-dot" style="background:${color.hex}"></div>
    <h3>${color.name}</h3>
    <p class="color-hex">${color.hex}</p>
    <small>${color.meaning || color.reason || "Cor complementar para o sistema visual."}</small>
  </button>`;
}

function generateLinkedColorOptions(primaryHex) {
  const p = primaryHex;
  const dark = isDark(p);
  const hueSet = colorFamily(p);
  const bgLight = tint(p, 92);
  const bgSoft = tint(p, 84);
  const bgDark = shade(p, 78);
  return {
    secondary: [
      c("Complementar Suave", dark ? tint(p, 58) : shade(p, 40), "apoia a principal sem competir"),
      c("Base Profunda", shade(p, 64), "aumenta peso e profundidade visual"),
      c("Variação Clara", tint(p, 62), "cria leveza e respiro")
    ],
    accent: accentOptions(hueSet),
    background: [
      c("Fundo Claro", bgLight, "mantém leitura limpa e visual aberto"),
      c("Fundo Suave", bgSoft, "cria unidade cromática com a principal"),
      c("Fundo Escuro", bgDark, "cria uma versão premium e contrastada")
    ],
    text: [
      c("Texto Grafite", "#202020", "alto contraste em fundos claros"),
      c("Texto Claro", "#F8FAFC", "alto contraste em fundos escuros"),
      c("Texto Chumbo", "#333533", "leitura confortável em bases claras")
    ]
  };
}

function accentOptions(family) {
  const map = {
    blue:[c("Âmbar de Ação","#F59E0B","contraste quente para CTAs"),c("Ciano Luminoso","#22D3EE","direção técnica e moderna"),c("Violeta Criativo","#8B5CF6","sofisticação e criatividade")],
    green:[c("Amarelo Solar","#FFD100","energia e atenção"),c("Azul Profundo","#2563EB","confiança e contraste"),c("Laranja Vivo","#F97316","ação e vitalidade")],
    red:[c("Amarelo Impacto","#FFD100","alto contraste e energia"),c("Azul Contraste","#2563EB","equilíbrio frio"),c("Rosa Elétrico","#EC4899","expressão e intensidade")],
    purple:[c("Ciano Elétrico","#22D3EE","contraste futurista"),c("Dourado","#D4AF37","valor e sofisticação"),c("Magenta","#D946EF","expressão e presença")],
    yellow:[c("Grafite Forte","#202020","contraste sólido"),c("Azul Profundo","#1E3A8A","confiança e peso"),c("Verde Vivo","#16A34A","energia natural")],
    neutral:[c("Amarelo Solar","#FFD100","destaque claro"),c("Ciano","#22D3EE","modernidade"),c("Violeta","#8B5CF6","criatividade")]
  };
  return map[family] || map.neutral;
}

function renderLinkedColorColumns(linked) {
  const labels = { secondary:"Secundária", accent:"Destaque", background:"Fundo", text:"Texto" };
  const selected = { secondary:state.selectedSecondaryColor, accent:state.selectedAccentColor, background:state.selectedBackgroundColor, text:state.selectedTextColor };
  return `<div class="color-columns">${Object.entries(linked).map(([role, colors]) => `
    <div class="color-column">
      <p class="node-label">${labels[role]}</p>
      ${colors.map(color => {
        const lowContrast = role === "text" && state.colors.background && getContrastRatio(color.hex, state.colors.background) < 4.5;
        return renderColorNode({...color, reason: lowContrast ? "Baixo contraste com o fundo escolhido" : color.meaning}, role, selected[role] === color.id, lowContrast ? "is-disabled" : "");
      }).join("")}
    </div>`).join("")}</div>`;
}

function selectPrimaryColor(id) {
  const option = generatePrimaryColorOptions().find(c => c.id === id);
  if (!option) return;
  state.selectedPrimaryColor = id;
  state.colors.primary = option.hex;
  state.selectedSecondaryColor = null;
  state.selectedAccentColor = null;
  state.selectedBackgroundColor = null;
  state.selectedTextColor = null;
  state.colors.secondary = null;
  state.colors.accent = null;
  state.colors.background = null;
  state.colors.text = null;
  saveState();
  updateBrandVars();
  renderStep();
}

function selectLinkedColor(role, id) {
  const primary = generatePrimaryColorOptions().find(c => c.id === state.selectedPrimaryColor);
  if (!primary) return;
  const linked = generateLinkedColorOptions(primary.hex);
  const color = linked[role]?.find(c => c.id === id);
  if (!color) return;
  if (role === "text" && state.colors.background && getContrastRatio(color.hex, state.colors.background) < 4.5) { showToast("Baixo contraste com o fundo"); return; }
  state.colors[role] = color.hex;
  state[`selected${capitalize(role)}Color`] = id;
  saveState();
  updateBrandVars();
  renderStep();
}

function renderFinalStep() {
  return `<section class="flow-layout">
    <div class="flow-board">
      <span class="kicker">Resultado</span>
      <h2 class="flow-title">Brand Flow final</h2>
      <p class="flow-subtitle">Edite nome e tagline, revise o sistema e exporte o JSON do mini branding kit.</p>
      <div class="node-section">
        <p class="node-label">Dados da marca</p>
        <div class="node-grid two">
          <label class="node"><h3>Nome</h3><input value="${escapeAttr(state.brandName)}" data-bind="brandName" /></label>
          <label class="node"><h3>Tagline</h3><input value="${escapeAttr(state.tagline)}" data-bind="tagline" /></label>
        </div>
      </div>
      <div class="node-section">
        <p class="node-label">Resumo do kit</p>
        <div class="node-grid two">
          ${summaryNode("Arquétipo", getArch(state.primaryArchetype).name, state.secondaryArchetype ? `Secundário: ${getArch(state.secondaryArchetype).name}` : "Sem secundário")}
          ${summaryNode("Fontes", getHeadingFontName(), `Texto: ${getBodyFontName()}`)}
          ${summaryNode("Cor principal", state.colors.primary || "-", "Sistema cromático complementar gerado por nodes")}
          ${summaryNode("Contraste", getContrastRatio(state.colors.text, state.colors.background).toFixed(2), "Contraste entre texto e fundo")}
        </div>
      </div>
      <div class="final-actions">
        <button class="btn btn-secondary" type="button" data-action="back-colors">Voltar para cores</button>
        <button class="btn btn-primary" type="button" data-action="export">Exportar JSON</button>
      </div>
    </div>
    <aside class="preview-panel" id="preview-panel">${renderPreview()}</aside>
  </section>`;
}

function renderPreview() {
  updateBrandVars();
  const arch = state.primaryArchetype ? getArch(state.primaryArchetype).name : "Arquétipo";
  const secondary = state.secondaryArchetype ? ` + ${getArch(state.secondaryArchetype).name}` : "";
  return `<div>
    <p class="node-label">Preview vivo</p>
    <section class="preview-brand">
      <div class="preview-hero">
        <span class="preview-badge">${arch}${secondary}</span>
        <h2>${escapeHTML(state.brandName)}</h2>
        <p>${escapeHTML(state.tagline)}</p>
        <button class="preview-cta">Conhecer marca</button>
      </div>
      <div class="preview-mini">
        <h3>Direção visual</h3>
        <p>Tipografia, personalidade e cores aplicadas em um mini sistema de marca.</p>
        <div class="swatches">${[state.colors.primary,state.colors.secondary,state.colors.accent,state.colors.background,state.colors.text].filter(Boolean).map(x => `<span class="swatch" style="background:${x}"></span>`).join("")}</div>
      </div>
    </section>
    <div class="summary-list">
      <div class="summary-item"><span>Fonte título</span><strong>${getHeadingFontName()}</strong></div>
      <div class="summary-item"><span>Fonte texto</span><strong>${getBodyFontName()}</strong></div>
      <div class="summary-item"><span>Primária</span><strong>${state.colors.primary || "-"}</strong></div>
      <div class="summary-item"><span>Fundo</span><strong>${state.colors.background || "-"}</strong></div>
      <div class="summary-item"><span>Texto</span><strong>${state.colors.text || "-"}</strong></div>
    </div>
  </div>`;
}

function updateBrandVars() {
  document.documentElement.style.setProperty("--brand-primary", state.colors.primary || "#FFD100");
  document.documentElement.style.setProperty("--brand-secondary", state.colors.secondary || "#333533");
  document.documentElement.style.setProperty("--brand-accent", state.colors.accent || "#FFEE32");
  document.documentElement.style.setProperty("--brand-background", state.colors.background || "#F8FAFC");
  document.documentElement.style.setProperty("--brand-text", state.colors.text || "#202020");
  document.documentElement.style.setProperty("--brand-font-heading", fontStack(getHeadingFontName()));
  document.documentElement.style.setProperty("--brand-font-body", fontStack(getBodyFontName()));
}

function getHeadingFontName() {
  const options = state.primaryArchetype ? getTypographyOptions() : [];
  return options.find(f => f.id === state.selectedHeadingFont)?.font || "Cal Sans";
}
function getBodyFontName() {
  const heading = getTypographyOptions().find(f => f.id === state.selectedHeadingFont);
  return heading?.pairings.find(p => p.id === state.selectedBodyFont)?.font || "Inter";
}
function isColorComplete() { return state.colors.primary && state.colors.secondary && state.colors.accent && state.colors.background && state.colors.text; }

function ensurePrimary() { if (!state.primaryArchetype) state.currentStep = "primary-archetype"; }
function getArch(id) { return archetypes.find(a => a.id === id) || archetypes[0]; }
function slug(str) { return String(str).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
function fontStack(name) { return `"${name}", system-ui, sans-serif`; }
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function escapeHTML(str) { return String(str).replace(/[&<>"]/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[m])); }
function escapeAttr(str) { return escapeHTML(str).replace(/'/g, "&#39;"); }

function hexToRgb(hex) { const h = hex.replace("#",""); const n = parseInt(h.length === 3 ? h.split("").map(x=>x+x).join("") : h, 16); return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 }; }
function rgbToHex(r,g,b) { return "#" + [r,g,b].map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2,"0")).join("").toUpperCase(); }
function mix(hex, target, amount) { const a=hexToRgb(hex), b=hexToRgb(target); const t=amount/100; return rgbToHex(a.r+(b.r-a.r)*t, a.g+(b.g-a.g)*t, a.b+(b.b-a.b)*t); }
function tint(hex, amount) { return mix(hex, "#FFFFFF", amount); }
function shade(hex, amount) { return mix(hex, "#000000", amount); }
function luminance(hex) { const {r,g,b}=hexToRgb(hex); const arr=[r,g,b].map(v=>{ v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); }); return 0.2126*arr[0]+0.7152*arr[1]+0.0722*arr[2]; }
function getContrastRatio(a,b) { if (!a || !b) return 1; const l1=luminance(a), l2=luminance(b); return (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05); }
function isDark(hex) { return luminance(hex) < 0.35; }
function colorFamily(hex) { const {r,g,b}=hexToRgb(hex); if (r>200 && g>160 && b<80) return "yellow"; if (g>r && g>b) return "green"; if (r>g && r>b && b<120) return "red"; if (b>r && b>g) return "blue"; if (r>110 && b>140) return "purple"; return "neutral"; }
function getReadableTextColor(bg) { return getContrastRatio("#202020", bg) >= 4.5 ? "#202020" : "#F8FAFC"; }

function copyText(value) { navigator.clipboard?.writeText(value); showToast("Copiado"); }
function showToast(text) { const old = document.querySelector(".toast"); if (old) old.remove(); const t=document.createElement("div"); t.className="toast"; t.textContent=text; document.body.appendChild(t); setTimeout(()=>t.remove(),1800); }

function exportJSON() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type:"application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "brand-flow-kit.json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("JSON exportado");
}

function resetApp() {
  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(defaultState);
  renderStep();
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...structuredClone(defaultState), ...saved, colors:{...defaultState.colors, ...(saved.colors || {})} } : structuredClone(defaultState);
  } catch { return structuredClone(defaultState); }
}
