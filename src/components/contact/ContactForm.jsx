import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import SubmitButton from './SubmitButton';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:nathanael.ries+work@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormTextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <SubmitButton />
    </form>
  );
}

export default ContactForm;