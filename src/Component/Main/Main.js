import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Main.css';
import Data from '../../Data/data.json';
import Course from '../Course/Course';

const Main = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        setData(Data)
    }, [])

    const handleAddCount = (pCart) => {
        setCart([...cart, pCart])
    }
    return (
        <div>
            <Header cart = {cart}></Header>
            <Course cart={cart} handleAddCount={handleAddCount} data={data}></Course>
        </div>
    );
};

export default Main;