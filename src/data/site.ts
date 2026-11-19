export const site = {
  name: 'Soraia Medeiros',
  profession: 'Psicóloga',
  crp: 'CRP 06/216738',
  email: 'soraiamedeiros.psic@icloud.com',
  phoneDisplay: '+55 17 98167-1880',
  whatsapp: 'https://wa.me/5517981671880',
  instagram: 'https://www.instagram.com/soraiamedeiros.psic/',
  profilePhoto: null as string | null,
};

export const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre/' },
  { label: 'Psicoterapia', href: '/psicoterapia/' },
  { label: 'Online', href: '/atendimento-online/' },
  { label: 'Presencial', href: '/atendimento-presencial/' },
  { label: 'Contato', href: '/contato/' },
];

export const locations = [
  {
    name: 'Avenida Paulista',
    address: 'Avenida Paulista, 1159, São Paulo, SP',
    note: 'Próximo à estação Trianon-Masp.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Avenida%20Paulista%2C%201159%2C%20S%C3%A3o%20Paulo%2C%20SP',
  },
  {
    name: 'Alphaville',
    address: 'Avenida Trindade, 254, Bethaville I, Barueri, SP',
    note: 'Atendimento presencial em Barueri.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Avenida%20Trindade%2C%20254%2C%20Bethaville%20I%2C%20Barueri%2C%20SP',
  },
];

export const themes = [
  {
    title: 'Ansiedade, estresse e esgotamento emocional',
    description: 'Sobrecarga, excesso de responsabilidades, dificuldade de estabelecer limites e questões ligadas ao trabalho.',
  },
  {
    title: 'Transição de carreira e mudanças de vida',
    description: 'Recomeços, escolhas profissionais, inseguranças e novos ciclos pessoais.',
  },
  {
    title: 'Relacionamentos familiares e afetivos',
    description: 'Vínculos, conflitos, maternidade, limites e relações de dependência emocional.',
  },
  {
    title: 'Menopausa e maturidade feminina',
    description: 'Transformações emocionais, identidade e autoestima ao longo dessa fase.',
  },
  {
    title: 'Envelhecimento e longevidade emocional',
    description: 'Autonomia, solidão, novos projetos e maneiras de viver essa etapa da vida.',
  },
  {
    title: 'Autoconhecimento e autoestima',
    description: 'Espaço para compreender a própria história, as emoções e as escolhas.',
  },
];
