import React from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import banner from '../../banner.svg';
import './Course.css'
import Cart from '../Cart/Cart';

const Course = (props) => {
    const courses = props.data;
    const handleAddCount = props.handleAddCount;
    console.log(courses)
    return (
        <div className='container d-flex'>
            <div className='course'>
                {
                    courses.map(course => <SingleCourse handleAddCount={handleAddCount} course={course}></SingleCourse>)
                }
            </div>
            <div className="cart">
                <img src={banner} alt="" />
                <div className="cart-div">
                    <Cart cart = {props.cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Course;