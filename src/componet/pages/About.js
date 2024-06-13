import React, { useState } from 'react';
import Hader from '../commonComponet/layout/hader/Hader';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/homepage-componet/About.css"
function About() {
    const [sliderImageUrl, setSliderImageUrl] = useState([{
        url: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        url: "https://plus.unsplash.com/premium_photo-1676139292729-0976e4162a17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
    },
    {
        url: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1563207937-508961e52353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
    }])

    const [sliderCard, setSliderCard] = useState([
        {
            url: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageName: "image"
        }, {
            url: "https://plus.unsplash.com/premium_photo-1676139292729-0976e4162a17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            imageName: "Landscape Photography"
        },
        {
            url: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageName: "image"
        },
        {
            url: "https://images.unsplash.com/photo-1563207937-508961e52353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            imageName: "Landscape Photography"
        },
        {
            url: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageName: "image"
        }, {
            url: "https://plus.unsplash.com/premium_photo-1676139292729-0976e4162a17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            imageName: "Landscape Photography"
        },
        {
            url: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageName: "image"
        },
        {
            url: "https://images.unsplash.com/photo-1563207937-508961e52353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            imageName: "nice image"
        },
        {
            url: "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageName: "images"
        },
        {
            url: "https://images.unsplash.com/photo-1563207937-508961e52353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            imageName: "necharal image"
        }
    ])

    // display one slide image
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    function RightArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "transparent", position: "absolute", right: "20px", zIndex: "1" }}
                onClick={onClick}
            />
        );
    }
    function LeftArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style, display: "block", background: "transparent", position: "absolute", left: "10px", zIndex: "1"
                }
                }
                onClick={onClick}
            />
        );
    }

    //display multiple card in one slide

    const cardSliderSetting = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        nextArrow: <CardSliderRightArrow />,
        prevArrow: <CardSliderLeftArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    // centerMode:true,
                    nextArrow: <RightArrow />,
                    prevArrow: <LeftArrow />
                }
            }
        ]
    };


    function CardSliderRightArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    position: "absolute",
                    zIndex: "1",
                    backgroundColor: "#fff",
                    width: "100px",
                    height: "100%",
                    right: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onClick={onClick}
            />
        );
    }
    function CardSliderLeftArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    position: "absolute",
                    zIndex: "1",
                    backgroundColor: "#fff",
                    width: "110px",
                    height: "100%",
                    left: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
                }
                onClick={onClick}
            />
        );
    }



    return (

        <div>
            <Hader />
            <div className='slidercontener'>
                <Slider {...settings}>
                    {
                        sliderImageUrl.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item.url} alt="images" width="100%" height="300px" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

            <div className='cardSliderContener'>
                <Slider {...cardSliderSetting}>
                    {
                        sliderCard.map((item, index) => {

                            return (
                                <div className='mani-card' key={index}>
                                    <div className="card">
                                        <div className='card-img'>
                                            <img src={item.url} alt="images" />
                                        </div>
                                        <div className="card-discrption">
                                            <div className='heding'>
                                                <h4>{item.imageName}</h4>
                                            </div>
                                            <div className='card-info'>
                                                <h3>this is fine picture</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default About
