import React from 'react';
import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi'; // Importing icons
import './styles/Contact.css';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-details">
                <p>
                    <FiPhone className="contact-icon" /> {/* Phone Icon */}

                    <a href="tel:+1234567890" className="contact-link"> +91 7822991092</a>
                </p>
                <p>
                    <FiMail className="contact-icon" /> {/* Email Icon */}

                    <a href="mailto:yourname@example.com" className="contact-link"> ankitasawant22123071.com</a>
                </p>
                <p>
                    <FiLinkedin className="contact-icon" /> {/* LinkedIn Icon */}

                    <a
                        href="https://www.linkedin.com/in/ankita-sawant-41a4612a2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        https://www.linkedin.com/in/ankita-sawant-41a4612a2
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Contact;
