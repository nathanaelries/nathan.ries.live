import React from 'react';
import SectionTitle from './common/SectionTitle';
import ContactForm from './contact/ContactForm';

function ContactDetail({ label, value, href }) {
  const Content = href ? 'a' : 'span';
  const props = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : {};
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{label}</p>
      <Content
        {...props}
        className={`text-base font-medium ${href ? 'text-indigo-700 hover:text-indigo-900 underline-offset-2 hover:underline' : 'text-gray-900'}`}
      >
        {value}
      </Content>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Contact</SectionTitle>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="text-gray-700">
              Best way to reach me is email. I'm open to remote DevOps, Platform,
              and Infrastructure Engineer roles, especially at eDiscovery
              and legaltech companies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactDetail
                label="Email"
                value="nathanael.ries@gmail.com"
                href="mailto:nathanael.ries@gmail.com"
              />
              <ContactDetail
                label="Location"
                value="Tullahoma, TN · Open to Remote"
              />
              <ContactDetail
                label="GitHub"
                value="github.com/nathanaelries"
                href="https://github.com/nathanaelries"
              />
            </div>
            <div className="pt-2">
              <a
                href="/Nathanael_Ries_Resume.pdf"
                download
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
              >
                Download résumé (PDF)
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
