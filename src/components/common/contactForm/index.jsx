import { useState } from 'react';
import './styles.css';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};

        if (!formData.firstName) formErrors.firstName = 'El nombre es requerido.';
        if (!formData.lastName) formErrors.lastName = 'El apellido es requerido.';
        if (!formData.email) {
            formErrors.email = 'El email es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'El email no es válido.';
        }
        if (!formData.message) formErrors.message = 'El mensaje es requerido.';

        return formErrors;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();

        if (Object.keys(formErrors).length === 0) {
            try {
                const templateParams = {
                    from_name: `${formData.firstName} ${formData.lastName}, from: ${formData.email}`,
                    message: formData.message,
                };

                const result = await emailjs.send(
                    'service_xow6oba',  // ID del servicio que obtienes en EmailJS
                    'template_qu5w3mo',  // ID de la plantilla que obtienes en EmailJS
                    templateParams,
                    'cMcLR3g6ULt9leP4t'  // Tu User ID de EmailJS
                );

                console.log("Email sent successfully", result.text);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                });
                setErrors({});
            } catch (error) {
                console.error("Error sending email:", error);
            }
        } else {
            setErrors(formErrors);
        }
    };



    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="firstName">NOMBRE</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="lastName">APELLIDO</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="message">MENSAJE</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button type="submit">ENVIAR</button>
        </form>
    );
}

export default ContactForm;
