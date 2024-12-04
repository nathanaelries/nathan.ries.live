import React from 'react';
import SectionTitle from './common/SectionTitle';
import ContactForm from './contact/ContactForm';

function Contact() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Contact</SectionTitle>
        <div className="mt-10 max-w-lg mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;