import image1 from "./assets/1.jpeg";
import image2 from "./assets/2.jpeg";
import image3 from "./assets/3.jpeg";
import image4 from "./assets/4.jpeg";
import image5 from "./assets/5.jpeg";
import image6 from "./assets/6.jpeg";
import image7 from "./assets/7.jpeg";
import image8 from "./assets/8.jpeg";
import useScript from "./use-script";
import "./App.css";

function App() {
  console.log("hereeeeee");
  // const status = useScript(require('./script.js'));

  return (
    <div>
      {
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
          <img alt="" className="image" src={image1} draggable="false" />
          <img alt="" className="image" src={image2} draggable="false" />
          <img alt="" className="image" src={image3} draggable="false" />
          <img alt="" className="image" src={image4} draggable="false" />
          <img alt="" className="image" src={image5} draggable="false" />
          <img alt="" className="image" src={image6} draggable="false" />
          <img alt="" className="image" src={image7} draggable="false" />
          <img alt="" className="image" src={image8} draggable="false" />
        </div>
      }
    </div>
  );
}

export default App;
