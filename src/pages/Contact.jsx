import { useState } from 'react';
import ThankYou from './ThankYou';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(e.target);

    const response = await fetch(
      `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'aplication/json',
        },
      },
    );

    response.ok ? setSubmitted(true) : '';
  };

  return submitted ? (
    <ThankYou />
  ) : (
    <main>
      <section className='contact-hero'>
        <h1>Get in Touch</h1>
        <p>
          Looking for a clean, reliable website or frontend support? I’m open to
          freelance projects, part-time remote work, and collaborations.
        </p>
      </section>

      <section className='contact-content'>
        {<ContactForm handleSubmit={handleSubmit} />}
        <div className='contact-info'>
          <h2>Contact Details</h2>

          <p>
            📍 Chennai, India <br />
            🕒 Available for remote work (flexible hours)
          </p>

          <p>
            📧 <strong>Email:</strong>
            <br />
            radhikabhuth@gmail.com
          </p>

          <p>
            💬 <strong>WhatsApp:</strong>
            <br />
            <a
              href='https://wa.me/919841560904'
              target='_blank'
              rel='noreferrer'
            >
              Message me on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
