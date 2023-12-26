import CardItem from "./CardItem";
import "./Cards.css";
import image1 from "../images/img-1.jpg";
import image2 from "../images/img-2.jpg";
import image3 from "../images/img-3.jpg";
import image4 from "../images/img-4.jpg";
import image5 from "../images/img-5.jpg";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Checkout solutions we provide!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="Environmental Solutions for businesses who create environment"
              label="Sustainability"
              path="/services"
            />
            <CardItem
              src={image2}
              text="Analysis and solutions for your complex business issues"
              label="Operation and Business"
              path="/services"
            />
            <CardItem
              src={image3}
              text="Engineering Solutions for varieties of different sectors"
              label="Engineering and Scientific"
              path="/services"
            />
            <CardItem
              src={image4}
              text="Digital Solutions for your different business units"
              label="Digitalization"
              path="/services"
            />
            <CardItem
              src={image5}
              text="AI support and fastest and the most clever solutions"
              label="Artificial Intelligence"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
