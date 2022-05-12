import React from 'react';
import './SingleCourse.css'
import {Card, Button} from 'react-bootstrap';

const SingleCourse = (props) => {
    const {name, email, phone, price, place, headline, description} = props.course;
    return (
        <Card className='singleCart'>
            <Card.Header className='text-primary' as="h3">*** {headline}</Card.Header>
                <Card.Body>
                    <Card.Title>Course Name: {name}</Card.Title>
                    <Card.Text>Dec: {description}</Card.Text>
                    <Card.Text><h5>Phone: {phone}</h5></Card.Text>
                    <Card.Text><h5>Email: {email}</h5></Card.Text>
                    <Card.Text><h5>Location: {place}</h5></Card.Text>
                    <Card.Text className='text-danger'><h3>Price: $ {price}</h3></Card.Text>
                    <Button onClick={()=>{props.handleAddCount(props.course)}} variant="primary">Enroll Now</Button>
                </Card.Body>
        </Card>
    );
};

export default SingleCourse;