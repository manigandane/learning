import { FC, useState } from "react";
import { leadPacks } from './leadpacks'
import { LeadPack } from './LeadPack';

interface LeadCartProps {
  
}

const LeadCart: FC<LeadCartProps> = () => {
  const [cartItems, setCartItems] = useState<LeadPack[]>([]);

  const addToCart = (leadPack: LeadPack) => {
    if (!cartItems.some(item => item.id === leadPack.id)) {
      setCartItems([...cartItems, leadPack]);
    }    
  };

  const removeFromCart = (leadPack: LeadPack)=>{
    setCartItems(cartItems.filter(item => item.id !== leadPack.id));
  };

  return ( 
    <>
      <h1>Lead Pack Inventory</h1>
      {leadPacks.map((leadPack) => {
        return (
          <div key={leadPack.id}>
            {leadPack.price} 
            <button onClick={() => addToCart(leadPack)}>Add Pack</button>
          </div>          
        )
      })}
      <h1>Lead Pack Cart</h1>
      {cartItems.map((leadPack) => {
        return (
          <div key={leadPack.id}>
            {leadPack.price} 
            <button onClick={() => removeFromCart(leadPack)}>Remove Pack</button>
          </div>          
        )
      })}
    </>
  );
}

export default LeadCart;