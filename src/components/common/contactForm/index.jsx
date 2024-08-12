import { useState } from 'react';
import styles from './styles.module.scss';
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
                await emailjs.send(
                    'service_xow6oba',
                    'template_qu5w3mo',
                    templateParams,
                    'cMcLR3g6ULt9leP4t'
                );
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
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Nombre"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
            </div>

            <div className={styles.formGroup}>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Apellido"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
            </div>

            <div className={styles.formGroup}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.formGroup}>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <p className={styles.error}>{errors.message}</p>}
            </div>

            <button type="submit" className={styles.submitButton}>ENVIAR</button>
        </form>
    );
}

export default ContactForm;
