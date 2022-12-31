import './App.css';
import Header from './components/Header';
import CityCard from './components/CityCard';
import About from './components/About';
import Contact from './components/Contact';
import CityDetails from './components/CityDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  const user = {
    firstName: "Albert",
    avatarUrl:"https://picsum.photos/200/300"
  }

  const cities = [
    {
      key: 1,
      cityName:"London",
      population:"10M",
      imageUrl:"https://www.latitudeslife.com/wp-content/uploads/2011/12/london-city.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus quis urna a suscipit. In sed odio est. Nullam in ante sit amet magna ultricies tempor. Aenean sed eros quis lorem commodo condimentum sit amet vitae justo. Etiam malesuada, odio sit amet lacinia gravida, sem arcu porta urna, non egestas sapien arcu vitae mi. Maecenas cursus dolor a diam interdum bibendum. Sed maximus libero sit amet orci feugiat faucibus. In hac habitasse platea dictumst."
    },
    {
      key: 2,
      cityName:"Bangkok",
      population:"8M",
      imageUrl:"https://www.npo3.nl/uploads/media_item/media_item/436/81/5f828a8e-21e3-4d24-96a4-1c551c747fce_widescreen_large-1605104668.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus quis urna a suscipit. In sed odio est. Nullam in ante sit amet magna ultricies tempor. Aenean sed eros quis lorem commodo condimentum sit amet vitae justo. Etiam malesuada, odio sit amet lacinia gravida, sem arcu porta urna, non egestas sapien arcu vitae mi. Maecenas cursus dolor a diam interdum bibendum. Sed maximus libero sit amet orci feugiat faucibus. In hac habitasse platea dictumst."
    },
    {
      key: 3,
      cityName:"Tokyo",
      population:"8M",
      imageUrl:"https://tokyo.nl/wp-content/uploads/2020/01/tokyo-akihabara-neon-reclame-1024x683.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus quis urna a suscipit. In sed odio est. Nullam in ante sit amet magna ultricies tempor. Aenean sed eros quis lorem commodo condimentum sit amet vitae justo. Etiam malesuada, odio sit amet lacinia gravida, sem arcu porta urna, non egestas sapien arcu vitae mi. Maecenas cursus dolor a diam interdum bibendum. Sed maximus libero sit amet orci feugiat faucibus. In hac habitasse platea dictumst."
    },
    {
      key: 4,
      cityName:"Vienna",
      population:"8M",
      imageUrl:"https://www.travelandleisure.com/thmb/ATViCCypzN-fAQAorsq3sjshP3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/vienna-austria-VIENNATG0621-ecb0ee926c2d49c4bce610db594f7405.jpg",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus quis urna a suscipit. In sed odio est. Nullam in ante sit amet magna ultricies tempor. Aenean sed eros quis lorem commodo condimentum sit amet vitae justo. Etiam malesuada, odio sit amet lacinia gravida, sem arcu porta urna, non egestas sapien arcu vitae mi. Maecenas cursus dolor a diam interdum bibendum. Sed maximus libero sit amet orci feugiat faucibus. In hac habitasse platea dictumst."
    }
  ]



  return (
    <div>
      <BrowserRouter>
        <Header user={user}/>
        
      
      <Routes>
        <Route path="/" element={
          <div className="cities-container">
          {
            cities.map(city => {
              return <CityCard city={city} />
            })
          }
        
        </div>

        } />
        
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/contactus" element={<Contact/>}/>
      <Route path="/citydetails/:cityName" element={<CityDetails cities={cities}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
