import { Link } from "react-router-dom";
import "./style.css";

function Library() {
  return (
    <div>
      <div className="tab library2">
        <div className="animation-show ml-4">
          <img src="/gif1.gif" alt="Image 9" className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="/zda.PNG" alt="Image 10 " className="rounded-xl" />
        </div>

        <div className="animation-show">
          <img src="/assia3.jpg" alt="Image 11 " className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="/Assia&Me1.PNG" alt="Image 12 " className="rounded-xl" />
        </div>
      </div>
      <div className="tab library2">
        <div className="animation-show ml-4">
          <img src="/Caééeéepture.PNG" alt="Image 9 " className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="/plo1.jpg" alt="Image 10 " className="rounded-xl" />
        </div>

        <div className="animation-show">
          <img src="/us1.jpg" alt="Image 11 " className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="/gif2.gif" alt="Image 12 " className="rounded-xl" />
        </div>
      </div>
      <div className="tab library">
        <div className="animation-show ml-4">
          <img src="/Capaeatuare.PNG" alt="Image 9 " className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="/assia1.jpg" alt="Image 10 " className="rounded-xl" />
        </div>

        <div className="animation-show">
          <img src="/skype1.PNG" alt="Image 11 " className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="/ure.PNG" alt="Image 12 " className="rounded-xl" />
        </div>
      </div>
      <div className="tab library2">
        <div className="animation-show ml-4">
          <img src="/assia8.PNG" alt="Image 9 " className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="assia.png" alt="Image 10 " className="rounded-xl" />
        </div>

        <div className="animation-show">
          <img src="/photo2.JPG" alt="Image 11 " className="rounded-xl" />
        </div>
        <div className="animation-show">
          <img src="/photo5.PNG" alt="Image 12 " className="rounded-xl" />
        </div>
      </div>
      <div className="flex justify-center py-12 bg-[#210002]">
        <div className="m-auto">
          <img src="/gif3.gif" alt="Image 9 " className="rounded-xl" />
        </div>
      </div>
      <div className="justify-center flex bg-[#210002] p-12">
        <Link to="/videoforyou">
          <button className="border rounded-lg p-4  btnx">Continuer</button>
        </Link>
      </div>
    </div>
  );
}

export default Library;
