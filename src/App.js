import './App.css';
import React from 'react';
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Drawer } from './components/Drawer'

const arr = [
    {
        id: '1',
        title: 'Apple',
        prise: 8,
        imgFruit: 'https://ua.all.biz/img/ua/catalog/15737794.jpg',
    },
    {
        id: '2',
        title: 'Banan',
        prise: 10,
        imgFruit: 'https://static9.depositphotos.com/1068095/1120/i/600/depositphotos_11200249-stock-photo-bananas.jpg',
    },
    {
        id: '3',
        title: 'Papaya',
        prise: 10,
        imgFruit: 'https://image.freepik.com/free-photo/papaya-fruit-isolated-on-white-background-with-clipping-path_88281-1957.jpg',
    },
]

function App() {
    const [cartOpened, setCartOpened] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const opened = () => setCartOpened(true)
    const closed = () => setCartOpened(false)

    const onAddToCart = (obj) => {
        setCartItems([...cartItems, obj])
    }

    return <div className="wrapper">
        {cartOpened ? <Drawer items={cartItems} onCloseCart={closed} /> : null}
        <Header onClickCart={opened} />
        <h1 className="allfruit">All fruit</h1>
        <div className="content">
            {arr.map((obj, index) => (
                <Card key={index} imgFruit={obj.imgFruit} title={obj.title} prise={obj.prise} id={obj.id} onPlus={(obj) => onAddToCart(obj)} />
            ))}
        </div>
    </div>
}

export default App;
