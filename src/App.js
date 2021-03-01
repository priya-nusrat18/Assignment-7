import React, { useEffect, useState } from 'react';
import './App.css';
import AddInfo from './COMPONENT/ADDINFO/AddInfo';
import Cards from './COMPONENT/CARD/Cards';
import Cart from './COMPONENT/CARD/CART/Cart';
import teamData from './data/data.json';

function App() {
  const [team, setTeam] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    setTeam(teamData);
  }, [])

  const handleAddMember = (team) => {
    const newCart=[...cart , team];
    setCart(newCart)

  };

  return (
    <div className="App">
      <h1 className="title">Total Member:{team.length}</h1>
      <div className="team-container">
        <div className="member-info">
      {
        teamData.map( team => <Cards handleAddMember={handleAddMember} team = {team} key={team.id}></Cards> )
      }
      </div> 
      <div className="cart-container">
           <Cart cart ={cart}></Cart>
           {
             cart.map( info=> <AddInfo key={info.id} info={info}></AddInfo>)
            
           }
          
      </div>
      </div>
    </div>
  );
}

export default App;
