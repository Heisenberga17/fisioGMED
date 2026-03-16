export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  treatments: string[];
}

export const services: Service[] = [
  {
    id: "rehabilitacion-deportiva",
    name: "Rehabilitación Deportiva",
    shortDescription:
      "Recuperación integral para atletas y personas activas con lesiones musculoesqueléticas.",
    fullDescription:
      "Nuestro programa de rehabilitación deportiva combina técnicas avanzadas de fisioterapia con un enfoque personalizado para devolverte al máximo rendimiento. Trabajamos con atletas de todos los niveles para una recuperación segura y efectiva.",
    icon: "🏃",
    treatments: [
      "Recuperación post-quirúrgica (LCA, manguito rotador)",
      "Rehabilitación de esguinces y desgarros",
      "Fortalecimiento funcional progresivo",
      "Vendaje neuromuscular (kinesiotaping)",
      "Crioterapia y termoterapia",
    ],
  },
  {
    id: "terapia-manual",
    name: "Terapia Manual Ortopédica",
    shortDescription:
      "Técnicas manuales especializadas para restaurar movilidad y reducir dolor articular.",
    fullDescription:
      "La terapia manual ortopédica utiliza movilizaciones articulares, manipulaciones y técnicas de tejido blando para tratar disfunciones del sistema musculoesquelético. Ideal para dolores crónicos y restricciones de movimiento.",
    icon: "🤲",
    treatments: [
      "Movilización articular (Maitland, Mulligan)",
      "Liberación miofascial",
      "Técnicas de energía muscular",
      "Movilización neurodinámica",
      "Terapia de puntos gatillo",
    ],
  },
  {
    id: "dolor-columna",
    name: "Dolor de Columna",
    shortDescription:
      "Tratamiento especializado para dolor cervical, dorsal y lumbar con enfoque basado en evidencia.",
    fullDescription:
      "Abordamos el dolor de columna con un enfoque integral que combina terapia manual, ejercicio terapéutico y educación al paciente. Nuestro objetivo es no solo aliviar el dolor sino prevenir recurrencias.",
    icon: "🦴",
    treatments: [
      "Evaluación postural integral",
      "Descompresión vertebral manual",
      "Ejercicios de estabilización lumbar (core)",
      "Tratamiento de hernias y protrusiones",
      "Programa McKenzie",
    ],
  },
  {
    id: "post-quirurgico",
    name: "Rehabilitación Post-Quirúrgica",
    shortDescription:
      "Protocolos de rehabilitación personalizados para una recuperación óptima después de cirugía.",
    fullDescription:
      "Seguimos protocolos basados en evidencia para cada tipo de cirugía ortopédica, trabajando en coordinación con tu cirujano para garantizar una recuperación completa y segura en los tiempos adecuados.",
    icon: "🏥",
    treatments: [
      "Rehabilitación de prótesis (rodilla, cadera)",
      "Post-artroscopia de rodilla y hombro",
      "Recuperación de fracturas operadas",
      "Rehabilitación de reparación de tendones",
      "Protocolo de retorno al deporte",
    ],
  },
  {
    id: "fisioterapia-preventiva",
    name: "Fisioterapia Preventiva",
    shortDescription:
      "Programas de prevención de lesiones y optimización del rendimiento físico.",
    fullDescription:
      "No esperes a lesionarte. Nuestros programas preventivos identifican factores de riesgo y fortalecen áreas vulnerables para que puedas mantener un estilo de vida activo sin interrupciones.",
    icon: "🛡️",
    treatments: [
      "Evaluación funcional del movimiento (FMS)",
      "Programas de prevención de lesiones",
      "Corrección de desequilibrios musculares",
      "Asesoría ergonómica",
      "Planes de ejercicio personalizados",
    ],
  },
  {
    id: "ondas-choque",
    name: "Ondas de Choque",
    shortDescription:
      "Tecnología avanzada para tratar tendinopatías crónicas y calcificaciones.",
    fullDescription:
      "La terapia de ondas de choque extracorpóreas es un tratamiento no invasivo altamente efectivo para condiciones crónicas que no responden a tratamientos convencionales. Estimula la regeneración tisular y reduce el dolor.",
    icon: "⚡",
    treatments: [
      "Fascitis plantar",
      "Tendinopatía del tendón de Aquiles",
      "Epicondilitis (codo de tenista)",
      "Tendinitis calcificante de hombro",
      "Síndrome de dolor trocantérico",
    ],
  },
  {
    id: "nutricion",
    name: "Atención Nutricional",
    shortDescription:
      "Nutrición personalizada para optimizar tu rendimiento, recuperación y composición corporal.",
    fullDescription:
      "Nuestro servicio de atención nutricional complementa tu rehabilitación con un enfoque integral. Mediante una evaluación completa de composición corporal con tecnología InBody y una entrevista nutricional detallada, diseñamos un plan de alimentación totalmente personalizado para tus objetivos.",
    icon: "🥗",
    treatments: [
      "Evaluación de composición corporal con InBody",
      "Interpretación de resultados",
      "Entrevista nutricional personalizada",
      "Plan de alimentación personalizado",
      "Guía de suplementación",
    ],
  },
  {
    id: "magnetoterapia",
    name: "Magnetoterapia",
    shortDescription:
      "Recuperación acelerada mediante campos magnéticos pulsados de alta y baja frecuencia.",
    fullDescription:
      "La magnetoterapia utiliza campos magnéticos pulsados para estimular la regeneración celular, reducir la inflamación y aliviar el dolor. Es un tratamiento no invasivo e indoloro que complementa eficazmente otras técnicas de fisioterapia para acelerar tu recuperación.",
    icon: "🧲",
    treatments: [
      "Tratamiento de fracturas y consolidación ósea",
      "Reducción de inflamación y edema",
      "Alivio del dolor crónico y agudo",
      "Recuperación de lesiones musculares",
      "Tratamiento de artrosis y artritis",
    ],
  },
  {
    id: "tecarterapia",
    name: "Tecarterapia",
    shortDescription:
      "Recuperación con energía electromagnética de última generación para aliviar el dolor desde la primera sesión.",
    fullDescription:
      "La Tecarterapia es tu aliada para una recuperación más rápida y eficaz. Esta terapia de última generación estimula los procesos naturales del cuerpo, aliviando el dolor desde la primera sesión y acelerando la regeneración de tejidos. Recupera tu bienestar con tecnología avanzada y atención personalizada.",
    icon: "📡",
    treatments: [
      "Lesiones musculares",
      "Tendinitis",
      "Contracturas",
      "Dolores articulares",
      "Inflamaciones crónicas",
    ],
  },
  {
    id: "adulto-mayor",
    name: "Atención al Adulto Mayor",
    shortDescription:
      "Fisioterapia especializada para mejorar la movilidad, independencia y calidad de vida del adulto de la tercera edad.",
    fullDescription:
      "En FisioGMED brindamos atención especializada en fisioterapia para el adulto de la tercera edad, mejorando su movilidad y calidad de vida. Nuestros programas están diseñados para mantener y recuperar la funcionalidad, prevenir caídas y promover una vida activa e independiente.",
    icon: "🤝",
    treatments: [
      "Mejora de equilibrio y prevención de caídas",
      "Fortalecimiento muscular progresivo",
      "Rehabilitación funcional para actividades diarias",
      "Manejo del dolor articular y artritis",
      "Programas de movilidad y flexibilidad",
    ],
  },
];
