import React from 'react'
import Remove from '../img/remove.svg'

export const Drawer =({onCloseCart,items=[]})=>{
    let discount = 0;
    const calcFunction = (x,y)=>{
        for(let i =1; i<=y;i++){
            if(i%3==0){
                discount++
            }
        }
        let result = x*y-(discount*5)
        discount=0
        return result
    }

    let totalFunction=(arr)=>{
        let total =0
        for(let i =0;i<arr.length;i++){
            let x = arr[i].prise
            let y = arr[i].valueKg
            let discount = 0;
                for(let i =1; i<=y;i++){
                    if(i%3==0){
                        discount++
                    }
                }
                let result = x*y-(discount*5)
                total+=result
                discount=0
            }
            return total
        }

        const [cartItems, setCartItems] = React.useState(items)

        const onRemoveItem =(id)=>{
            const index =items.findIndex((el)=>el.id===id);
            items.splice(index,1)
            setCartItems([...cartItems])
        }
    return(
        <div className="overlane" >
             <div className="drawer">
                 <div className='navigation'>
                     <h2>Basket</h2>
                     <button className='close' onClick={onCloseCart}>Close</button>
                     </div>
                <div className="items">
                    {items.map((obj)=>(
                               <div className="cartItem">
                               <img className="fruit" src={obj.imgFruit}/>
                               <div className="prise">
                               <h3>{obj.title}</h3>
                               <div className='cartItems-title'>
                                   <span>Prise:{" "+calcFunction(obj.prise,obj.valueKg)}$</span>
                                   <span>Weight:{" "+obj.valueKg}kg</span>
                                </div>
                               </div>
                               <img className="remove" onClick={()=>onRemoveItem(obj.id)} src={Remove} alt="Remove" />
                           </div>
                    ))}
                    
                </div>
                <ul className="totalBlock">
                    <li>
                        <span>Total:</span>
                        <div></div>
                        <p>{totalFunction(items)}$</p>
                    </li>
                </ul>
                <button className="check">Checkout</button>
            </div>
     </div>
   )}