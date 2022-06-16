import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/charusat1.jpg";
import img2 from "../images/depstar1.jpg";
import img3 from "../images/charusat2.jpg";

const Home = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    style={{height: "95vh"}}
                    />
                    <Carousel.Caption>
                        <h1 className="bg-light text-dark">DEPSTAR Student Grievance Redressal Portal</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    style={{height: "95vh"}}
                    />
                    <Carousel.Caption>
                        <h1 className="bg-light text-dark">DEPSTAR Internal Complaints Committee(ICC)</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    style={{height: "95vh"}}
                    />
                    <Carousel.Caption>
                        <h1 className="bg-light text-dark">Knowledge is eternal!!!</h1>    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    )
}

export default Home
