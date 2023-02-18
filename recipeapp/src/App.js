
import About from './About/About';
import './App.css';
import ToDoList from './GroceryList/ToDoList';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Inspiration from './Inspiration/Inspiration';
import Navbar from './Navbar/Navbar';
import RecipeApp from './RecipeApp/RecipeApp';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <RecipeApp/>
      <ToDoList/>
      <About/>
      <Inspiration/>
      <ScrollToTop/>
      <Footer/> 
    </>
  );
}

export default App;
