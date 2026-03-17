import { useState } from "react";
import type { FormEvent } from "react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "Primera consulta",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "Primera consulta",
        mensaje: "",
      });
      setErrors({});
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field as keyof FormErrors];
        return updated;
      });
    }
  };

  const inputBase =
    "border rounded-lg p-3 w-full outline-none transition-all duration-300 text-base";
  const inputNormal = `${inputBase} border-gray-300 focus:ring-2 focus:ring-accent/30 focus:border-accent focus:shadow-[0_0_0_3px_rgba(86,114,196,0.1)]`;
  const inputError = `${inputBase} border-red-500 focus:ring-2 focus:ring-red-300 focus:border-red-500`;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 md:p-8">
      {/* Success Banner */}
      {submitted && (
        <div
          className="bg-green-50 border border-green-300 text-green-800 rounded-lg p-4 mb-6"
          style={{ animation: "fadeInUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          <p className="font-medium">
            ¡Mensaje enviado! Nos pondremos en contacto pronto.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Nombre */}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block font-medium text-dark mb-1.5"
          >
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre completo"
            className={errors.nombre ? inputError : inputNormal}
            value={formData.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block font-medium text-dark mb-1.5"
          >
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="tu@correo.com"
            className={errors.email ? inputError : inputNormal}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Teléfono */}
        <div className="mb-5">
          <label
            htmlFor="telefono"
            className="block font-medium text-dark mb-1.5"
          >
            Teléfono <span className="text-gray-400 text-sm">(opcional)</span>
          </label>
          <input
            type="tel"
            id="telefono"
            placeholder="6000-0000"
            className={inputNormal}
            value={formData.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
          />
        </div>

        {/* Asunto */}
        <div className="mb-5">
          <label
            htmlFor="asunto"
            className="block font-medium text-dark mb-1.5"
          >
            Asunto
          </label>
          <select
            id="asunto"
            className={inputNormal}
            value={formData.asunto}
            onChange={(e) => handleChange("asunto", e.target.value)}
          >
            <option value="Primera consulta">Primera consulta</option>
            <option value="Seguimiento">Seguimiento</option>
            <option value="Información general">Información general</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        {/* Mensaje */}
        <div className="mb-6">
          <label
            htmlFor="mensaje"
            className="block font-medium text-dark mb-1.5"
          >
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="Cuéntanos en qué podemos ayudarte..."
            className={errors.mensaje ? inputError : inputNormal}
            value={formData.mensaje}
            onChange={(e) => handleChange("mensaje", e.target.value)}
          />
          {errors.mensaje && (
            <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg py-3"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}
