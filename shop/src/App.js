import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Catalog from './components/catalog/Catalog';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

const Data = [
  {
    "url": "https://43.img.avito.st/image/1/1.osUz07a6DiwFeswpe6XSkfNwCCiH8AbugnAKJI94DA.MFfENSylp4GS-ReHfv4Ujcr_RzKJ9spgTGSXFOTiGzU",
    "name": "Porsche Cayenne Turbo, 2022 Новый",
    "price": "23 375 000 ₽"
  },
  {
    "url": "https://67.img.avito.st/image/1/1.5rtpoLa6SlJfCYhXKfv5kqkDTFbdg0KQ2ANOWtULSA.9M0Th29BpHD6ZK9A5lMDz2cr0BGQjCnK24zlPRjLcnQ",
    "name": "BMW X6, 2022 Новый",
    "price": "от 12 786 000 ₽"
  },
  {
    "url": "https://52.img.avito.st/image/1/1.UayW8ra6_UWgWz9AuJ8iglRR-0Ei0fWHJ1H5TSpZ_w.2rAYgdWwqSZsHulUksqfwWWjmrIwXWkiJOKimSxpJ94",
    "name": "Jaguar F-type, 2015",
    "price": "6 950 000 ₽"
  },
  {
    "url": "https://09.img.avito.st/image/1/1.EFO3Oba6vLqBkH6_m0VEd2Gaur4DGrR4Bpq4sguSvg.P1X0EcPy_mZ6IWFxUbx4KcRsvXvlcu9jIX4iqr4tw2A",
    "name": "Rolls-Royce Ghost, 2017",
    "price": "17 085 000 ₽"
  },
  {
    "url": "https://25.img.avito.st/image/1/1.DLpFOra6oFNzk2JWUT5Z0ICZplfxGaiR9JmkW_mRog.kgikIEIvvS03SbQ5a9qBPRYJJ5QYwjRmPwt7OqQvpL8",
    "name": "Dodge Charger, 1969",
    "price": "6 250 000 ₽"
  },
  {
    "url": "https://93.img.avito.st/image/1/1.-FaSb7a6VL-kxpa67miIQUrMUrsmTFx9I8xQty7EVg.DTsnnDp12cvfHLojnhjCwUDy-pqxXsvPmPAjsNcrUac",
    "name": "Tesla Model Y, 2021",
    "price": "4 800 000 ₽"
  },
]


function App() {
  return (
    <>
    <Nav />
    <Header />
    <div className="catalogik">
      {Data.map(item => <Catalog url={item.url} price={item.price} name={item.name}/>)}
    </div>
    </>

  );
}

export default App;
