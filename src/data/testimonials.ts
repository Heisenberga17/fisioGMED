export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    role: "Maratonista",
    quote:
      "Después de mi lesión de rodilla, pensé que no volvería a correr. El equipo de FisioGMED no solo me rehabilitó, sino que ahora corro mejor que antes. Su enfoque personalizado hizo toda la diferencia.",
    rating: 5,
  },
  {
    name: "María González",
    role: "Oficinista",
    quote:
      "Llevaba años con dolor lumbar crónico. En FisioGMED me enseñaron a entender mi dolor y me dieron herramientas para manejarlo. Hoy puedo trabajar sin molestias y disfruto de mis actividades sin limitaciones.",
    rating: 5,
  },
  {
    name: "Roberto Vásquez",
    role: "Jugador de fútbol",
    quote:
      "La rehabilitación después de mi cirugía de LCA fue excelente. El seguimiento constante y los ejercicios progresivos me dieron confianza para volver a la cancha en el tiempo esperado.",
    rating: 5,
  },
  {
    name: "Ana Lucía Pérez",
    role: "Profesora de yoga",
    quote:
      "Llegué con un hombro congelado que no me dejaba dar clases. El tratamiento de terapia manual fue increíble, recuperé mi movilidad completamente en pocas semanas.",
    rating: 5,
  },
  {
    name: "Diego Herrera",
    role: "Ciclista amateur",
    quote:
      "Las ondas de choque para mi fascitis plantar fueron un cambio radical. Después de meses sin poder entrenar, en pocas sesiones ya estaba de vuelta en la bicicleta.",
    rating: 5,
  },
  {
    name: "Patricia Ruiz",
    role: "Madre de familia",
    quote:
      "El trato humano y profesional del equipo es excepcional. Me explicaron todo el proceso, me sentí escuchada y los resultados superaron mis expectativas. ¡Totalmente recomendados!",
    rating: 5,
  },
];
