import "./App.css";
import Memory from "./assets/icon-memory.svg";
import Reaction from "./assets/icon-reaction.svg";
import Verbal from "./assets/icon-verbal.svg";
import Visual from "./assets/icon-visual.svg";

function App() {
  return (
    <body>
      <div className="first-layout">
        <h1>Your Result</h1>
        <div className="middle-layout">
          <div>76 </div>
          of 100
        </div>
        <div className="footer-layout">
          Great
          <p>
            You secored higher than 65% of the people who have taken these
            tests.
          </p>
        </div>
      </div>
      <div className="second-layout">
        <h1>Summary</h1>
        <div className="section-one">
          <span>
            <img src={Reaction} alt="" /> Reaction
          </span>
          <span>80 / 100</span>
        </div>
        <div className="section-two">
          <span>
            <img src={Memory} alt="" /> Memory
          </span>
          <span>92 / 100</span>
        </div>
        <div className="section-three">
          <span>
            <img src={Verbal} alt="" /> Verbal
          </span>
          <span>61 / 100</span>
        </div>
        <div className="section-four">
          <span>
            <img src={Visual} alt="" /> Visual
          </span>
          <span>72 / 100</span>
        </div>
        <button className="button-layout">Continue</button>
      </div>
    </body>
  );
}

export default App;
