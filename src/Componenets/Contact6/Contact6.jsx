import React, { useState } from "react";
import styles from "./Contact6.module.css"; // Ensure your CSS file is properly configured

const validators = {
  name: (value) => value.trim().length >= 2,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  message: (value) => value.trim().length >= 10,
};

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const Contact6 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    dataConsent: false,
    marketing: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const validateField = debounce((field, value) => {
    const validator = validators[field];
    if (validator) {
      setErrors((prev) => ({
        ...prev,
        [field]: !validator(value),
      }));
    }
  }, 300);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    validateField(name, fieldValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = {};

    Object.entries(validators).forEach(([field, validate]) => {
      const isValid = validate(formData[field]);
      newErrors[field] = !isValid;
      if (!isValid) hasErrors = true;
    });

    if (!formData.dataConsent) {
      newErrors.dataConsent = true;
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      setSuccessMessage(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        dataConsent: false,
        marketing: false,
      });
      setTimeout(() => setSuccessMessage(false), 5000);
    }
  };

  return (
    <div className={styles["form-container"]}>
      {successMessage && (
        <div className={styles["success-message"]}>
          Thank you! Your form has been submitted successfully.
        </div>
      )}
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles["form-group"]}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && (
            <div className={styles["error-message"]}>
              Name must be at least 2 characters.
            </div>
          )}
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && (
            <div className={styles["error-message"]}>
              Please enter a valid email.
            </div>
          )}
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          {errors.message && (
            <div className={styles["error-message"]}>
              Message must be at least 10 characters.
            </div>
          )}
        </div>

        <div className={styles["checkbox-group"]}>
          <input
            type="checkbox"
            id="dataConsent"
            name="dataConsent"
            checked={formData.dataConsent}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="dataConsent">
            I consent to storing my submitted information for inquiry purposes.
          </label>
          {errors.dataConsent && (
            <div className={styles["error-message"]}>Consent is required.</div>
          )}
        </div>

        <div className={styles["checkbox-group"]}>
          <input
            type="checkbox"
            id="marketing"
            name="marketing"
            checked={formData.marketing}
            onChange={handleInputChange}
          />
          <label htmlFor="marketing">
            I would like to receive marketing updates.
          </label>
        </div>

        <button type="submit" className={styles["submit-button"]}>
          Submit Form
        </button>
        <div className={styles["privacy-notice"]}>
          <p>* Required fields</p>
          <p>
            Your personal data will be used in accordance with our privacy
            policy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact6;
