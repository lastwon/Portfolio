import React from "react";

import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="numbered-heading project-overline">What's Next?</h2>
      <h2 className="contact-title">Get In Touch</h2>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a className="big_button" href="">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
