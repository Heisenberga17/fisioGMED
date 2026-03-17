export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  treatments: string[];
  category: "clinico" | "rendimiento" | "tecnologia";
}

export const categoryLabels: Record<Service["category"], string> = {
  clinico: "Servicios Clínicos",
  rendimiento: "Rendimiento y Recuperación",
  tecnologia: "Tecnología y Modalidades",
};

export const services: Service[] = [
  {
    id: "ortopedia",
    name: "Ortopedia",
    shortDescription:
      "Consultas con médicos especialistas en el sistema musculoesquelético para diagnóstico y tratamiento.",
    fullDescription:
      "En FisioGMED contamos con médicos especialistas en ortopedia para evaluar y tratar lesiones y condiciones del sistema musculoesquelético. Nuestro enfoque integral permite un diagnóstico preciso y un plan de tratamiento coordinado con nuestro equipo de fisioterapia para garantizar tu recuperación completa.",
    icon: "🦴",
    treatments: [
      "Evaluación musculoesquelética especializada",
      "Diagnóstico de lesiones deportivas y degenerativas",
      "Plan de tratamiento personalizado",
      "Seguimiento post-operatorio",
      "Coordinación con equipo de rehabilitación",
    ],
    category: "clinico",
  },
  {
    id: "fisioterapia-deportiva",
    name: "Fisioterapia Deportiva",
    shortDescription:
      "Tratamientos específicos para atletas de alto rendimiento y aficionados.",
    fullDescription:
      "Nuestro servicio de fisioterapia deportiva está diseñado para atletas de todos los niveles, desde seleccionados nacionales hasta deportistas aficionados. Combinamos técnicas avanzadas de rehabilitación con tecnología de punta para prevenir lesiones, optimizar el rendimiento y garantizar una recuperación segura.",
    icon: "🏃",
    treatments: [
      "Prevención de lesiones deportivas",
      "Recuperación de lesiones musculares y ligamentarias",
      "Fortalecimiento funcional progresivo",
      "Vendaje neuromuscular (kinesiotaping)",
      "Programa para jóvenes atletas (15-21 años)",
    ],
    category: "clinico",
  },
  {
    id: "rehabilitacion-ortopedica",
    name: "Rehabilitación Ortopédica",
    shortDescription:
      "Recuperación de fracturas, cirugías y lesiones crónicas con protocolos basados en evidencia.",
    fullDescription:
      "Nuestro programa de rehabilitación ortopédica sigue protocolos basados en evidencia científica para cada tipo de lesión y cirugía. Trabajamos en coordinación con tu médico tratante para garantizar una recuperación completa y segura, desde fracturas complejas hasta cirugías de reemplazo articular.",
    icon: "🏥",
    treatments: [
      "Rehabilitación post-fractura (tibia, peroné, etc.)",
      "Recuperación post-quirúrgica (LCA, manguito rotador)",
      "Rehabilitación de prótesis (rodilla, cadera)",
      "Manejo de lesiones crónicas",
      "Terapia manual ortopédica",
    ],
    category: "clinico",
  },
  {
    id: "readaptacion-deportiva",
    name: "Readaptación Deportiva",
    shortDescription:
      "El paso final para que el atleta regrese a su actividad de forma segura tras una lesión.",
    fullDescription:
      "La readaptación deportiva es la fase crucial entre la rehabilitación clínica y el retorno completo al deporte. En FisioGMED diseñamos programas específicos para tu disciplina deportiva, utilizando sistemas inerciales y tecnología avanzada para que vuelvas a competir con confianza y al 100% de tu capacidad.",
    icon: "🎯",
    treatments: [
      "Evaluación funcional de retorno al deporte",
      "Entrenamiento con sistemas inerciales (Método Yo-Yo)",
      "Control neuromuscular y propiocepción",
      "Entrenamiento de potencia y velocidad",
      "Simulación de gestos deportivos específicos",
    ],
    category: "rendimiento",
  },
  {
    id: "adulto-mayor",
    name: "Atención al Adulto Mayor",
    shortDescription:
      "Programas enfocados en movilidad, independencia y calidad de vida para personas mayores.",
    fullDescription:
      "En FisioGMED brindamos atención especializada para el adulto de la tercera edad, mejorando su movilidad y calidad de vida. Nuestros programas están diseñados para mantener y recuperar la funcionalidad, prevenir caídas y promover una vida activa e independiente con el acompañamiento de profesionales dedicados.",
    icon: "🤝",
    treatments: [
      "Mejora de equilibrio y prevención de caídas",
      "Fortalecimiento muscular progresivo y adaptado",
      "Rehabilitación funcional para actividades diarias",
      "Manejo del dolor articular y artritis",
      "Programas de movilidad y flexibilidad",
    ],
    category: "clinico",
  },
  {
    id: "ondas-choque",
    name: "Ondas de Choque Radiales",
    shortDescription:
      "Tecnología efectiva para tratar tendinitis, calcificaciones y lesiones crónicas.",
    fullDescription:
      "La terapia de ondas de choque radiales es un tratamiento no invasivo altamente efectivo para condiciones crónicas que no responden a tratamientos convencionales. Estimula la regeneración tisular, rompe calcificaciones y reduce el dolor de forma significativa desde las primeras sesiones.",
    icon: "⚡",
    treatments: [
      "Tendinitis crónica",
      "Fascitis plantar",
      "Epicondilitis (codo de tenista)",
      "Tendinitis calcificante de hombro",
      "Síndrome de dolor miofascial",
    ],
    category: "tecnologia",
  },
  {
    id: "tecarterapia",
    name: "Tecarterapia",
    shortDescription:
      "Estimulación de la regeneración natural de los tejidos con tecnología de última generación.",
    fullDescription:
      "La Tecarterapia es tu aliada para una recuperación más rápida y eficaz. Esta terapia de última generación estimula los procesos naturales del cuerpo, aliviando el dolor desde la primera sesión y acelerando la regeneración de tejidos. Recupera tu bienestar con tecnología avanzada y atención personalizada.",
    icon: "📡",
    treatments: [
      "Regeneración tisular profunda",
      "Lesiones musculares agudas y crónicas",
      "Tendinitis y tendinopatías",
      "Contracturas y dolor articular",
      "Reducción de inflamación crónica",
    ],
    category: "tecnologia",
  },
  {
    id: "nutricion-deportiva",
    name: "Nutrición Deportiva",
    shortDescription:
      "Asesoría personalizada para optimizar rendimiento y reparación muscular.",
    fullDescription:
      "Nuestro servicio de nutrición deportiva complementa tu rehabilitación y entrenamiento con un enfoque integral. Mediante control de macros y micronutrientes, diseñamos un plan de alimentación totalmente personalizado para optimizar tu rendimiento deportivo, acelerar la reparación muscular y alcanzar tus objetivos de composición corporal.",
    icon: "🥗",
    treatments: [
      "Control de macronutrientes y micronutrientes",
      "Plan nutricional personalizado",
      "Evaluación de composición corporal",
      "Nutrición para recuperación de lesiones",
      "Suplementación deportiva guiada",
    ],
    category: "rendimiento",
  },
  {
    id: "fisioterapia-domicilio",
    name: "Fisioterapia a Domicilio",
    shortDescription:
      "Atención fisioterapéutica profesional en la comodidad de tu hogar u oficina.",
    fullDescription:
      "Sabemos que no siempre es fácil desplazarse a la clínica. Por eso, llevamos nuestros servicios de fisioterapia directamente a tu hogar u oficina. Nuestros fisioterapeutas se desplazan con equipo portátil para brindarte la misma calidad de atención que recibirías en nuestra clínica de Costa del Este.",
    icon: "🏠",
    treatments: [
      "Evaluación y diagnóstico a domicilio",
      "Terapia manual y movilizaciones",
      "Ejercicio terapéutico guiado",
      "Electroterapia portátil",
      "Seguimiento y plan de ejercicios en casa",
    ],
    category: "tecnologia",
  },
  {
    id: "recovery-deportivo",
    name: "Recovery Deportivo",
    shortDescription:
      "Sesiones enfocadas en descarga muscular y recuperación tras entrenamientos intensos.",
    fullDescription:
      "El recovery deportivo es esencial para atletas que entrenan a alta intensidad. Nuestras sesiones están diseñadas exclusivamente para la descarga muscular, combinando masaje deportivo, estiramientos asistidos y técnicas de relajación miofascial para que tu cuerpo se recupere más rápido y rindas al máximo.",
    icon: "💆",
    treatments: [
      "Masaje deportivo de descarga",
      "Estiramientos asistidos",
      "Liberación miofascial",
      "Crioterapia de recuperación",
      "Técnicas de relajación muscular profunda",
    ],
    category: "rendimiento",
  },
];
