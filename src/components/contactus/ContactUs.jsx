import "./ContactUs.css";
const ContactUs = () => {
  function sendData(){
    alert('Your Reponse has sent. JambiMony will get back to you.')
  }
  return (
    <div className="contactUs_container">
      <h3>Message Us</h3>
      <div className="form-container">
        <div className="row-input">
          <div className="form_parent">
            <input
              type="text"
              aria-label="name"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="form_parent">
            <input
              type="text"
              aria-label="name"
              id="email"
              required
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div className="form_parent">
          <input
            type="text"
            aria-label="name"
            id="subject"
            required
            placeholder="Subject"
          />
        </div>
        <div className="form_parent">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            aria-label="message"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button className="btn" id="submt"  onClick={sendData}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
