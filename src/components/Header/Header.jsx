import reactImg from "../../assets/react-core-concepts.png";
import "../Header/Header.css";

const reactDescriptions = ['Fundamentals', 'Crucial', 'Core'];

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

let number = reactDescriptions[getRandomInt(2)];


function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {number} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

export default Header;