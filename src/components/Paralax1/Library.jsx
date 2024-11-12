import { Link } from "react-router-dom";
import "./style.css";

function Library() {
  return (
    <div>
      <div className="tab library2">
        <div className="animation-show ml-4">
          <img src="/gif1.gif" alt="Image 9" />
        </div>
        <div className="animation-show">
          <img src="/zda.PNG" alt="Image 10" />
        </div>

        <div className="animation-show">
          <img src="/assia3.jpg" alt="Image 11" />
        </div>
        <div className="animation-show">
          <img src="/Assia&Me1.PNG" alt="Image 12" />
        </div>
      </div>
      <div className="tab library2">
        <div className="animation-show ml-4">
          <img src="/Caééeéepture.PNG" alt="Image 9" />
        </div>
        <div className="animation-show">
          <img src="/plo1.jpg" alt="Image 10" />
        </div>

        <div className="animation-show">
          <img src="/us1.jpg" alt="Image 11" />
        </div>
        <div className="animation-show">
          <img src="/gif2.gif" alt="Image 12" />
        </div>
      </div>
      <div className="tab library pb-12">
        <div className="animation-show ml-4">
          <img src="/Capaeatuare.PNG" alt="Image 9" />
        </div>
        <div className="animation-show">
          <img src="/assia1.jpg" alt="Image 10" />
        </div>

        <div className="animation-show">
          <img src="/skype1.PNG" alt="Image 11" className="h-[20%] w-[100px]" />
        </div>
        <div className="animation-show">
          <img src="/ure.PNG" alt="Image 12" />
        </div>
      </div>
      <div className="justify-center flex bg-[#210002] p-12">
        <Link to="/TenYearsTogheters/videoforyou">
          <button className="border rounded-lg p-4">Continuer</button>
        </Link>
      </div>
    </div>
  );
}

export default Library;
