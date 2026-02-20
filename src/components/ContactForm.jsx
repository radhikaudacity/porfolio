const ContactForm = ({ handleSubmit }) => {
  return (
    <div className='contact-form'>
      <h2>Send a Message</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' placeholder='Your name' required name='name' />
        </label>

        <label>
          Email
          <input
            type='email'
            placeholder='Your email'
            required
            name='email'
            pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
            title='Please enter a valid email address (example: name@email.com)'
          />
        </label>

        <label>
          Message
          <textarea
            rows='5'
            placeholder='Tell me a little about your requirement'
            required
            name='message'
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
  );
};

export default ContactForm;
