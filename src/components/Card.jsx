import React from 'react'

export const Card = ({imgFruit,title,prise,onPlus,id})=>{
    let weightInput = React.createRef();
    const addtoCard =()=>{
        if(Number(weightInput.current.value)){
        let valueKg = Number(weightInput.current.value);
        onPlus({imgFruit,title,prise,valueKg,id})
        weightInput.current.value=""
        }
    }
    return(
        <div className="card">
                <img src={imgFruit}/>
                <h2>{title}</h2>
                <div className="prise">
                    <span>Prise:{' '+prise}$</span>
                </div>
                <div className="weight">
                    <input ref={weightInput} type="number" min="0" />
                    <p>kg</p>
                </div>
                <button onClick={addtoCard}>BUY</button>
            </div>
    )
}