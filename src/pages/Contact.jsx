import { useState } from 'react';
import ThankYou from './ThankYou';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch('https://formspree.io/f/xvzqweqq', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'aplication/json',
      },
    });
    response.ok ? setSubmitted(true) : '';
  };

  if (submitted) {
    return <ThankYou />;
  }
  return (
    <main>
      <section className='contact-hero'>
        <h1>Get in Touch</h1>
        <p>
          Looking for a clean, reliable website or frontend support? I’m open to
          freelance projects, part-time remote work, and collaborations.
        </p>
      </section>

      <section className='contact-content'>
        <div className='contact-form'>
          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input type='text' placeholder='Your name' required />
            </label>

            <label>
              Email
              <input type='email' placeholder='Your email' required />
            </label>

            <label>
              Message
              <textarea
                rows='5'
                placeholder='Tell me a little about your requirement'
                required
              ></textarea>
            </label>

            <input type='hidden' name='_next' value='/thank-you' />
            <input type='text' name='_gotcha' style={{ display: 'none' }} />
            <button type='submit' className='btn primary'>
              Send Message
            </button>
          </form>
          <p className='form-note'>I usually respond within 24–48 hours.</p>
        </div>

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
