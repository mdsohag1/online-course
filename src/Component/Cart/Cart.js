import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const price = cart.reduce( (sum, price) => sum + Number(price.price) , 0);
    // const totalPrice = Number(price)
    return (
        <div className='mt-5 '>
            <Card className='text-center'>
            <Card.Header className='text-success' as="h3">Your Cart List</Card.Header>
            <Card.Body>
                <Card.Title> <h3>Course Count: {cart.length}</h3></Card.Title>
                <Card.Title> <h3>Total-Price: $ {price}</h3></Card.Title>
                <Button className='mt-3 btn-danger' variant="primary">Purcess Now</Button>
            </Card.Body>
            </Card>
            <br /><br />

            <Card className='text-center'>
            <Card.Header className='text-danger' as="h4">Your Purcess Course Name</Card.Header>
            <Card.Body>
                <Card.Title>
                    <ul>
                    {
                        cart.map(name => <li>{name.name}</li>)
                    }
                    </ul>
                </Card.Title>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;