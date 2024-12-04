import styles from "./contact8.module.css";

function Contact8() {
  return (
    <div className="main">
      <div className={styles.contactForm}>
        <div className={styles.firstContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.contactItem}>
              <h3>Address</h3>
              <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Let's Talk</h3>
              <p>+1 800 1236879</p>
            </div>
            <div className={styles.contactItem}>
              <h3>General Support</h3>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
        <div className={styles.secondContainer}>
          <h2>Send Us A Message</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name-input">Tell us your name*</label>
              <div className="flex p-0 gap-2">
                <input
                  id="name-input"
                  type="text"
                  placeholder="First name"
                  required
                />
                <input type="text" placeholder="Last name" required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email-input">Enter your email*</label>
              <input
                id="email-input"
                type="email"
                placeholder="Eg. example@email.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone-input">Enter phone number*</label>
              <input
                id="phone-input"
                type="text"
                placeholder="Eg. +1 800 000000"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message-textarea">Message</label>
              <textarea
                id="message-textarea"
                
                placeholder="Write us a message"
              />
            </div>
            <button className="subm" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact8;
