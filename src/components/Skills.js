import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>MERN Stack WEb Developer</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={'https://i.imgur.com/GLGXjBl.png'} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>CSS Flex</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>CSS Grid</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>Mongoose</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}