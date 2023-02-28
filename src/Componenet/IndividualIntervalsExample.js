// src/components/bootstrap-carousel.component.js
// import React from "react";

// import { Carousel, Col, Container, Row } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallery from "react-image-gallery";

import Slider from "react-slick";
class BootstrapCarouselComponent extends React.Component {
  render() {
    const images = [
      {
        original: require("./1.jpg"),
        thumbnail: "https://picsum.photos/id/1018/250/150/",
        description: "asdasdasdasd",
        originalTitle: "hi hw r u",
        thumbnailLabel: "lorem ipsum",
        originalHeight: 500,
        loading: "eager",
      },
      {
        original: require("./2.jpg"),
        thumbnail: "https://picsum.photos/id/1018/250/150/",
        description: "asdasdasdasd",
        originalTitle: "hi hw r u",
        thumbnailLabel: "lorem ipsum",
        originalHeight: 500,
        loading: "eager",
      },
      {
        original: require("./3.jpg"),
        thumbnail: "https://picsum.photos/id/1018/250/150/",
        description: "asdasdasdasd",
        originalTitle: "hi hw r u",
        thumbnailLabel: "lorem ipsum",
        originalHeight: 500,
        loading: "eager",
      },
      {
        original: require("./2.jpg"),
        thumbnail: "https://picsum.photos/id/1015/250/150/",
        originalHeight: 500,
      },
      {
        original: require("./3.jpg"),
        thumbnail: "https://picsum.photos/id/1019/250/150/",
        originalHeight: 500,
      },
    ];

    return (
      <div>
        {/* <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item style={{ height: "600px", width: "100%" }}>
                  <img src={require("./1.jpg")} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item style={{ height: "600px", width: "100%" }}>
                  <img src={require("./2.jpg")} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item style={{ height: "600px", width: "100%" }}>
                  <img src={require("./3.jpg")} alt="First slide" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container> */}

        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h3>React Bootstrap Carousel</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("./1.jpg")}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/500/300?img=2"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/500/300?img=3"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/500/300?img=3"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/500/300?img=3"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/500/300?img=3"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div> */}

        {/* <Carousel
          showArrows={true}
          // autoPlay={true}
          interval={200}
          infiniteLoop={true}
        >
          <div>
            <img src={require("./1.jpg")} alt="First slide" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={require("./2.jpg")} alt="First slide" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={require("./3.jpg")} alt="First slide" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}

        <ImageGallery
          items={images}
          slideDuration={400}
          swipingTransitionDuration={1000}
          slideInterval={5000}
          thumbnailPosition="left"
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default BootstrapCarouselComponent;
