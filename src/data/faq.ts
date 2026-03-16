export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "¿Necesito referencia médica para agendar una cita?",
    answer:
      "No es obligatorio. Puedes agendar directamente con nosotros. Sin embargo, si vienes referido por un médico o tienes estudios recientes (radiografías, resonancias), te pedimos que los traigas a tu primera consulta para una evaluación más completa.",
  },
  {
    question: "¿Cuánto dura una sesión de fisioterapia?",
    answer:
      "La evaluación inicial dura aproximadamente 60 minutos, ya que incluye una valoración completa y el inicio del tratamiento. Las sesiones de seguimiento duran entre 45 y 60 minutos dependiendo del plan de tratamiento.",
  },
  {
    question: "¿Cuántas sesiones necesitaré?",
    answer:
      "Depende de tu condición específica. Después de la evaluación inicial, te daremos un plan de tratamiento con una estimación del número de sesiones. La mayoría de condiciones agudas mejoran en 4-8 sesiones, mientras que condiciones crónicas pueden requerir un seguimiento más prolongado.",
  },
  {
    question: "¿Trabajan con seguros médicos?",
    answer:
      "Sí, trabajamos con las principales aseguradoras de Panamá. Te recomendamos contactarnos antes de tu cita para verificar la cobertura de tu póliza y los requisitos específicos de tu aseguradora.",
  },
  {
    question: "¿Qué debo llevar a mi primera cita?",
    answer:
      "Trae ropa cómoda que permita acceso a la zona a tratar, tus estudios de imagen si los tienes (radiografías, resonancias, etc.), tu referencia médica si aplica, y tu carnet de seguro si deseas utilizar tu póliza.",
  },
  {
    question: "¿Ofrecen tratamiento a domicilio?",
    answer:
      "Actualmente nuestros servicios se ofrecen exclusivamente en nuestra clínica en Costa del Este (Plaza 770), donde contamos con todo el equipamiento necesario para brindarte la mejor atención.",
  },
  {
    question: "¿Atienden niños?",
    answer:
      "Sí, atendemos pacientes pediátricos. Nuestro equipo tiene experiencia en rehabilitación infantil y adaptamos nuestras técnicas para hacer las sesiones amigables y efectivas para los más pequeños.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Te pedimos avisar con al menos 24 horas de anticipación si necesitas cancelar o reprogramar tu cita. Esto nos permite ofrecer ese espacio a otro paciente que lo necesite.",
  },
];
