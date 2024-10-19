// import a css file containig welcome styles

// Create a Welcome function returning the HTML of welcome block

// Add a default export statement for Welcome component to use it in the other files
// Import a css file containing welcome styles
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 className="welcome__text">Sticky Header!</h1>
    </div>
  );
};

// Add a default export statement for Welcome component to use it in the other files
export default Welcome;
