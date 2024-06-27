import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';

// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. External
// 2. Modules
// 3. Inline

function App() {
    
    return(
      <>
      <Card/>
      <br/>
      <Button/>
      <Header/>
      <Food/>
      <Footer/>
      </>
    );

}

// video: https://www.youtube.com/watch?app=desktop&v=CgkZ7MvWUAA&ab_channel=BroCode T: 40:03

export default App
