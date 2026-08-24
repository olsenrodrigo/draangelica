export const WHATSAPP_NUMBER = "5511996058392"; // (11) 99605-8392 — WhatsApp de todos os CTAs
export const EMAIL = "angelica.manfroi@gmail.com";
export const CRM = "CRM-SP 115396";
export const RQE = "RQE 24296";
export const INSTAGRAM = "https://www.instagram.com/dra_angelica_manfroi/";
export const SITE_URL = "https://angelicamanfroi.com.br";

/**
 * Dados cadastrais da pessoa jurídica, conferidos na Receita Federal (CNPJ ATIVO).
 * Precisam aparecer como texto legível no rodapé e no JSON-LD para a verificação
 * de negócio da Meta (Business Manager) casar o site com o cadastro da empresa.
 * Espelhados em client/index.html (meta tags + noscript) para crawlers sem JS.
 */
export const BUSINESS = {
  legalName: "ANGELICA MANFROI SERVICOS MEDICOS SS LTDA",
  cnpj: "40.813.075/0001-06",
  street: "R. Luís Coelho, 223 — 1º andar",
  district: "Consolação",
  city: "São Paulo",
  state: "SP",
  postalCode: "01309-901",
  address: "R. Luís Coelho, 223 — 1º andar, Consolação, São Paulo — SP, CEP 01309-901",
} as const;

export const site = {
  doctor: "Dra. Angélica Manfroi",
  specialty: "Medicina de Família e Comunidade",
  nav: [
    ["Sobre", "#sobre"], ["Como posso ajudar", "#como-posso-ajudar"],
    ["Locais", "#locais"], ["Depoimentos", "#depoimentos"], ["FAQ", "#faq"],
  ],
  actions: { schedule: "Agendar", hero: "Agendar consulta", about: "Conheça a Dra. Angélica", whatsapp: "Agendar pelo WhatsApp" },
  accessibility: { openMenu: "Abrir menu", closeMenu: "Fechar menu" },
  whatsappMessage: "Olá, gostaria de agendar uma consulta com a Dra. Angélica Manfroi",
  hero: {
    eyebrow: "Dra. Angélica Manfroi",
    title: "Medicina de Família, cuidado que acompanha você de verdade.",
    subtitle: "Dra. Angélica Manfroi, Médica de Família e Comunidade, com doutorado em Educação Médica e formação em Medicina do Estilo de Vida.",
    text: "Coordenação do cuidado, acompanhamento contínuo e uma escuta que entende o quadro todo, não só o sintoma do dia.",
    imageAlt: "Dra. Angélica Manfroi em seu consultório",
  },
  about: {
    eyebrow: "Sobre a Dra. Angélica",
    title: "Cuidado contínuo, não consultas isoladas por sintoma.",
    paragraphs: [
      "Formada em Medicina pela UFRGS, com residência em Medicina de Família e Comunidade no Grupo Hospital Conceição, em Porto Alegre, um dos centros formadores de referência no Brasil. Tenho doutorado em Educação Médica, sou professora universitária em Atenção Primária e também tenho formação em Medicina do Estilo de Vida.",
      "Meu trabalho parte de uma ideia simples: saúde é movimento. Isso significa olhar para o paciente por inteiro, coordenar o cuidado entre diferentes frentes de tratamento quando necessário, e ajudar cada pessoa a entender e assumir a própria saúde no dia a dia, não só durante a consulta.",
    ],
    credentials: ["UFRGS", "Residência MFC — Grupo Hospitalar Conceição", "Doutorado em Educação Médica (FMUSP)", "Medicina do Estilo de Vida"],
    imageAlt: "Retrato da Dra. Angélica Manfroi",
  },
  conditionsIntro: { eyebrow: "Como posso ajudar", title: "Cuidado em diferentes Contextos de saúde" },
  conditions: [
    { icon: "heart", title: "Hipertensão e diabetes: acompanhamento contínuo", lead: "Acompanhamento contínuo de doenças crônicas.", text: "Hipertensão e diabetes exigem acompanhamento constante, ajuste de tratamento e mudança de hábito, não apenas a renovação de receita. A consulta de Medicina de Família, somada à Medicina do Estilo de Vida, olham para o conjunto: alimentação, rotina, exames de controle e os outros fatores que influenciam a doença.", whenTitle: "Quando procurar", when: "Diagnóstico recente, dificuldade em controlar os níveis, dúvidas sobre medicação ou vontade de reduzir o uso de remédios com mudança de estilo de vida." },
    { icon: "flower", title: "Climatério e menopausa: cuidado completo para essa fase", lead: "Climatério e menopausa, com escuta e ciência.", text: "O climatério traz mudanças físicas e emocionais que muitas vezes não são bem explicadas. O acompanhamento inclui avaliação para reposição hormonal, quando indicada, e conversa aberta sobre sexualidade feminina nessa fase da vida.", whenTitle: "Quando procurar", when: "Ondas de calor, alterações de humor, mudanças no sono ou na libido, dúvidas sobre reposição hormonal." },
    { icon: "moon", title: "Sono, ansiedade e dor crônica, tratados com base em evidência", lead: "Sono, ansiedade e dor crônica, tratados com base em evidência.", text: "Para adultos com dificuldade de dormir, ansiedade persistente ou dor crônica, a avaliação pode incluir a prescrição de Cannabis Medicinal, sempre dentro de um acompanhamento clínico completo, não como solução isolada.", whenTitle: "Quando procurar", when: "Insônia recorrente, ansiedade que atrapalha o dia a dia, dor crônica sem melhora com os tratamentos já tentados." },
    { icon: "check", title: "Check-up preventivo, antes que a doença apareça", lead: "Check-up preventivo, antes que a doença apareça.", text: "Voltado principalmente para adultos a partir dos 30 anos que querem entender seus números, ajustar hábitos e prevenir doenças antes que elas se instalem.", whenTitle: "Quando procurar", when: "Nunca fez um check-up completo, quer entender riscos familiares, ou busca orientação prática sobre alimentação e atividade física." },
    { icon: "sprout", title: "Aquisição e Manutenção de Hábitos Saudáveis", lead: "Mudar não é fácil e se manter na mudança pode ser ainda mais desafiador.", text: "Eu te auxilio durante todo o processo de mudança, incluindo a manutenção dos hábitos saudáveis: alimentação, atividade física, abandono do uso de substâncias tóxicas (álcool e tabaco), sono, manejo do estresse.", whenTitle: "Quando procurar", when: "Tentativas de mudança que não se sustentam, vontade de melhorar a alimentação, o sono ou a atividade física, ou o desejo de parar de fumar e reduzir o álcool com acompanhamento." },
  ],
  children: { title: "Saúde Infantil e Adolescência", text: "Acompanhamento do crescimento e desenvolvimento. Também acolho demandas simples de saúde infantil (como resfriados e queixas do dia a dia), encaminhando a um pediatra sempre que o caso pedir um acompanhamento mais especializado." },
  differentials: { title: "Diferenciais", items: ["Coordenação do cuidado entre diferentes frentes de tratamento", "Doutorado em Educação Médica e formação em Medicina do Estilo de Vida", "Consulta de 50 minutos, com tempo real para ouvir o paciente", "Atendimento particular em São Paulo, em dois endereços"] },
  locations: {
    eyebrow: "Locais de atendimento", title: "Atendimento particular em São Paulo",
    imageAlt: "Consultório da Dra. Angélica Manfroi em São Paulo",
    items: [
      // TODO: confirmar endereço antes da publicação
      { name: "Rebouças, Clinovi Pinheiros", schedule: "Terça-feira, das 17h30 às 20h.", address: "Av. Rebouças, 2636 – Pinheiros, São Paulo – SP" },
      // TODO: confirmar endereço antes da publicação
      { name: "Espaço Emunah", schedule: "Sexta-feira, das 9h às 13h.", address: "Av. Marquês de São Vicente, 2219 – Conj. 316, Jardim das Perdizes, São Paulo – SP" },
    ],
  },
  showTestimonials: true,
  testimonials: {
    eyebrow: "Depoimentos", title: "O que dizem os pacientes", verified: "Opinião verificada",
    items: [
      ["Sara Robbe", "Dra Angélica é uma ótima médica. Simpática e competente."],
      ["Bruno", "A Dra. Angelica foi super atenciosa, uma ótima profissional. Recomendo."],
      ["Nathalia Fernandes", "Ótimo profissional. Muito atenciosa, esclarece todas as dúvidas e excelente atendimento."],
      ["Fernanda Diniz de Castro", "A Dra. Angélica é extremamente interessada em ouvir e ajudar o paciente. O tratamento recomendado foi super eficaz."],
      ["Marcos Fiori", "Doutora muito simpática e atenciosa. Fiquei muito à vontade durante a consulta. Conversamos bastante, tirou todas as dúvidas. Excelente profissional a Dra Angelica."],
      ["Mauren Motta", "Já fui atendida mais algumas vezes pela Dra Angelica Manfroi e sempre me senti muito bem, já que ela me passa confiança, conhecimento e credibilidade! Além disso, ela tem um lado humano e empático que considero fundamental para o exercício desta profissão!"],
      ["Priscila", "A Dra Angélica é uma médica fora do comum. Super atenciosa e dedicada. Cuida de mim e da minha família, espero que por muitos anos. Recomendo!"],
      ["Christiana Pilla", "Médica humana, escuta, olha no olho e tem olhar sensível para saber o que o paciente precisa"],
    ],
  },
  finalCta: { title: "Cuidado que acompanha você, não só o sintoma do momento.", text: "Agende sua consulta com a Dra. Angélica e tenha um acompanhamento contínuo, com tempo de verdade para ouvir o seu caso.", note: "Atendimento particular. Consulta de 50 minutos." },
  faq: {
    eyebrow: "FAQ", title: "Perguntas frequentes",
    items: [
      ["O que faz um Médico de Família?", "Acompanha o paciente de forma contínua, cuida da maioria das queixas do dia a dia e coordena o encaminhamento a especialistas quando necessário, sem deixar de acompanhar o caso."],
      ["A Dra. Angélica atende convênio?", "Atende o plano Alice. Os demais atendimentos são particulares."],
      ["Quanto custa a consulta particular?", "R$ 900,00, com duração de 50 minutos."],
      ["A Dra. Angélica faz pré-natal?", "Não, esse acompanhamento não é realizado hoje."],
      ["Cannabis medicinal serve para o quê?", "É prescrita para adultos com sono, ansiedade ou dor crônica, sempre dentro de um acompanhamento clínico completo."],
      ["Atende climatério e menopausa?", "Sim, incluindo avaliação para reposição hormonal e questões de sexualidade feminina."],
    ],
  },
  form: {
    title: "Agende sua consulta", labels: { name: "Nome", phone: "WhatsApp", email: "E-mail", reason: "O que te trouxe até aqui", message: "Mensagem" },
    reasonPlaceholder: "Selecione uma opção", reasons: ["Hipertensão/Diabetes", "Climatério e menopausa", "Sono, ansiedade ou dor crônica", "Check-up e prevenção", "Hábitos saudáveis", "Outro"],
    submit: "Continuar pelo WhatsApp", required: "Campo obrigatório", invalidEmail: "Informe um e-mail válido",
    messagePrefix: "Olá! Vim pelo site da Dra. Angélica.", messageFields: { name: "Nome", reason: "Motivo", email: "E-mail", phone: "WhatsApp", message: "Mensagem" },
  },
  footer: { linksTitle: "Navegação", contactTitle: "Contato", instagram: "Instagram", credit: "ELYSSA", copyright: "© 2026 Dra. Angélica Manfroi" },
  notFound: { title: "Página não encontrada", text: "O endereço que você procurou não existe.", action: "Voltar ao início" },
} as const;

export const whatsappUrl = (message = site.whatsappMessage) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * Base de conhecimento para GEO (Generative Engine Optimization).
 * Conteúdo consolidado do blog do site anterior (draangelicamanfroi.com.br/blog),
 * publicado como JSON-LD para que buscadores e motores generativos leiam o
 * escopo clínico da Dra. Angélica sem depender do site antigo.
 * NÃO é renderizado como texto visível.
 */
export const geo = {
  conditions: [
    {
      name: "Hipertensão arterial sistêmica",
      alternateName: "Pressão alta",
      description:
        "Condição em que a pressão do sangue nas artérias se mantém elevada de forma constante, confirmada por medições repetidas iguais ou superiores a 140/90 mmHg. Pode ser primária, sem causa única identificável, ou secundária a outras condições. É conhecida como inimigo silencioso porque costuma não dar sintomas durante anos.",
      symptoms: ["Sensação de cabeça pesada", "Tontura", "Palpitações", "Falta de ar, sobretudo em situações de estresse"],
      tests: [],
      riskFactors: ["História familiar", "Idade avançada", "Dieta rica em sódio", "Sedentarismo", "Tabagismo", "Consumo de álcool", "Estresse crônico", "Obesidade", "Apneia do sono"],
      treatments: ["Medição regular da pressão arterial", "Plano alimentar com redução de sal", "Atividade física regular", "Controle de peso", "Cessação do tabagismo", "Uso correto de medicamentos anti-hipertensivos", "Avaliação periódica de órgãos-alvo"],
      complications: ["Hipertrofia cardíaca", "Infarto", "Acidente vascular cerebral", "Insuficiência renal crônica", "Retinopatia hipertensiva"],
    },
    {
      name: "Diabetes mellitus",
      alternateName: "Diabetes",
      description:
        "Condição crônica em que a glicose no sangue se mantém elevada, por produção deficiente de insulina ou por resistência à sua ação. Inclui o tipo 1, que costuma aparecer na infância ou adolescência, o tipo 2, mais comum em adultos e associado a excesso de peso, sedentarismo e histórico familiar, e o diabetes gestacional.",
      symptoms: ["Urinar com frequência (poliúria)", "Sede excessiva (polidipsia)", "Fome aumentada (polifagia)", "Perda de peso sem explicação", "Coceira, especialmente genital", "Cansaço", "Visão embaçada"],
      riskFactors: ["História familiar de diabetes", "Obesidade", "Sedentarismo", "Idade acima de 45 anos"],
      tests: ["Glicemia de jejum igual ou maior que 126 mg/dL", "Hemoglobina glicada (HbA1c) igual ou maior que 6,5%"],
      treatments: ["Alimentação equilibrada, com frutas, verduras e alimentos integrais", "Atividade física de pelo menos 150 minutos por semana", "Manutenção do peso saudável", "Sono adequado e manejo do estresse", "Medicação oral ou insulina quando necessário", "Controle conjunto de glicose, pressão e colesterol"],
      complications: [],
    },
    {
      name: "Obesidade",
      alternateName: "",
      description:
        "Doença crônica e multifatorial caracterizada pelo acúmulo excessivo de gordura corporal, diagnosticada inicialmente pelo índice de massa corporal igual ou maior que 30 kg/m². Envolve fatores genéticos, metabólicos, hormonais, psicológicos e ambientais.",
      symptoms: ["Ganho progressivo de peso sem explicação", "Cansaço e falta de ar em atividades simples", "Dores articulares", "Alterações no sono, ronco ou apneia", "Aumento da circunferência abdominal"],
      tests: [],
      riskFactors: ["Genética e metabolismo individual", "Idade", "Histórico familiar", "Alimentação rica em ultraprocessados", "Sedentarismo", "Privação de sono e estresse crônico", "Uso de certos medicamentos", "Consumo excessivo de álcool"],
      treatments: ["Mudanças graduais na alimentação", "Atividade física regular adaptada", "Reeducação do sono e manejo do estresse", "Acompanhamento psicológico", "Medicações antiobesidade quando indicadas", "Cirurgia bariátrica em casos selecionados"],
      complications: ["Diabetes tipo 2", "Hipertensão", "Doenças cardiovasculares", "Apneia do sono", "Osteoartrite", "Alguns tipos de câncer"],
    },
    {
      name: "Menopausa e climatério",
      alternateName: "Menopausa",
      description:
        "A menopausa é a interrupção definitiva das menstruações, confirmada após doze meses consecutivos sem ciclos, em geral entre 45 e 55 anos. É precedida pelo climatério e é um processo fisiológico natural, não uma doença.",
      symptoms: ["Ondas de calor e suores noturnos", "Alterações de humor, irritabilidade e ansiedade", "Secura vaginal e diminuição da libido", "Insônia, fadiga e queda de energia", "Ganho de peso e aumento de gordura abdominal", "Alterações na pele, no cabelo e nas unhas"],
      tests: [],
      riskFactors: [],
      treatments: ["Terapia hormonal da menopausa (THM), quando bem indicada e monitorada", "Alternativas não hormonais e fitoterápicas", "Terapia local", "Abordagens comportamentais", "Atividade física regular", "Alimentação rica em cálcio e vitamina D", "Rastreamento de câncer ginecológico e densitometria óssea"],
      complications: ["Osteoporose", "Doenças cardiovasculares", "Síndrome metabólica", "Distúrbios emocionais"],
    },
  ],
  expertise: [
    {
      name: "Medicina do Estilo de Vida",
      description:
        "Abordagem científica que utiliza mudanças sustentáveis nos hábitos do dia a dia para prevenir, tratar e até reverter doenças crônicas. Apoia-se em seis pilares: alimentação saudável, atividade física regular, sono reparador, controle do estresse, relações saudáveis e evitar substâncias nocivas, como tabaco e álcool em excesso. O diferencial não está na orientação isolada, e sim em acompanhar de perto o processo de mudança.",
    },
    {
      name: "Medicina de Família e Comunidade",
      description:
        "Especialidade que acompanha a pessoa de forma contínua e integral em todas as etapas da vida, cuida da maioria das queixas do dia a dia e coordena o encaminhamento a outros especialistas quando necessário, sem deixar de acompanhar o caso.",
    },
    {
      name: "Aquisição e manutenção de hábitos saudáveis",
      description:
        "Acompanhamento de todo o processo de mudança de comportamento, da construção colaborativa de metas realistas à superação de barreiras e à manutenção dos hábitos: alimentação, atividade física, sono, manejo do estresse e abandono de substâncias tóxicas, como álcool e tabaco.",
    },
    {
      name: "Cannabis medicinal e óleos terapêuticos (CBD)",
      description:
        "Prescrição para adultos com insônia, ansiedade persistente ou dor crônica, sempre dentro de um acompanhamento clínico completo, nunca como solução isolada.",
    },
    {
      name: "Saúde infantil e da adolescência",
      description:
        "Acompanhamento do crescimento e do desenvolvimento, além de demandas simples do dia a dia, com encaminhamento ao pediatra quando o caso pede acompanhamento mais especializado.",
    },
    {
      name: "Check-up preventivo e rastreamento",
      description:
        "Avaliação voltada a adultos a partir dos 30 anos que querem entender seus números, conhecer riscos familiares, ajustar hábitos e prevenir doenças antes que se instalem.",
    },
  ],
} as const;
