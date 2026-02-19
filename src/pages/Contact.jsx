const Contact = () => {
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
        {/* Contact Form */}
        <div className='contact-form'>
          <h2>Send a Message</h2>

          <form action='https://formspree.io/f/xvzqweqq' method='POST'>
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
            {/* for spam protection */}
            <input type='text' name='_gotcha' style={{ display: 'none' }} />

            <button type='submit' className='btn primary'>
              Send Message
            </button>
          </form>

          <p className='form-note'>I usually respond within 24–48 hours.</p>
        </div>

        {/* Contact Info */}
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
