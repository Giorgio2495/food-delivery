import { HomeRounded, PersonOutlineOutlined, RestoreOutlined, SearchOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './App.css';
import BannerName from './components/BannerName';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import MenuContainer from './components/MenuContainer';
import SubMenuContainer from './components/SubMenuContainer';
import DebitCard from './components/DebitCard.jsx'
import ItemCard from './components/ItemCard';
import CarItem from './components/CarItem';
import portada from './images/portada.png.png';
import portada1 from './images/portada1.png';
import { MenuItems, Items } from './components/Data.jsx';


function App() {
  //Main Dish State
  const [isMainData, setMainData] = useState(
    
    // eslint-disable-next-line eqeqeq
    Items.filter((element) => element.itemId == 'buger01')
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener('click', setMenuActive));

    //Menu card active toggle

    const menuCard = document.querySelector('.rowContainer')
    .querySelectorAll('.rowMenuCard');

    function setMenuCardActive() {
      menuCard.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  //set main dish items on filter
  const setData = (itemId) => {
    // eslint-disable-next-line eqeqeq
    setMainData (Items.filter((element) => element.itemId == itemId))
  };

  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/*Main Container */}

      <main>
        <div className='mainContainer'>
          {/* Banner */}
            <BannerName />
            <img 
            src={portada} 
            alt=''
            className='deliveryPic'
            />
            <img
            src={portada1}
            alt=''
            className='deliveryPic1'
            />
        </div>

        {/* dishContainer*/}
        <div className='dishContainer'>
          <div className='menuCard'>
            <SubMenuContainer name={"Menu Category"}/> 
          </div>
          <div className='rowContainer'>

            {MenuItems && MenuItems.map((data) => (
                <div key={data.id} onClick = {() => setData(data.itemId)}
                 >
              <MenuCard 
              imgSrc={data.imgSrc} 
              name={data.name} 
              name1={data.name1} 
              name2={data.name2} 
              // eslint-disable-next-line eqeqeq
              isActive  ={data.id == 1 ? true : false} />
            </div>
              ))}
          
          </div>
          <div className='dishitemContainer'>
            {
              isMainData && isMainData.map((data) => (
                <ItemCard 
                key={data.id}
                itemId = {data.id}
                imgSrc={data.imgSrc} 
                name={data.name} 
                ratings={data.ratings} 
                price={data.price}/>
              ))}
            
          </div>

        </div>
        <div className='rightMenu'>
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard />
            </div>
          </div>
          
          <div className='cartCheckOutContainer'>
          <SubMenuContainer name={"Carts Items"} />
          <div className='cartContainer'>
             
            
            <div className='cartItems'>
              <CarItem 
              name={'Burger Bristo'}
              imgSrc={''}
              qty = {'4'}
              price = {'7.95'}
              />
              </div>
            </div>
                <div className='totalSection'>
                  <h3>Total</h3>
                  <p><span>$ </span>45.0</p>
                </div>

                <button className='checkOut'>Check Out</button>
          </div>
        </div>
      </main>

      {/*Bottom Menu */}

      <div className='bottomMenu'>
        <ul id='menu'>
          {/* prettier ignore */}
          <MenuContainer link={'#'} icon = {<HomeRounded />} isHome/>
           {/* prettier ignore */}
           <MenuContainer link={'#'} icon = {<SearchOutlined />} />
            {/* prettier ignore */}
          <MenuContainer link={'#'} icon = {<RestoreOutlined />} />
           {/* prettier ignore */}
           <MenuContainer link={'#'} icon = {<PersonOutlineOutlined />} />
        </ul>
      </div>
  
    </div>
  );
}

export default App;