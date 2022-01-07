import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Product from './Components/Product';
import Footer from './Components/Footer';
import Resume from './Components/Resume';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Product/>
      <Footer/>
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
    </div>
  );
}

export default App;