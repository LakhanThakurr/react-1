import React from "react";
import './Contact.css';
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact-hero">
            <div className="wrapper">
                <div className="title">
                    <h1>contact us form</h1>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-fields">
                            <input
                                type="text"
                                className="input"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="msg">
                            <textarea
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit" className="btn">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Contact;