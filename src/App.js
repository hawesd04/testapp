import './App.css';
import SplitText from "./Splittext.js";
import FallingText from './FallingText';
import FlyingPosters from './FlyingPosters'


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const items = [
  'gam.png',  
  'gab.png', 
  'gimgam.png',
  'uhmimgood.png',
  'fucker.png',
  'dilly.png'
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"gamcir.png"} className="App-logo" alt="gamcir.png" />

          <SplitText
            text="It's Grass Time!"
            className="split"
            delay={10}
            duration={2}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <FallingText
            text={`grass grass grass gam grass gramn grass gam graaass grass grass grass GRASS grass grass grass grass grass gam grass gramn grass gam graaass grass grass grass `}
            highlightWords={["GRASS"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
          />
          <div>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Outdoor_recreation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Touch Grass Here!
          </a>
        </div>
      </header>
        <div 
          className="flying"
          style={{ height: '600px', position: 'relative' }}>
          <FlyingPosters items={items}/>
        </div>
        <video
          src="applebees.mp4"
        >

        </video>
    </div>
  );
}

export default App;
