import "./services.scss";
import rasm1 from "../../../assets/img/Islamic finance icon.png";
import rasm2 from "../../../assets/img/International cooperation.png";
import rasm3 from "../../../assets/img/Islamic finance icon.png";
import rasm4 from "../../../assets/img/Islamic finance icon.png";
import rasm5 from "../../../assets/img/Islamic finance icon.png";
import rasm6 from "../../../assets/img/International cooperation.png";

function Services() {
  return (
    <div className="services">
      <div className="services_wrapper">
        <h2 className="services_title">Our services</h2>
        <p className="services_subtitle">
          Expert guidance for managing funds in alignment with Islamic
          principles, helping you make informed, halal investment decisions.
        </p>
        <div className="services_grid">
          <div className="service_card service_card--blue">
            <div className="services_top">
              <img
                src={rasm1}
                alt="Islamic Fund Management"
                className="service_card_image"
              />
              <h3 className="service_card_title">Islamic Fund Management</h3>
            </div>
            <p className="service_card_description">
              We assist retail and institutional clients in managing their funds
              in accordance with Islamic principles, providing practical advice
              for making halal investments.
            </p>
            <button className="service_card_button">Learn more</button>
          </div>
          <div className="service_card service_card--green">
            <div className="services_top">
              <img
                src={rasm6}
                alt="Islamic Fund Management"
                className="service_card_image"
              />
              <h3 className="service_card_title">International Relations</h3>
            </div>
            <p className="service_card_description">
              We establish connections with local and international
              organizations to promote Islamic financial systems and create
              partnerships that support financial inclusion.
            </p>
            <button className="service_card_button">Learn more</button>
          </div>
          <div className="service_card service_card--pink">
            <div className="services_top">
              <img
                src={rasm2}
                alt="Education and Training"
                className="service_card_image"
              />
              <h3 className="service_card_title">Education and Training</h3>
            </div>
            <p className="service_card_description">
              We offer short-term training courses, seminars, and conferences
              conducted by experts, along with study tours to leading Islamic
              financial institutions.
            </p>
            <button className="service_card_button">Learn more</button>
          </div>
          <div className="service_card service_card--purple">
            <div className="services_top">
              <img
                src={rasm3}
                alt="For Islamic Banks"
                className="service_card_image"
              />
              <h3 className="service_card_title">For Islamic Banks</h3>
            </div>
            <p className="service_card_description">
              We provide experienced consulting on the establishment and
              management of Islamic banks and branches. We support the
              development of competitive financial products and services based
              on Shariah principles.
            </p>
            <button className="service_card_button">Learn more</button>
          </div>
          <div className="service_card service_card--teal">
            <div className="services_top">
              <img
                src={rasm4}
                alt="Islamic Capital Market"
                className="service_card_image"
              />
              <h3 className="service_card_title">Islamic Capital Market</h3>
            </div>
            <p className="service_card_description">
              We provide expert advice on the Islamic capital market, including
              Shariah-compliant investment products, sukuk issuance, and ethical
              portfolio management.
            </p>
            <button className="service_card_button">Learn more</button>
          </div>
          <div className="service_card service_card--yellow">
            <div className="services_top">
              <img
                src={rasm5}
                alt="Shariah Compliance Audit"
                className="service_card_image"
              />
              <h3 className="service_card_title">Shariah Compliance Audit</h3>
            </div>
            <p className="service_card_description">
              We provide Shariah supervision and audit services, examining the
              compliance of business models with Shariah principles.
            </p>
            <button className="service_card_button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
