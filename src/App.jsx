import './App.css';
import './font/font.css';
import Card from './Card'
import Hero from './Hero'

function App() {
  return (
    <div className="App">
      <Hero />
      <div className='sungba' style={{fontFamily: 'Adamina',}}>
        <Card 
        foodName= "Abacha"
        img= "./img/abacha.JPG"
        price="500"
        />
        <Card 
          foodName= "Asaro"
          img= "./img/asaro1.JPG"
          price="1000"
        />
        <Card 
          foodName= "Beans & Bread"
          img= "./img/beans+bread.JPG"
          price="1500"
        />
        <Card 
          foodName= "Rice & Egusi"
          img= "./img/rice+egusi.JPG"
          price="3500"
        />
        <Card 
          foodName= "Plantain & Egg"
          img= "./img/plant+egg.JPG"
          price="1500"
        />
        <Card 
          foodName= "Pounded Yam & Egusi"
          img= "../img/pounded-yam&egusi.JPG"
          price="5000"
        />
        <Card 
          foodName= "Yam & Vegetable"
          img= "./img/yam+veg.JPG"
          price="3500"
        />
        <Card 
          foodName= "Puff-Puff"
          img= "./img/pofpof1.JPG"
          price="2500"
        />
      </div>
    </div>
  );
}

export default App;
