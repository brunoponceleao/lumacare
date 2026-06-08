export const site = {
  name: "LumaCare",
  tagline: "AI Front Desk for Aesthetic Clinics",
  cta: "Book a Demo",
  demoHref: "mailto:hello@lumacare.clinic?subject=Demo%20request%20-%20LumaCare",
  contactEmail: "hello@lumacare.clinic",
  domain: "lumacare.clinic",
  websiteHref: "https://lumacare.clinic",
};

export type Locale = "en" | "pt";

export const languageLinks: Record<Locale, { label: string; href: string }> = {
  en: { label: "EN", href: "/" },
  pt: { label: "PT", href: "/pt" },
};

export type LandingContent = {
  metadata: {
    title: string;
    description: string;
    canonical: string;
  };
  header: {
    homeAriaLabel: string;
    logoAlt: string;
    navItems: Array<{ label: string; href: string }>;
    primaryCta: { label: string; href: string };
    languageSwitcherLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: Array<{ metric: string; label: string }>;
    imageAlt: string;
    inquiryEyebrow: string;
    inquiryTitle: string;
    inquiryBadges: string[];
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    features: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; description: string }>;
  };
  demo: {
    eyebrow: string;
    title: string;
    description: string;
    productName: string;
    productStatus: string;
    stages: Array<{ label: string; step: number }>;
    incomingEyebrow: string;
    whatsapp: {
      label: string;
      time: string;
      status: string;
    };
    monitoredSources: string[];
    monitoredLabel: string;
    qualificationEyebrow: string;
    patientDetails: Array<{ label: string; value: string; step: number }>;
    conversationEyebrow: string;
    conversationTitle: string;
    respondingLabel: string;
    messages: Array<{
      sender: "patient" | "lumacare";
      label: string;
      text: string;
      step: number;
    }>;
    calendarEyebrow: string;
    calendarTitle: string;
    calendarSlots: Array<{
      day: string;
      time: string;
      status: string;
      isBooked?: boolean;
    }>;
    summaryEyebrow: string;
    summaryItems: Array<{ label: string; value: string; step: number }>;
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    description: string;
    beforeTitle: string;
    beforeItems: string[];
    afterTitle: string;
    afterItems: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  footer: {
    homeAriaLabel: string;
    logoAlt: string;
    rights: string;
  };
};

const englishDemoHref = site.demoHref;
const portugueseDemoHref =
  "mailto:hello@lumacare.clinic?subject=Pedido%20de%20demo%20-%20LumaCare";

export const landingContent: Record<Locale, LandingContent> = {
  en: {
    metadata: {
      title: "LumaCare | AI Front Desk for Aesthetic Clinics",
      description:
        "LumaCare helps aesthetic clinics respond instantly to patient inquiries, qualify leads, and convert more inquiries into booked appointments.",
      canonical: "/",
    },
    header: {
      homeAriaLabel: "LumaCare home",
      logoAlt: "LumaCare - AI Front Desk for Aesthetic Clinics",
      navItems: [
        { label: "Problem", href: "#problem" },
        { label: "Solution", href: "#solution" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Demo", href: "#demo" },
        { label: "FAQ", href: "#faq" },
      ],
      primaryCta: { label: "Book a Demo", href: englishDemoHref },
      languageSwitcherLabel: "Choose language",
    },
    hero: {
      badge: "Built for modern aesthetic clinics",
      title: "Never lose a clinic booking again.",
      description:
        "LumaCare is your AI Front Desk for aesthetic clinics. Every inquiry gets an instant response, even when your team is busy. LumaCare helps aesthetic clinics turn more inquiries into booked consultations.",
      primaryCta: { label: "Book a Demo", href: englishDemoHref },
      secondaryCta: { label: "See how it works", href: "#how-it-works" },
      stats: [
        { metric: "Instant", label: "first response" },
        { metric: "Qualified", label: "lead handoff" },
        { metric: "Always-on", label: "patient experience" },
      ],
      imageAlt:
        "Premium aesthetic clinic reception with warm natural light and an elegant front desk",
      inquiryEyebrow: "NEW INQUIRY",
      inquiryTitle: "Botox consultation",
      inquiryBadges: ["Qualified", "Ready to book"],
    },
    problem: {
      eyebrow: "The problem",
      title: "Your clinic is losing bookings every day without realizing it.",
      description:
        "Aesthetic patients make decisions quickly. When a lead waits, gets missed, or receives a slow reply, the booking often moves somewhere else.",
      items: [
        {
          title: "Slow response times",
          description:
            "A patient who waits for a reply is already comparing your clinic with another option.",
        },
        {
          title: "Missed inquiries",
          description:
            "Calls, forms, DMs, and website leads can slip through when the front desk is busy.",
        },
        {
          title: "Lost bookings",
          description:
            "Every unanswered question can become a consultation that never reaches the calendar.",
        },
        {
          title: "Staff overload",
          description:
            "Your team is expected to welcome patients, answer questions, follow up, and sell.",
        },
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "Meet your AI Front Desk",
      description:
        "LumaCare responds instantly to every inquiry and helps aesthetic clinics convert more leads into booked appointments.",
      features: [
        {
          title: "Every lead gets answered",
          description:
            "LumaCare responds instantly when a new inquiry arrives, even when your team is with patients.",
        },
        {
          title: "The right questions get asked",
          description:
            "It helps understand treatment interest, timeline, and readiness before the lead reaches your staff.",
        },
        {
          title: "More leads move to appointments",
          description:
            "Instead of leaving leads in an inbox, LumaCare keeps the conversation moving toward a booked visit.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "A simple path from inquiry to appointment.",
      steps: [
        {
          title: "Lead contacts clinic",
          description:
            "A prospective patient reaches out through your website, ads, social channels, or forms.",
        },
        {
          title: "AI responds instantly",
          description:
            "LumaCare replies right away, answers common questions, and captures the details your team needs.",
        },
        {
          title: "Appointment gets booked",
          description:
            "The lead is guided toward the next available consultation instead of going cold.",
        },
      ],
    },
    demo: {
      eyebrow: "Live booking experience",
      title: "See LumaCare in motion.",
      description:
        "Watch a new patient inquiry get answered, qualified, matched with calendar availability, and turned into a booked consultation.",
      productName: "LumaCare AI Front Desk",
      productStatus: "WhatsApp inquiry synced with clinic calendar",
      stages: [
        { label: "Inquiry captured", step: 1 },
        { label: "Patient qualified", step: 2 },
        { label: "Calendar checked", step: 3 },
        { label: "Consultation booked", step: 4 },
      ],
      incomingEyebrow: "Incoming inquiry",
      whatsapp: {
        label: "WhatsApp",
        time: "Sunday, 14:18",
        status: "New lead",
      },
      monitoredSources: ["Instagram DM", "Website form"],
      monitoredLabel: "Monitored",
      qualificationEyebrow: "Qualification",
      patientDetails: [
        { label: "Treatment", value: "Botox consultation", step: 1 },
        {
          label: "Patient type",
          value: "First-time injectable patient",
          step: 2,
        },
        { label: "Preference", value: "Natural-looking result", step: 3 },
        { label: "Readiness", value: "Ready to book", step: 4 },
      ],
      conversationEyebrow: "Patient conversation",
      conversationTitle: "Botox consultation request",
      respondingLabel: "Responding now",
      messages: [
        {
          sender: "patient",
          label: "Patient",
          text: "Hi, do you offer Botox consultations?",
          step: 1,
        },
        {
          sender: "lumacare",
          label: "LumaCare",
          text: "Yes. Is this your first injectable treatment, or have you had Botox before?",
          step: 2,
        },
        {
          sender: "patient",
          label: "Patient",
          text: "First time. I want something natural.",
          step: 3,
        },
        {
          sender: "lumacare",
          label: "LumaCare",
          text: "A consultation is the right next step. I can check the clinic calendar for this week.",
          step: 4,
        },
        {
          sender: "patient",
          label: "Patient",
          text: "Friday morning would be ideal.",
          step: 5,
        },
        {
          sender: "lumacare",
          label: "LumaCare",
          text: "Friday at 11:00 is available. I booked your consultation and shared the details with the clinic team.",
          step: 6,
        },
      ],
      calendarEyebrow: "Clinic calendar",
      calendarTitle: "Friday slot confirmed",
      calendarSlots: [
        { day: "Thu", time: "2:00 PM", status: "Available" },
        { day: "Fri", time: "11:00 AM", status: "Booked", isBooked: true },
        { day: "Fri", time: "3:30 PM", status: "Available" },
      ],
      summaryEyebrow: "Booking summary",
      summaryItems: [
        { label: "Status", value: "Consultation booked", step: 1 },
        { label: "Calendar", value: "Clinic calendar updated", step: 2 },
        { label: "Team handoff", value: "Patient details sent", step: 3 },
      ],
    },
    beforeAfter: {
      eyebrow: "Before vs After",
      title: "Replace reactive follow-up with instant lead conversion.",
      description:
        "Clinic owners do not need more admin pressure. They need a calmer way to turn high-intent inquiries into appointments.",
      beforeTitle: "Before LumaCare",
      beforeItems: ["missed leads", "manual follow-up", "slow replies"],
      afterTitle: "After LumaCare",
      afterItems: [
        "instant responses",
        "qualified leads",
        "more booked appointments",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions clinic owners usually ask first.",
      description:
        "This first version focuses on explaining the value clearly before adding product workflows or account functionality.",
      items: [
        {
          question: "Is LumaCare a replacement for my front desk team?",
          answer:
            "No. LumaCare helps your team respond faster, qualify inquiries, and spend more time with patients who are ready to book.",
        },
        {
          question: "Which clinics is this built for?",
          answer:
            "LumaCare is built for aesthetic clinics, med spas, dermatology practices, and premium wellness clinics that depend on inbound inquiries.",
        },
        {
          question: "Does this include a dashboard or patient records?",
          answer:
            "LumaCare focuses on front-desk conversion: faster replies, better qualification, and a clearer path to booked consultations.",
        },
        {
          question: "Can LumaCare help after hours?",
          answer:
            "Yes. New inquiries can receive an instant response outside office hours, on weekends, or when your staff is busy.",
        },
        {
          question: "How much does LumaCare cost?",
          answer:
            "Pricing depends on clinic size, inquiry volume, and workflow requirements. Book a short demo so we can understand your needs and recommend the right setup.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Final conversion point",
      title: "Stop losing patients to faster competitors.",
      description:
        "LumaCare helps aesthetic clinics respond faster, qualify more leads, and convert more inquiries into booked appointments.",
      primaryCta: { label: "Book a Demo", href: englishDemoHref },
      secondaryCta: { label: "See how LumaCare works", href: "#demo" },
    },
    footer: {
      homeAriaLabel: "LumaCare home",
      logoAlt: "LumaCare - AI Front Desk for Aesthetic Clinics",
      rights: "All rights reserved.",
    },
  },
  pt: {
    metadata: {
      title: "LumaCare | Receção Digital com IA para Clínicas de Estética",
      description:
        "A LumaCare ajuda clínicas de estética a responder de imediato a novos pedidos, qualificar contactos e converter mais conversas em consultas marcadas.",
      canonical: "/pt",
    },
    header: {
      homeAriaLabel: "Início LumaCare",
      logoAlt: "LumaCare - Receção Digital com IA para Clínicas de Estética",
      navItems: [
        { label: "Problema", href: "#problem" },
        { label: "Solução", href: "#solution" },
        { label: "Como funciona", href: "#how-it-works" },
        { label: "Demo", href: "#demo" },
        { label: "FAQ", href: "#faq" },
      ],
      primaryCta: { label: "Marcar demo", href: portugueseDemoHref },
      languageSwitcherLabel: "Escolher idioma",
    },
    hero: {
      badge: "Criado para clínicas de estética modernas",
      title: "Nunca perca uma marcação por responder tarde.",
      description:
        "A LumaCare é a sua receção digital com IA para clínicas de estética. Cada pedido recebe resposta imediata, mesmo quando a equipa está ocupada, para ajudar a transformar mais contactos em consultas marcadas.",
      primaryCta: { label: "Marcar demo", href: portugueseDemoHref },
      secondaryCta: { label: "Ver como funciona", href: "#how-it-works" },
      stats: [
        { metric: "Imediata", label: "primeira resposta" },
        { metric: "Qualificado", label: "passagem à equipa" },
        { metric: "Sempre ativa", label: "experiência do paciente" },
      ],
      imageAlt:
        "Receção premium de uma clínica de estética com luz natural e balcão elegante",
      inquiryEyebrow: "NOVO PEDIDO",
      inquiryTitle: "Consulta de Botox",
      inquiryBadges: ["Qualificado", "Pronto para marcar"],
    },
    problem: {
      eyebrow: "O problema",
      title: "A sua clínica perde marcações todos os dias sem se aperceber.",
      description:
        "Os pacientes de estética decidem rápido. Quando um contacto fica à espera, se perde, ou recebe uma resposta tardia, a marcação muitas vezes vai para outra clínica.",
      items: [
        {
          title: "Respostas lentas",
          description:
            "Um paciente que espera por resposta já está a comparar a sua clínica com outra opção.",
        },
        {
          title: "Pedidos perdidos",
          description:
            "Chamadas, formulários, DMs e contactos do site podem escapar quando a receção está ocupada.",
        },
        {
          title: "Marcações perdidas",
          description:
            "Cada pergunta sem resposta pode transformar-se numa consulta que nunca chega à agenda.",
        },
        {
          title: "Equipa sobrecarregada",
          description:
            "A sua equipa tem de receber pacientes, responder a perguntas, fazer follow-up e vender.",
        },
      ],
    },
    solution: {
      eyebrow: "A solução",
      title: "Conheça a sua receção digital com IA",
      description:
        "A LumaCare responde de imediato a cada pedido e ajuda clínicas de estética a converter mais contactos em consultas marcadas.",
      features: [
        {
          title: "Todos os pedidos recebem resposta",
          description:
            "A LumaCare responde assim que chega um novo contacto, mesmo quando a sua equipa está com pacientes.",
        },
        {
          title: "As perguntas certas são feitas",
          description:
            "Ajuda a perceber interesse no tratamento, timing e intenção antes do contacto chegar à equipa.",
        },
        {
          title: "Mais contactos chegam à agenda",
          description:
            "Em vez de deixar contactos numa caixa de entrada, a LumaCare mantém a conversa a avançar até à marcação.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Um caminho simples do pedido à consulta.",
      steps: [
        {
          title: "Paciente contacta a clínica",
          description:
            "Um potencial paciente entra em contacto pelo site, anúncios, redes sociais ou formulários.",
        },
        {
          title: "A LumaCare responde de imediato",
          description:
            "A LumaCare responde no momento, esclarece perguntas comuns e recolhe os detalhes que a equipa precisa.",
        },
        {
          title: "A consulta fica marcada",
          description:
            "O contacto é guiado para a próxima consulta disponível em vez de arrefecer numa caixa de entrada.",
        },
      ],
    },
    demo: {
      eyebrow: "Experiência de marcação ao vivo",
      title: "Veja a LumaCare em ação.",
      description:
        "Veja um novo pedido de paciente ser respondido, qualificado, cruzado com a disponibilidade da agenda e convertido numa consulta marcada.",
      productName: "Receção Digital LumaCare",
      productStatus: "Pedido de WhatsApp sincronizado com a agenda da clínica",
      stages: [
        { label: "Pedido recebido", step: 1 },
        { label: "Paciente qualificado", step: 2 },
        { label: "Agenda verificada", step: 3 },
        { label: "Consulta marcada", step: 4 },
      ],
      incomingEyebrow: "Novo pedido",
      whatsapp: {
        label: "WhatsApp",
        time: "Domingo, 14:18",
        status: "Novo contacto",
      },
      monitoredSources: ["Instagram DM", "Formulário do site"],
      monitoredLabel: "Monitorizado",
      qualificationEyebrow: "Qualificação",
      patientDetails: [
        { label: "Tratamento", value: "Consulta de Botox", step: 1 },
        { label: "Tipo de paciente", value: "Primeira vez em injetáveis", step: 2 },
        { label: "Preferência", value: "Resultado natural", step: 3 },
        { label: "Intenção", value: "Pronto para marcar", step: 4 },
      ],
      conversationEyebrow: "Conversa com paciente",
      conversationTitle: "Pedido de consulta de Botox",
      respondingLabel: "A responder agora",
      messages: [
        {
          sender: "patient",
          label: "Paciente",
          text: "Olá, fazem consultas de Botox?",
          step: 1,
        },
        {
          sender: "lumacare",
          label: "LumaCare",
          text: "Sim. É o seu primeiro tratamento injetável ou já fez Botox antes?",
          step: 2,
        },
        {
          sender: "patient",
          label: "Paciente",
          text: "Primeira vez. Quero um resultado natural.",
          step: 3,
        },
        {
          sender: "lumacare",
          label: "LumaCare",
          text: "A consulta é o próximo passo certo. Posso verificar a agenda da clínica para esta semana.",
          step: 4,
        },
        {
          sender: "patient",
          label: "Paciente",
          text: "Sexta de manhã seria ideal.",
          step: 5,
        },
        {
          sender: "lumacare",
          label: "LumaCare",
          text: "Sexta às 11:00 está disponível. A sua consulta ficou marcada e enviei os detalhes à equipa da clínica.",
          step: 6,
        },
      ],
      calendarEyebrow: "Agenda da clínica",
      calendarTitle: "Horário de sexta confirmado",
      calendarSlots: [
        { day: "Qui", time: "14:00", status: "Disponível" },
        { day: "Sex", time: "11:00", status: "Marcado", isBooked: true },
        { day: "Sex", time: "15:30", status: "Disponível" },
      ],
      summaryEyebrow: "Resumo da marcação",
      summaryItems: [
        { label: "Estado", value: "Consulta marcada", step: 1 },
        { label: "Agenda", value: "Agenda da clínica atualizada", step: 2 },
        { label: "Passagem à equipa", value: "Detalhes do paciente enviados", step: 3 },
      ],
    },
    beforeAfter: {
      eyebrow: "Antes vs Depois",
      title: "Troque follow-up reativo por conversão imediata de contactos.",
      description:
        "Os donos de clínicas não precisam de mais pressão administrativa. Precisam de uma forma mais calma de transformar pedidos com intenção real em consultas.",
      beforeTitle: "Antes da LumaCare",
      beforeItems: ["contactos perdidos", "follow-up manual", "respostas lentas"],
      afterTitle: "Depois da LumaCare",
      afterItems: [
        "respostas imediatas",
        "contactos qualificados",
        "mais consultas marcadas",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "As primeiras perguntas que os donos de clínicas costumam fazer.",
      description:
        "Esta primeira versão foca-se em explicar claramente o valor antes de adicionar workflows de produto ou contas de utilizador.",
      items: [
        {
          question: "A LumaCare substitui a minha equipa de receção?",
          answer:
            "Não. A LumaCare ajuda a sua equipa a responder mais depressa, qualificar pedidos e dedicar mais tempo aos pacientes que estão prontos para marcar.",
        },
        {
          question: "Para que tipo de clínicas foi criada?",
          answer:
            "A LumaCare foi criada para clínicas de estética, med spas, dermatologia e clínicas premium de bem-estar que dependem de pedidos recebidos online.",
        },
        {
          question: "Inclui dashboard ou fichas de pacientes?",
          answer:
            "A LumaCare foca-se na conversão de receção: respostas mais rápidas, melhor qualificação e um caminho mais claro até à marcação da consulta.",
        },
        {
          question: "Pode ajudar fora do horário da clínica?",
          answer:
            "Sim. Novos pedidos podem receber uma resposta imediata fora do horário, ao fim de semana, ou quando a equipa está ocupada.",
        },
        {
          question: "Quanto custa a LumaCare?",
          answer:
            "O preço depende do tamanho da clínica, volume de pedidos e requisitos do workflow. Marque uma demo curta para percebermos as suas necessidades e recomendarmos a configuração certa.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Próximo passo",
      title: "Pare de perder pacientes para clínicas que respondem mais rápido.",
      description:
        "A LumaCare ajuda clínicas de estética a responder mais depressa, qualificar mais contactos e converter mais pedidos em consultas marcadas.",
      primaryCta: { label: "Marcar demo", href: portugueseDemoHref },
      secondaryCta: { label: "Ver como a LumaCare funciona", href: "#demo" },
    },
    footer: {
      homeAriaLabel: "Início LumaCare",
      logoAlt: "LumaCare - Receção Digital com IA para Clínicas de Estética",
      rights: "Todos os direitos reservados.",
    },
  },
};
