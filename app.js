const $ = (selector) => document.querySelector(selector);
const root = $('#screenRoot');
const modal = $('#modal');
const modalContent = $('#modalContent');

const STORAGE_KEY = 'brand-flow-final-state-v4';

const archetypes = {
  innocent: { name: 'Inocente', desc: 'Simplicidade, otimismo e confiança para marcas leves e transparentes.', keys: ['leveza','otimismo','clareza'], voice: 'simples, positiva e direta', visual: 'claro, limpo, amplo e amigável', colors: ['amarelos suaves','azuis claros','bege','branco'], fonts: ['Nunito','Quicksand','DM Sans'] },
  sage: { name: 'Sábio', desc: 'Conhecimento, clareza e autoridade intelectual para marcas educativas.', keys: ['clareza','autoridade','conhecimento'], voice: 'didática, precisa e confiável', visual: 'editorial, organizado, racional e limpo', colors: ['azul','cinza','branco','tons frios'], fonts: ['Playfair Display','Merriweather','Libre Baskerville'] },
  explorer: { name: 'Explorador', desc: 'Liberdade, descoberta e autonomia para marcas em movimento.', keys: ['liberdade','descoberta','autonomia'], voice: 'inspiradora, aberta e confiante', visual: 'natural, expansivo, orgânico e dinâmico', colors: ['verde','areia','azul profundo','terrosos'], fonts: ['Alegreya Sans','Montserrat','Manrope'] },
  hero: { name: 'Herói', desc: 'Coragem, performance e superação para marcas fortes.', keys: ['força','coragem','performance'], voice: 'direta, energética e motivadora', visual: 'contrastado, forte, esportivo e objetivo', colors: ['vermelho','preto','amarelo','azul intenso'], fonts: ['Oswald','Bebas Neue','Anton'] },
  outlaw: { name: 'Fora da Lei', desc: 'Ruptura, atitude e provocação para marcas que desafiam padrões.', keys: ['ruptura','atitude','rebeldia'], voice: 'provocadora, intensa e frontal', visual: 'urbano, escuro, forte e disruptivo', colors: ['preto','vermelho','roxo escuro','grafite'], fonts: ['Archivo Black','Space Grotesk','Bebas Neue'] },
  magician: { name: 'Mago', desc: 'Transformação, encantamento e visão para marcas memoráveis.', keys: ['transformação','visão','encanto'], voice: 'visionária, simbólica e inspiradora', visual: 'misterioso, luminoso, sofisticado e futurista', colors: ['roxo','azul elétrico','dourado','preto'], fonts: ['Cinzel','Syne','Cormorant Garamond'] },
  everyman: { name: 'Pessoa Comum', desc: 'Pertencimento, simplicidade e proximidade para marcas acessíveis.', keys: ['proximidade','pertencimento','simplicidade'], voice: 'humana, simples e direta', visual: 'cotidiano, acessível, funcional e acolhedor', colors: ['azul médio','verde','bege','cinza'], fonts: ['Inter','Lato','Open Sans'] },
  lover: { name: 'Amante', desc: 'Desejo, conexão e beleza para marcas sensoriais.', keys: ['beleza','conexão','desejo'], voice: 'sensível, refinada e envolvente', visual: 'elegante, quente, emocional e premium', colors: ['vinho','rosa','nude','dourado'], fonts: ['Cormorant Garamond','Playfair Display','Prata'] },
  jester: { name: 'Bobo da Corte', desc: 'Diversão, leveza e espontaneidade para marcas expressivas.', keys: ['diversão','leveza','humor'], voice: 'espontânea, divertida e criativa', visual: 'colorido, dinâmico, redondo e divertido', colors: ['amarelo','laranja','rosa','azul vibrante'], fonts: ['Fredoka','Baloo 2','Bricolage Grotesque'] },
  caregiver: { name: 'Cuidador', desc: 'Proteção, apoio e acolhimento para marcas humanas.', keys: ['cuidado','acolhimento','segurança'], voice: 'gentil, clara e protetora', visual: 'calmo, suave, humano e confiável', colors: ['verde claro','azul suave','creme','rosa pálido'], fonts: ['Nunito','Lora','Quicksand'] },
  creator: { name: 'Criador', desc: 'Imaginação, autoria e construção para marcas criativas.', keys: ['autoria','imaginação','expressão'], voice: 'autoral, visual e criativa', visual: 'experimental, expressivo, artístico e flexível', colors: ['roxo','magenta','laranja','off-white'], fonts: ['Syne','Bricolage Grotesque','Fraunces'] },
  ruler: { name: 'Governante', desc: 'Liderança, prestígio e ordem para marcas premium.', keys: ['liderança','prestígio','controle'], voice: 'segura, elegante e institucional', visual: 'sólido, premium, estruturado e elegante', colors: ['preto','dourado','azul-marinho','branco'], fonts: ['Cinzel','Cormorant Garamond','Montserrat'] }
};

const compatibility = {
  innocent: ['caregiver','everyman','sage','lover'],
  sage: ['creator','ruler','magician','caregiver','explorer'],
  explorer: ['sage','hero','creator','outlaw','everyman'],
  hero: ['ruler','explorer','sage','magician','outlaw'],
  outlaw: ['hero','explorer','magician','creator','jester'],
  magician: ['sage','creator','ruler','hero','lover'],
  everyman: ['innocent','caregiver','jester','explorer','lover'],
  lover: ['creator','innocent','caregiver','ruler','magician'],
  jester: ['everyman','creator','outlaw','innocent','lover'],
  caregiver: ['innocent','everyman','sage','lover','ruler'],
  creator: ['magician','sage','lover','jester','explorer'],
  ruler: ['sage','hero','magician','caregiver','lover']
};

const typography = {
  innocent: [
    { font: 'Nunito', feeling: 'amigável, simples e otimista', pairings: [{font:'Inter', feeling:'limpa e digital'}, {font:'Lato', feeling:'humana e acessível'}, {font:'Open Sans', feeling:'neutra e universal'}] },
    { font: 'Quicksand', feeling: 'leve, arredondada e acolhedora', pairings: [{font:'Nunito Sans', feeling:'suave e legível'}, {font:'DM Sans', feeling:'moderna e simples'}, {font:'Manrope', feeling:'digital e organizada'}] },
    { font: 'DM Sans', feeling: 'minimalista, clara e positiva', pairings: [{font:'Nunito', feeling:'amigável e leve'}, {font:'Source Sans 3', feeling:'editorial e limpa'}, {font:'Work Sans', feeling:'funcional e direta'}] }
  ],
  sage: [
    { font: 'Playfair Display', feeling: 'editorial, sofisticada e intelectual', pairings: [{font:'Inter', feeling:'limpa, moderna e legível'}, {font:'Source Sans 3', feeling:'editorial e fluida'}, {font:'IBM Plex Sans', feeling:'técnica e confiável'}] },
    { font: 'Merriweather', feeling: 'confiável, profunda e clássica', pairings: [{font:'Lato', feeling:'humana e clara'}, {font:'Open Sans', feeling:'neutra e universal'}, {font:'Nunito Sans', feeling:'leve e acessível'}] },
    { font: 'Libre Baskerville', feeling: 'clássica, séria e precisa', pairings: [{font:'Montserrat', feeling:'estruturada e moderna'}, {font:'Work Sans', feeling:'funcional e clara'}, {font:'DM Sans', feeling:'minimalista e atual'}] }
  ],
  explorer: [
    { font: 'Alegreya Sans', feeling: 'orgânica, livre e humana', pairings: [{font:'Lato', feeling:'acessível e equilibrada'}, {font:'Source Sans 3', feeling:'clara e editorial'}, {font:'Nunito Sans', feeling:'leve e amigável'}] },
    { font: 'Montserrat', feeling: 'aberta, moderna e confiante', pairings: [{font:'Merriweather Sans', feeling:'natural e legível'}, {font:'Open Sans', feeling:'simples e funcional'}, {font:'Work Sans', feeling:'limpa e prática'}] },
    { font: 'Manrope', feeling: 'digital, livre e contemporânea', pairings: [{font:'Inter', feeling:'neutra e precisa'}, {font:'DM Sans', feeling:'leve e moderna'}, {font:'Lora', feeling:'humana e narrativa'}] }
  ],
  hero: [
    { font: 'Oswald', feeling: 'forte, direta e determinada', pairings: [{font:'Inter', feeling:'limpa e objetiva'}, {font:'Roboto', feeling:'funcional e clara'}, {font:'Source Sans 3', feeling:'legível e editorial'}] },
    { font: 'Bebas Neue', feeling: 'impactante, esportiva e energética', pairings: [{font:'Montserrat', feeling:'forte e moderna'}, {font:'Manrope', feeling:'digital e controlada'}, {font:'Lato', feeling:'humana e direta'}] },
    { font: 'Anton', feeling: 'pesada, intensa e memorável', pairings: [{font:'Open Sans', feeling:'simples e estável'}, {font:'DM Sans', feeling:'limpa e atual'}, {font:'Work Sans', feeling:'funcional e firme'}] }
  ],
  outlaw: [
    { font: 'Archivo Black', feeling: 'radical, pesada e provocativa', pairings: [{font:'Inter', feeling:'neutra e legível'}, {font:'IBM Plex Sans', feeling:'técnica e precisa'}, {font:'Roboto', feeling:'funcional e direta'}] },
    { font: 'Space Grotesk', feeling: 'moderna, disruptiva e tecnológica', pairings: [{font:'Manrope', feeling:'digital e refinada'}, {font:'DM Sans', feeling:'limpa e minimalista'}, {font:'Source Sans 3', feeling:'clara e editorial'}] },
    { font: 'Bebas Neue', feeling: 'urbana, intensa e direta', pairings: [{font:'Montserrat', feeling:'estruturada e forte'}, {font:'Work Sans', feeling:'funcional e seca'}, {font:'Open Sans', feeling:'simples e estável'}] }
  ],
  magician: [
    { font: 'Cinzel', feeling: 'mística, elegante e transformadora', pairings: [{font:'Inter', feeling:'moderna e limpa'}, {font:'Manrope', feeling:'digital e sofisticada'}, {font:'Source Sans 3', feeling:'clara e editorial'}] },
    { font: 'Syne', feeling: 'futurista, criativa e magnética', pairings: [{font:'DM Sans', feeling:'minimalista e digital'}, {font:'Sora', feeling:'geométrica e tecnológica'}, {font:'IBM Plex Sans', feeling:'técnica e confiável'}] },
    { font: 'Cormorant Garamond', feeling: 'sofisticada, simbólica e encantadora', pairings: [{font:'Montserrat', feeling:'moderna e estruturada'}, {font:'Work Sans', feeling:'clara e funcional'}, {font:'Lato', feeling:'humana e leve'}] }
  ],
  everyman: [
    { font: 'Inter', feeling: 'simples, acessível e confiável', pairings: [{font:'Merriweather', feeling:'humana e editorial'}, {font:'Nunito Sans', feeling:'leve e amigável'}, {font:'Source Sans 3', feeling:'clara e objetiva'}] },
    { font: 'Lato', feeling: 'humana, próxima e equilibrada', pairings: [{font:'Montserrat', feeling:'moderna e organizada'}, {font:'Open Sans', feeling:'universal e estável'}, {font:'Roboto', feeling:'funcional e direta'}] },
    { font: 'Open Sans', feeling: 'neutra, simples e popular', pairings: [{font:'Lora', feeling:'humana e narrativa'}, {font:'DM Sans', feeling:'digital e limpa'}, {font:'Work Sans', feeling:'prática e clara'}] }
  ],
  lover: [
    { font: 'Cormorant Garamond', feeling: 'elegante, sensorial e refinada', pairings: [{font:'Montserrat', feeling:'moderna e premium'}, {font:'Lato', feeling:'humana e suave'}, {font:'Manrope', feeling:'digital e elegante'}] },
    { font: 'Playfair Display', feeling: 'charmosa, editorial e emocional', pairings: [{font:'Inter', feeling:'limpa e contemporânea'}, {font:'DM Sans', feeling:'minimalista e sofisticada'}, {font:'Source Sans 3', feeling:'editorial e legível'}] },
    { font: 'Prata', feeling: 'luxuosa, delicada e marcante', pairings: [{font:'Open Sans', feeling:'simples e equilibrada'}, {font:'Work Sans', feeling:'moderna e discreta'}, {font:'Nunito Sans', feeling:'leve e acolhedora'}] }
  ],
  jester: [
    { font: 'Fredoka', feeling: 'divertida, arredondada e expressiva', pairings: [{font:'Inter', feeling:'organizada e legível'}, {font:'Nunito Sans', feeling:'leve e amigável'}, {font:'DM Sans', feeling:'moderna e simples'}] },
    { font: 'Baloo 2', feeling: 'brincalhona, marcante e popular', pairings: [{font:'Lato', feeling:'humana e clara'}, {font:'Open Sans', feeling:'simples e estável'}, {font:'Work Sans', feeling:'funcional e limpa'}] },
    { font: 'Bricolage Grotesque', feeling: 'criativa, expressiva e contemporânea', pairings: [{font:'Manrope', feeling:'digital e organizada'}, {font:'Sora', feeling:'geométrica e moderna'}, {font:'Source Sans 3', feeling:'editorial e legível'}] }
  ],
  caregiver: [
    { font: 'Nunito', feeling: 'acolhedora, gentil e segura', pairings: [{font:'Lato', feeling:'humana e clara'}, {font:'Open Sans', feeling:'simples e acessível'}, {font:'Source Sans 3', feeling:'editorial e limpa'}] },
    { font: 'Lora', feeling: 'sensível, humana e confiável', pairings: [{font:'Inter', feeling:'clara e moderna'}, {font:'DM Sans', feeling:'leve e digital'}, {font:'Work Sans', feeling:'funcional e objetiva'}] },
    { font: 'Quicksand', feeling: 'suave, próxima e amigável', pairings: [{font:'Nunito Sans', feeling:'acolhedora e legível'}, {font:'Manrope', feeling:'moderna e organizada'}, {font:'Roboto', feeling:'simples e funcional'}] }
  ],
  creator: [
    { font: 'Syne', feeling: 'autoral, experimental e contemporânea', pairings: [{font:'Inter', feeling:'limpa e estável'}, {font:'DM Sans', feeling:'minimalista e digital'}, {font:'Sora', feeling:'geométrica e moderna'}] },
    { font: 'Bricolage Grotesque', feeling: 'expressiva, artística e flexível', pairings: [{font:'Manrope', feeling:'digital e organizada'}, {font:'Source Sans 3', feeling:'editorial e clara'}, {font:'Work Sans', feeling:'funcional e contemporânea'}] },
    { font: 'Fraunces', feeling: 'criativa, elegante e autoral', pairings: [{font:'Inter', feeling:'limpa e moderna'}, {font:'Nunito Sans', feeling:'leve e acessível'}, {font:'IBM Plex Sans', feeling:'técnica e precisa'}] }
  ],
  ruler: [
    { font: 'Cinzel', feeling: 'nobre, clássica e institucional', pairings: [{font:'Inter', feeling:'moderna e objetiva'}, {font:'Source Sans 3', feeling:'editorial e clara'}, {font:'Manrope', feeling:'sofisticada e digital'}] },
    { font: 'Cormorant Garamond', feeling: 'elegante, premium e tradicional', pairings: [{font:'Montserrat', feeling:'estruturada e moderna'}, {font:'Lato', feeling:'humana e equilibrada'}, {font:'Work Sans', feeling:'funcional e refinada'}] },
    { font: 'Montserrat', feeling: 'forte, corporativa e organizada', pairings: [{font:'Libre Baskerville', feeling:'clássica e confiável'}, {font:'DM Sans', feeling:'minimalista e digital'}, {font:'Open Sans', feeling:'simples e estável'}] }
  ]
};

const primaryColors = {
  innocent: [color('Luz Clara','#FFEE32','Otimismo e leveza','Traduz uma marca simples, positiva e acessível.'), color('Azul Sereno','#93C5FD','Confiança suave','Traz calma sem perder transparência.'), color('Creme Solar','#F7E7B5','Acolhimento leve','Cria uma sensação humana e gentil.')],
  sage: [color('Azul Estratégico','#2563EB','Clareza e inteligência','Conecta conhecimento, confiança e precisão.'), color('Azul Profundo','#1E3A8A','Autoridade','Cria presença madura e institucional.'), color('Ciano Técnico','#0891B2','Precisão digital','Funciona para marcas analíticas e modernas.')],
  explorer: [color('Verde Trilha','#2F6B4F','Autonomia natural','Conecta liberdade, natureza e movimento.'), color('Areia Viva','#C8A96A','Descoberta','Remete a jornada, território e expansão.'), color('Azul Horizonte','#256D85','Amplitude','Traz sensação de distância e possibilidade.')],
  hero: [color('Vermelho Vitória','#DC2626','Força e ação','Cria energia, urgência e performance.'), color('Azul Impacto','#1D4ED8','Confiança forte','Une performance e credibilidade.'), color('Amarelo Potência','#FACC15','Destaque','Ativa coragem e movimento.')],
  outlaw: [color('Vermelho Ruptura','#E11D48','Provocação','Marca atitude e quebra de padrão.'), color('Roxo Subversivo','#7E22CE','Mistério urbano','Cria presença intensa e diferente.'), color('Grafite Radical','#27272A','Força crua','Funciona para marcas pesadas e urbanas.')],
  magician: [color('Roxo Transformação','#8B5CF6','Magnetismo','Cria sensação de visão e mudança.'), color('Azul Elétrico','#2563EB','Tecnologia e encantamento','Une futuro e confiança.'), color('Dourado Ritual','#D6A11E','Valor simbólico','Traz brilho e sofisticação.')],
  everyman: [color('Azul Próximo','#3B82F6','Confiança comum','Acessível, simples e conhecido.'), color('Verde Cotidiano','#16A34A','Humanidade','Transmite equilíbrio e proximidade.'), color('Bege Neutro','#D6C7A1','Naturalidade','Torna a marca simples e acolhedora.')],
  lover: [color('Vinho Sensorial','#9F1239','Desejo e sofisticação','Cria calor, presença e refinamento.'), color('Rosa Nude','#E9A8B4','Delicadeza','Traz conexão e suavidade.'), color('Dourado Suave','#C6A15B','Elegância','Valoriza uma percepção premium.')],
  jester: [color('Amarelo Brincante','#FFD100','Alegria','Cria impacto divertido e leve.'), color('Laranja Vivo','#F97316','Energia','Traz espontaneidade e movimento.'), color('Rosa Pop','#EC4899','Expressão','Cria presença memorável e dinâmica.')],
  caregiver: [color('Verde Cuidado','#86C8A1','Acolhimento','Transmite apoio, saúde e segurança.'), color('Azul Calmo','#93C5FD','Confiança gentil','Cria serenidade e clareza.'), color('Rosa Afeto','#F4B6C2','Humanidade','Adiciona calor emocional.')],
  creator: [color('Roxo Autoral','#8B5CF6','Criação e autoria','Traduz expressão, imaginação e inovação.'), color('Magenta Vivo','#D946EF','Originalidade','Traz energia criativa e visual.'), color('Laranja Ideia','#F97316','Construção','Ativa movimento e experimentação.')],
  ruler: [color('Dourado Autoridade','#D6A11E','Prestígio','Comunica poder, valor e liderança.'), color('Azul Marinho','#1E3A8A','Controle','Cria confiança e estrutura.'), color('Preto Luxo','#111827','Sofisticação','Traz força premium e ordem.')]
};

function color(name, hex, meaning, reason) { return { name, hex, meaning, reason }; }

let defaultState = {
  step: 'intro',
  primaryArchetype: null,
  secondaryArchetype: null,
  selectedHeadingFont: null,
  selectedBodyFont: null,
  selectedPrimaryColor: null,
  selectedSecondaryColor: null,
  selectedAccentColor: null,
  selectedBackgroundColor: null,
  selectedTextColor: null,
  colors: { primary: '#2563EB', secondary: '#64748B', accent: '#F59E0B', background: '#F8FAFC', text: '#0F172A' },
  brandName: 'NOVA',
  tagline: 'Uma marca criada com direção, personalidade e presença.'
};
let state = loadState();

function loadState(){
  try { return { ...defaultState, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) }; }
  catch { return { ...defaultState }; }
}
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function reset(){ localStorage.removeItem(STORAGE_KEY); state = { ...defaultState, colors: {...defaultState.colors} }; render(); }

function setStep(step){ state.step = step; save(); render(); window.scrollTo({top:0, behavior:'smooth'}); }
function goBack(){
  const order = ['intro','primary','secondary','heading','body','primaryColor','linkedColors','preview'];
  const i = order.indexOf(state.step);
  if (i > 0) setStep(order[i-1]);
}

function render(){
  document.documentElement.style.setProperty('--brand-primary', state.colors.primary || '#2563EB');
  document.documentElement.style.setProperty('--brand-secondary', state.colors.secondary || '#64748B');
  document.documentElement.style.setProperty('--brand-accent', state.colors.accent || '#F59E0B');
  document.documentElement.style.setProperty('--brand-background', state.colors.background || '#F8FAFC');
  document.documentElement.style.setProperty('--brand-text', state.colors.text || '#0F172A');
  document.documentElement.style.setProperty('--brand-font-heading', `"${state.selectedHeadingFont || 'Playfair Display'}", serif`);
  document.documentElement.style.setProperty('--brand-font-body', `"${state.selectedBodyFont || 'Inter'}", sans-serif`);

  $('#backBtn').style.visibility = state.step === 'intro' ? 'hidden' : 'visible';
  const map = { intro: renderIntro, primary: () => renderArchetype('primary'), secondary: () => renderArchetype('secondary'), heading: renderHeadingFonts, body: renderBodyFonts, primaryColor: renderPrimaryColors, linkedColors: renderLinkedColors, preview: renderPreview };
  root.innerHTML = '';
  root.appendChild(map[state.step]());
  if (state.step === 'primary' || state.step === 'secondary') setupCarousel();
}

function renderIntro(){
  const s = el('section','intro-screen');
  s.innerHTML = `
    <div class="intro-content">
      <span class="kicker">Branding Kit App</span>
      <h1 class="intro-title">Brand Flow</h1>
      <p class="intro-lead">Crie um mini branding kit visual em poucos passos.</p>
      <p class="intro-copy">Escolha a personalidade da marca, combine fontes do Google Fonts e construa um sistema visual coerente em um fluxo de nodes.</p>
      <div class="intro-actions"><button class="primary-btn" type="button" id="startBtn" data-action="start" data-start>Começar</button></div>
    </div>`;
  s.querySelector('[data-start]').addEventListener('click', () => setStep('primary'));
  return s;
}

function renderArchetype(mode){
  const isSecondary = mode === 'secondary';
  const s = el('section','screen');
  const skip = isSecondary ? `<div class="step-actions"><button class="secondary-btn" data-skip>Pular arquétipo secundário</button></div>` : '';
  s.innerHTML = `
    <div class="step-head">
      <span class="kicker">${isSecondary ? 'Etapa opcional' : 'Primeira decisão'}</span>
      <h2 class="step-title">${isSecondary ? 'Escolha um arquétipo secundário' : 'Escolha o arquétipo da sua marca'}</h2>
      <p class="step-subtitle">${isSecondary ? 'O arquétipo secundário adiciona nuances. Apenas combinações coerentes ficam disponíveis.' : 'Cada arquétipo define uma direção visual, verbal e emocional para a identidade.'}</p>
      ${skip}
    </div>
    <div class="carousel-wrap">
      <button class="nav-round nav-prev" data-prev>‹</button>
      <div class="carousel" id="archCarousel"></div>
      <button class="nav-round nav-next" data-next>›</button>
    </div>`;

  const c = s.querySelector('#archCarousel');
  Object.entries(archetypes).forEach(([id,a]) => {
    const disabledReason = getDisabledReason(id, isSecondary);
    const card = el('article','arch-card');
    card.dataset.id = id;
    if (disabledReason) card.classList.add('is-disabled');
    card.innerHTML = `
      ${disabledReason ? `<span class="lock-badge">${disabledReason}</span>` : ''}
      <div>
        <div class="arch-icon">✦</div>
        <h3>${a.name}</h3>
        <p>${a.desc}</p>
        <div class="tags">${a.keys.map(k=>`<span class="tag">${k}</span>`).join('')}</div>
      </div>
      <button class="card-btn" type="button" ${disabledReason ? 'disabled' : ''}>Ler mais</button>`;
    if (!disabledReason) card.querySelector('button').addEventListener('click', () => openArchetypeModal(id, mode));
    c.appendChild(card);
  });
  s.querySelector('[data-prev]').addEventListener('click', () => c.scrollBy({left:-280, behavior:'smooth'}));
  s.querySelector('[data-next]').addEventListener('click', () => c.scrollBy({left:280, behavior:'smooth'}));
  const skipBtn = s.querySelector('[data-skip]');
  if (skipBtn) skipBtn.addEventListener('click', () => { state.secondaryArchetype = null; save(); setStep('heading'); });
  return s;
}

function getDisabledReason(id, isSecondary){
  if (!isSecondary) return '';
  if (id === state.primaryArchetype) return 'Principal';
  if (!(compatibility[state.primaryArchetype] || []).includes(id)) return 'Pouco compatível';
  return '';
}

function setupCarousel(){
  const c = $('#archCarousel');
  if (!c) return;
  const update = () => {
    const center = c.scrollLeft + c.clientWidth / 2;
    let closest = null, dist = Infinity;
    c.querySelectorAll('.arch-card').forEach(card => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const d = Math.abs(center - cardCenter);
      card.classList.remove('is-center');
      if (d < dist) { dist = d; closest = card; }
    });
    if (closest) closest.classList.add('is-center');
  };
  c.addEventListener('scroll', () => requestAnimationFrame(update));
  setTimeout(update, 80);
}

function openArchetypeModal(id, mode){
  const a = archetypes[id];
  modalContent.innerHTML = `
    <span class="kicker">Arquétipo de marca</span>
    <h2 id="modalTitle">${a.name}</h2>
    <p>${a.desc}</p>
    <div class="modal-grid">
      <div><h4>Comportamento</h4><p>Marcas desse arquétipo constroem percepção por meio de ${a.keys.join(', ')}. A experiência precisa parecer coerente do primeiro contato até o pós-venda.</p></div>
      <div><h4>Tom de voz</h4><p>${a.voice}. A comunicação deve manter consistência em textos curtos, vendas, suporte e conteúdo.</p></div>
      <div><h4>Direção visual</h4><p>${a.visual}. A identidade deve usar composição, ritmo e contraste para reforçar essa percepção.</p></div>
      <div><h4>Cores e fontes</h4><p>Cores recomendadas: ${a.colors.join(', ')}. Fontes sugeridas: ${a.fonts.join(', ')}.</p></div>
    </div>
    <h4>Quando usar</h4><p>Use quando essa personalidade representa o jeito que a marca quer ser percebida e ajuda o cliente a tomar decisão com mais clareza.</p>
    <h4>Quando evitar</h4><p>Evite quando o arquétipo cria uma promessa que a operação, o produto ou o atendimento não conseguem sustentar.</p>
    <div class="step-actions"><button class="primary-btn" id="useArch">Usar este arquétipo</button></div>`;
  openModal();
  $('#useArch').addEventListener('click', () => {
    if (mode === 'primary') {
      state.primaryArchetype = id;
      state.secondaryArchetype = null;
      state.selectedHeadingFont = null;
      state.selectedBodyFont = null;
      closeModal();
      setStep('secondary');
    } else {
      state.secondaryArchetype = id;
      closeModal();
      setStep('heading');
    }
  });
}

function getFontOptions(){
  const base = typography[state.primaryArchetype] || typography.sage;
  if (!state.secondaryArchetype) return base;
  const secondary = typography[state.secondaryArchetype] || [];
  return [base[0], base[1], secondary[0]].filter(Boolean);
}

function renderHeadingFonts(){
  const s = el('section','screen');
  const options = getFontOptions();
  s.innerHTML = `
    <div class="step-head">
      <span class="kicker">Tipografia</span>
      <h2 class="step-title">Escolha a fonte principal</h2>
      <p class="step-subtitle">As opções usam Google Fonts e são geradas a partir dos arquétipos escolhidos.</p>
    </div>
    <div class="choice-grid"></div>`;
  const grid = s.querySelector('.choice-grid');
  options.forEach((f) => {
    const card = el('button','choice-card');
    card.type = 'button';
    card.innerHTML = `<h3>${f.font}</h3><div class="font-sample" style="font-family:'${f.font}', sans-serif">Aa</div><p>${f.feeling}</p>`;
    card.addEventListener('click', () => { state.selectedHeadingFont = f.font; state.selectedBodyFont = null; save(); setStep('body'); });
    grid.appendChild(card);
  });
  return s;
}

function selectedHeadingObj(){ return getFontOptions().find(f => f.font === state.selectedHeadingFont) || getFontOptions()[0]; }
function renderBodyFonts(){
  const f = selectedHeadingObj();
  const s = el('section','screen');
  s.innerHTML = `
    <div class="step-head">
      <span class="kicker">Font pairing</span>
      <h2 class="step-title">Escolha a fonte secundária</h2>
      <p class="step-subtitle">Fonte principal selecionada: ${state.selectedHeadingFont}. Escolha uma fonte complementar com contraste e leitura.</p>
    </div>
    <div class="choice-grid"></div>`;
  const grid = s.querySelector('.choice-grid');
  f.pairings.forEach((p) => {
    const card = el('button','choice-card');
    card.type = 'button';
    card.innerHTML = `<h3>${p.font}</h3><div class="font-sample" style="font-family:'${p.font}', sans-serif">Aa</div><p>${p.feeling}</p>`;
    card.addEventListener('click', () => { state.selectedBodyFont = p.font; save(); setStep('primaryColor'); });
    grid.appendChild(card);
  });
  return s;
}

function renderPrimaryColors(){
  const s = el('section','screen');
  const colors = generatePrimaryColorOptions();
  s.innerHTML = `
    <div class="step-head">
      <span class="kicker">Cores</span>
      <h2 class="step-title">Escolha a cor principal</h2>
      <p class="step-subtitle">A cor principal nasce dos arquétipos e da combinação tipográfica selecionada.</p>
    </div>
    <div class="choice-grid"></div>`;
  const grid = s.querySelector('.choice-grid');
  colors.forEach((c) => grid.appendChild(colorOptionCard(c, () => {
    state.selectedPrimaryColor = c;
    state.colors.primary = c.hex;
    const linked = generateLinkedColorOptions(c.hex);
    state.selectedSecondaryColor = linked.secondary[0];
    state.selectedAccentColor = linked.accent[0];
    state.selectedBackgroundColor = linked.background[0];
    state.selectedTextColor = linked.text[0];
    state.colors.secondary = linked.secondary[0].hex;
    state.colors.accent = linked.accent[0].hex;
    state.colors.background = linked.background[0].hex;
    state.colors.text = getReadableTextColor(linked.background[0].hex);
    save(); setStep('linkedColors');
  })));
  return s;
}

function generatePrimaryColorOptions(){
  const base = primaryColors[state.primaryArchetype] || primaryColors.sage;
  if (!state.secondaryArchetype) return base;
  const sec = primaryColors[state.secondaryArchetype] || [];
  return [base[0], base[1], sec[0]].filter(Boolean);
}

function renderLinkedColors(){
  const linked = generateLinkedColorOptions(state.colors.primary);
  const groups = [
    ['secondary','Secundária', linked.secondary],
    ['accent','Destaque', linked.accent],
    ['background','Fundo', linked.background],
    ['text','Texto', linked.text]
  ];
  const s = el('section','screen');
  s.innerHTML = `
    <div class="step-head">
      <span class="kicker">Sistema de cores</span>
      <h2 class="step-title">Complete a paleta</h2>
      <p class="step-subtitle">As cores se abrem em paralelo, mas todas estão ligadas à cor principal para manter harmonia e contraste.</p>
      <div class="step-actions"><button class="primary-btn" data-finish>Ver preview final</button></div>
    </div>
    <div class="flow-section">
      <div class="flow-node"><strong>Cor principal</strong><span>${state.selectedPrimaryColor?.name || state.colors.primary} · ${state.colors.primary}</span></div>
    </div>
    <div class="color-groups"></div>`;
  const wrap = s.querySelector('.color-groups');
  groups.forEach(([role,title,arr]) => {
    const g = el('div','color-group');
    g.innerHTML = `<h3 class="color-group-title">${title}</h3>`;
    arr.forEach(c => {
      const btn = colorOptionCard(c, () => {
        state[`selected${capitalize(role)}Color`] = c;
        state.colors[role] = role === 'text' ? c.hex : c.hex;
        if (role === 'background') {
          const readable = getReadableTextColor(c.hex);
          state.colors.text = readable;
          state.selectedTextColor = color(readable === '#0F172A' ? 'Grafite legível' : 'Branco legível', readable, 'Contraste aprovado', 'Ajustado automaticamente para o fundo escolhido.');
        }
        save(); render();
      }, state.colors[role] === c.hex);
      if (role === 'text' && getContrastRatio(c.hex, state.colors.background) < 4.5) {
        btn.disabled = true;
        btn.querySelector('p').textContent = 'Baixo contraste com o fundo escolhido.';
      }
      g.appendChild(btn);
    });
    wrap.appendChild(g);
  });
  s.querySelector('[data-finish]').addEventListener('click', () => setStep('preview'));
  return s;
}

function capitalize(str){ return str.charAt(0).toUpperCase() + str.slice(1); }
function generateLinkedColorOptions(primary){
  const textDark = color('Grafite legível','#0F172A','Leitura em fundos claros','Alto contraste e aparência profissional.');
  const textLight = color('Branco legível','#F8FAFC','Leitura em fundos escuros','Alto contraste em superfícies profundas.');
  const p = primary.toUpperCase();
  const defaultSet = {
    secondary: [color('Cinza Azulado','#64748B','Apoio visual','Complementa sem competir.'), color('Azul Noite','#1E293B','Profundidade','Reforça estrutura e contraste.'), color('Cinza Claro','#CBD5E1','Leveza','Cria respiro e equilíbrio.')],
    accent: [color('Âmbar CTA','#F59E0B','Ação','Contraste claro para botões e badges.'), color('Violeta Criativo','#8B5CF6','Expressão','Adiciona personalidade sem quebrar harmonia.'), color('Ciano Vivo','#22D3EE','Energia digital','Funciona bem em interfaces modernas.')],
    background: [color('Branco Frio','#F8FAFC','Base clara','Garante leitura e aparência limpa.'), color('Noite Profunda','#020617','Base escura','Cria contraste premium.'), color('Grafite Suave','#202020','Base neutra','Mantém sobriedade e densidade.')],
    text: [textDark, textLight, color('Cinza Chumbo','#1F2937','Leitura confortável','Bom contraste em fundos claros.')]
  };
  if (p.includes('FFD') || p.includes('FACC') || p.includes('F973')) {
    defaultSet.secondary = [color('Grafite Apoio','#333533','Equilíbrio','Segura a força do amarelo ou laranja.'), color('Preto Macio','#202020','Contraste','Cria presença forte.'), color('Creme Claro','#FFF7D1','Suavidade','Amplia a luminosidade.')];
    defaultSet.accent = [color('Azul Contraste','#2563EB','Contraste complementar','Destaca ações.'), color('Verde Fresco','#16A34A','Naturalidade','Equilibra energia quente.'), color('Rosa Vivo','#EC4899','Expressão','Traz uma leitura mais criativa.')];
  }
  if (p.includes('8B5') || p.includes('D946') || p.includes('7E22')) {
    defaultSet.secondary = [color('Roxo Profundo','#312E81','Profundidade','Mantém a família visual.'), color('Lavanda Cinza','#A78BFA','Suavidade','Complementa com leveza.'), color('Grafite Criativo','#333533','Base neutra','Valoriza o acento criativo.')];
    defaultSet.accent = [color('Ciano Luminoso','#22D3EE','Contraste frio','Cria efeito digital.'), color('Laranja Ideia','#F97316','Energia quente','Aumenta impacto.'), color('Amarelo Luz','#FFEE32','Ponto focal','Cria destaque imediato.')];
  }
  if (p.includes('DC26') || p.includes('E11D') || p.includes('9F12')) {
    defaultSet.secondary = [color('Vinho Escuro','#4C0519','Densidade','Sustenta a intensidade.'), color('Grafite Urbano','#27272A','Equilíbrio','Torna a paleta mais sólida.'), color('Rosa Claro','#FDA4AF','Variação','Cria contraste suave.')];
    defaultSet.accent = [color('Dourado Vivo','#FFD100','Atenção','Funciona para CTA.'), color('Ciano Corte','#06B6D4','Contraste frio','Cria quebra visual.'), color('Branco Neve','#F8FAFC','Alívio','Gera áreas de respiro.')];
  }
  return defaultSet;
}

function colorOptionCard(c, onClick, selected=false){
  const btn = el('button',`color-card ${selected ? 'is-selected' : ''}`);
  btn.type = 'button';
  btn.innerHTML = `<h3>${c.name}</h3><div class="color-swatch" style="background:${c.hex}"></div><span class="hex">${c.hex}</span><p>${c.meaning}. ${c.reason}</p>`;
  btn.addEventListener('click', onClick);
  return btn;
}

function renderPreview(){
  const s = el('section','screen');
  const primary = archetypes[state.primaryArchetype]?.name || 'Não definido';
  const secondary = state.secondaryArchetype ? archetypes[state.secondaryArchetype].name : 'Não definido';
  s.innerHTML = `
    <div class="step-head">
      <span class="kicker">Brand kit gerado</span>
      <h2 class="step-title">Preview final</h2>
      <p class="step-subtitle">Edite nome e tagline. A identidade do app continua fixa. Apenas o preview usa as escolhas da marca.</p>
    </div>
    <div class="preview-shell">
      <div class="preview-panel">
        <div class="preview-hero">
          <input class="brand-name-input" id="brandNameInput" value="${escapeHtml(state.brandName)}" />
          <input class="tagline-input" id="taglineInput" value="${escapeHtml(state.tagline)}" />
          <button class="preview-cta">Conhecer marca</button>
        </div>
        <div class="social-card">
          <h3>${escapeHtml(state.brandName)}</h3>
          <p>${escapeHtml(state.tagline)}</p>
          <span>${primary}${secondary !== 'Não definido' ? ' + ' + secondary : ''}</span>
        </div>
      </div>
      <aside class="final-card">
        <h3>Resumo do kit</h3>
        <div class="summary-list">
          ${summaryItem('Arquétipo principal', primary)}
          ${summaryItem('Arquétipo secundário', secondary)}
          ${summaryItem('Fonte título', state.selectedHeadingFont || '-')}
          ${summaryItem('Fonte texto', state.selectedBodyFont || '-')}
          ${summaryItem('Cor principal', state.colors.primary)}
          ${summaryItem('Secundária', state.colors.secondary)}
          ${summaryItem('Destaque', state.colors.accent)}
          ${summaryItem('Fundo', state.colors.background)}
          ${summaryItem('Texto', state.colors.text)}
        </div>
        <div class="swatch-row">
          ${Object.values(state.colors).map(h=>`<span class="mini-swatch" style="background:${h}"></span>`).join('')}
        </div>
        <div class="step-actions"><button class="primary-btn" id="copyJsonBtn">Copiar JSON</button></div>
      </aside>
    </div>`;
  s.querySelector('#brandNameInput').addEventListener('input', e => { state.brandName = e.target.value; save(); });
  s.querySelector('#taglineInput').addEventListener('input', e => { state.tagline = e.target.value; save(); });
  s.querySelector('#copyJsonBtn').addEventListener('click', exportJson);
  return s;
}
function summaryItem(a,b){ return `<div class="summary-item"><span>${a}</span><strong>${b}</strong></div>`; }
function escapeHtml(str){ return String(str).replace(/[&<>"]/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }

function openModal(){ modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); }
function closeModal(){ modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); modalContent.innerHTML = ''; }
function el(tag, cls){ const n = document.createElement(tag); if (cls) n.className = cls; return n; }

function hexToRgb(hex){ const n = hex.replace('#',''); const bigint = parseInt(n, 16); return [(bigint>>16)&255, (bigint>>8)&255, bigint&255]; }
function luminance(hex){
  const [r,g,b] = hexToRgb(hex).map(v => { v/=255; return v <= .03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4); });
  return .2126*r + .7152*g + .0722*b;
}
function getContrastRatio(a,b){ const l1 = luminance(a), l2 = luminance(b); return (Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05); }
function getReadableTextColor(bg){ return getContrastRatio('#0F172A', bg) >= getContrastRatio('#F8FAFC', bg) ? '#0F172A' : '#F8FAFC'; }

function exportJson(){
  const data = JSON.stringify(state, null, 2);
  navigator.clipboard?.writeText(data).catch(()=>{});
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'brand-flow-kit.json';
  a.click();
  URL.revokeObjectURL(url);
}


function handleGlobalClick(event) {
  const actionEl = event.target.closest('[data-action]');
  if (!actionEl) return;

  const action = actionEl.dataset.action;

  if (action === 'start') {
    event.preventDefault();
    event.stopPropagation();
    setStep('primary');
    return;
  }
}

document.addEventListener('click', handleGlobalClick, true);

$('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
$('#resetBtn').addEventListener('click', reset);
$('#backBtn').addEventListener('click', goBack);
$('#exportBtn').addEventListener('click', exportJson);

window.BrandFlowStart = () => setStep('primary');
closeModal();
render();
