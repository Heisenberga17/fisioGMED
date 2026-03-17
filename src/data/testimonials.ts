export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Darwin Herrera P.",
    quote: "La clinica mas completa en lo que respecta medicina deportiva, profesionales de primer nivel con mucha experiencia.",
    rating: 5,
    date: "hace 3 anos",
  },
  {
    name: "Marlon Casas",
    quote: "He recibido la atencion de este equipo de profesionales que se nota su gran experiencia... cuentan con equipos modernos que ayudaron a mi pronta recuperacion... gracias senores de Fisiogmed.",
    rating: 5,
    date: "hace 3 anos",
  },
  {
    name: "Alfonso Foster",
    quote: "Excelente Profesionales! Full recomendados.",
    rating: 5,
    date: "hace 3 anos",
  },
  {
    name: "Isaac De Leon",
    quote: "Excelente atencion, grandes profesionales y comodidad total, el mejor centro de fisioterapia y recuperacion que he visto en Panama.",
    rating: 5,
    date: "hace 3 anos",
  },
  {
    name: "Danilo Chandler",
    quote: "Maravillosa atencion, excelentes profesionales y muy buenas instalaciones.",
    rating: 5,
    date: "hace 3 anos",
  },
  {
    name: "Macky Rodriguez",
    quote: "Excelente servicio, muy recomendado.",
    rating: 5,
    date: "hace 5 meses",
  },
];
