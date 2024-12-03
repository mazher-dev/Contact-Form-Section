import React from 'react';
import './Contact.css';


const Contact4 = () => {
  return (
    <div className='contact'>    

      <div className="content-sections">
        <div className='left-sectionn'>
          <div className="contact-form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  className="input-field"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  className="input-field"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="input-field"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button className="submit-button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

    
         
      </div>
    </div>
  );
};

export default Contact4;