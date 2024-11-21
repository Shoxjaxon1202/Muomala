import React, { useState } from "react";
import Slider from "react-slick";
import "./consultation.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agree: false,
  });
  const [errors, setErrors] = useState({ name: false, phone: false });
  const [isPhoneComplete, setIsPhoneComplete] = useState(false); // To‘g‘ri raqam to‘liq kiritildimi?

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhoneChange = (value) => {
    // Raqamni yangilash va tekshirish
    if (isPhoneComplete && value.length > formData.phone.length) {
      // To‘liq bo‘lganidan keyin yangi raqam kiritishga yo‘l qo‘ymaslik
      return;
    }

    setFormData({ ...formData, phone: value });

    if (!value || !isValidPhoneNumber(value)) {
      setErrors((prev) => ({ ...prev, phone: true }));
      setIsPhoneComplete(false);
    } else {
      setErrors((prev) => ({ ...prev, phone: false }));
      setIsPhoneComplete(true); // To‘g‘ri va to‘liq kiritilgan
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, agree } = formData;
    const token = "7232269128:AAHZIjx7GIn1Sr8A413W7VMysW4m24r1EJo";

    let hasError = false;

    // Name validation
    if (name.trim() === "") {
      setErrors((prev) => ({ ...prev, name: true }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, name: false }));
    }

    // Phone validation
    if (!phone || !isValidPhoneNumber(phone)) {
      setErrors((prev) => ({ ...prev, phone: true }));
      hasError = true;
    } else {
      setErrors((prev) => ({ ...prev, phone: false }));
    }

    // Agree validation
    if (!agree) {
      toast.error("Please agree to the terms before submitting.");
      return;
    }

    if (!hasError && agree) {
      try {
        const response = await fetch(
          `https://api.telegram.org/bot${token}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: "6575316231", // To'g'ri chat_id ni tekshirib ko'ring
              text: `New Consultation Request:\nName: ${name}\nPhone: ${phone}`,
            }),
          }
        );

        if (response.ok) {
          toast.success("Your request has been sent successfully!");
          setFormData({ name: "", phone: "", agree: false });
          setIsPhoneComplete(false); // Reset holatiga qaytarish
        } else {
          throw new Error("Failed to send the request.");
        }
      } catch (error) {
        toast.error("Failed to send the request. Please try again.");
      }
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="consultation">
      <div className="consultation_wrapper">
        <div className="consultation__left">
          <Slider {...settings}>
            <div className="consultation__card">
              <h3 className="consultation__title">
                Workshops and Spiritual Development
              </h3>
              <p className="consultation__text">
                Participate in our weekly workshops focused on Islamic studies
                and spiritual growth. These sessions are designed to help you
                strengthen your connection with faith and acquire essential
                skills for daily life.
              </p>
            </div>
          </Slider>
        </div>
        <div className="consultation__right">
          <h2 className="consultation__heading">Free consultation</h2>
          <p className="consultation__description">
            Leave your phone number, and we will reach out to provide you with
            complete information about our courses.
          </p>
          <form className="consultation__form" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`consultation__input ${
                errors.name ? "consultation__input--error" : ""
              }`}
            />

            {/* Phone Input with international support */}
            <div className="phone_box">
              <PhoneInput
                international
                defaultCountry="UZ"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={`consultation_phone ${
                  errors.phone ? "consultation__input--error" : ""
                }`}
              />
              {errors.phone && (
                <span className="error-message">
                  Enter a valid phone number
                </span>
              )}
            </div>

            <label className="consultation__checkbox-label">
              <input
                required
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="consultation__checkbox"
              />
              I agree to the use of my personal information for consultation
              purposes.
            </label>

            <button type="submit" className="consultation__submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Consultation;
