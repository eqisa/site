import { FormEvent, useState } from "react";
import "./Contact.css";

interface ContactFormData {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const initialForm: ContactFormData = {
  name: "",
  lastName: "",
  email: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialForm);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Por ahora mostramos confirmación visual.
    // Aquí posteriormente podemos conectar el formulario
    // con correo, Formspree, backend, etc.
    setIsSubmitted(true);

    setFormData(initialForm);
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">

        {/* ─────────────────────────────
            LEFT
        ───────────────────────────── */}
        <div className="contact-intro">
          <span className="contact-eyebrow">
            05 / CONTACTO
          </span>

          <h2>
            SOLICITAR
            <br />
            PROPUESTA
            <br />
            PERSONALIZADA
          </h2>

          <p>
            Completa el formulario y un especialista se pondrá
            en contacto contigo para conocer tus necesidades y
            ayudarte a encontrar la solución adecuada.
          </p>

          <div className="contact-detail">
            <span>ATENCIÓN ESPECIALIZADA</span>
            <strong>Soluciones para la industria</strong>
          </div>
        </div>

        {/* ─────────────────────────────
            FORM
        ───────────────────────────── */}
        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-field form-field-full">
              <label htmlFor="name">
                Nombre <span>(obligatorio)</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="given-name"
              />
            </div>

            <div className="form-row">

              <div className="form-field">
                <label htmlFor="name">
                  Nombre <span>(obligatorio)</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="lastName">
                  Apellido <span>(obligatorio)</span>
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                />
              </div>

            </div>

            <div className="form-field form-field-full">
              <label htmlFor="email">
                Correo electrónico <span>(obligatorio)</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="message">
                Mensaje <span>(obligatorio)</span>
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button
              className="contact-submit"
              type="submit"
            >
              ENVIAR
            </button>

            {isSubmitted && (
              <p className="contact-success">
                Gracias por contactarnos. Nos pondremos en
                contacto contigo próximamente.
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}