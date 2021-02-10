import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';

const App = () => {

  const styles = {
    container: {
      padding: 20
      , backgroundColor: new Date().getSeconds() % 2 == 0 ? "lightblue" : "pink"
    }
    , heading: {
      textTransform: "uppercase"
    }
  };


  return (
    <div
      style={styles.container}
    >
      <h1
        style={styles.heading}
      >
        Hello React ! ! !
      </h1>
      <Greeting name="Karly" favoriteNumber={9} favoriteColors={["Red", "Purple", "Green", "Red"]} />
      <Greeting name="Mike" favoriteNumber={42} />
      <Greeting name="Rod" favoriteNumber={43} />
      {/* <Greeting name="Brandon" favoriteNumber={3} /> */}
    </div>
  );
}

export default App;
