import html from "../../assets/icon/html.svg";
import css from "../../assets/icon/css.svg";
import javascript from "../../assets/icon/JavaScript.svg";
import kotlin from "../../assets/icon/kotlin.svg";
import react from "../../assets/icon/React.svg";
import git from "../../assets/icon/Git.svg";
import figma from "../../assets/icon/Figma.svg";

const image = [
  { img: html },
  { img: css },
  { img: javascript },
  { img: kotlin },
  { img: react },
  { img: git },
  { img: figma },
];

const Header = () => {
  return (
    <div className="container header">
      <div className="main-content">
        <div className="left-content">
          <h1 className="title-header">
            Android, Web Developer, and UI/UX Designers
          </h1>
          <p className="desc-header">
            Hello, I'm Fajar Ari Nugraha, a passionate Android and Front-end
            React Developer, as well as a UI/UX Designer based in Indonesia.
            Welcome to my portfolio, where I showcase my diverse skills and
            creative work. Explore my projects and experiences to get a glimpse
            of my journey in the world of digital development and design.
          </p>
          <div className="sosmed-wrapper">
            <a href="https://www.linkedin.com/in/fanugraha/">
              <img src="src\assets\icon\linkedin.svg" alt="" />
            </a>
            <a href="https://github.com/fanugraha">
              <img src="src\assets\icon\github.svg" alt="" />
            </a>
            <a href="https://www.behance.net/fajarari2">
              <img src="src\assets\icon\behance.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="right-content">
          <img src="src\assets\icon\fajar.svg" alt="" />
        </div>
      </div>
      <div className="tech-stack">
        <h1 className="title-content">Tech Stack</h1>
        <div className="stack-wrapper">
          {image.map((item, index) => (
            <img key={index} src={item.img}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
