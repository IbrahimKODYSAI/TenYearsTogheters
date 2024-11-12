import logo from "/logo.jpg";
import "./style.css";

function Intro() {
  return (
    <div className="tab intro">
      <h2 className="animation-show"></h2>
      <img src="/file.png" alt="Logo" className="animation-show" />
      <p className="animation-show">
        Je te laisse admirer cette petite sélection de moments passés ensemble.
        Nous avons passés de merveilleux moments ensemble et j'espère qu'on en
        aura de nombreux à vivre encore ensemble.
      </p>
    </div>
  );
}

export default Intro;
