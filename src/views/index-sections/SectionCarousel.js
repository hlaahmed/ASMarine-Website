import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Background from "assets/img/idk2.jpg";
var Blur = require('react-blur').default;
var radius = "5px";
var ydenomi;
// core components
var sectionStyle = {

  backgroundImage: "url(" + Background + ")",
  '-webkit-filter': 'blur(' + radius + ')',
  'filter': 'blur(' + radius + ')',
  'height': '100%'

};

const items = [
  {
    src: require("assets/img/idk3.jpg"),
    altText: "Gamed",
    caption: "Gamed",
  },
  {
    src: require("assets/img/idk1.jpg"),
    altText: "Gamed tany",
    caption: "Gamed khalis",
  },
  {
    src: require("assets/img/idk2.jpg"),
    altText: "gamed khalis",
    caption: "Gamed tany",
  },
];
const itemsBlurred = [
  {
    src: require("assets/img/idk3-blurred.jpg"),
    altText: "Gamed",
    caption: "Gamed",
  },
  {
    src: require("assets/img/idk1-blurred.jpg"),
    altText: "Gamed tany",
    caption: "Gamed khalis",
  },
  {
    src: require("assets/img/idk2-blurred.jpg"),
    altText: "gamed khalis",
    caption: "Gamed tany",
  },
];
function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    
  };
  return (
    <>


      <div className="section pt-o" id="carousel" style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${itemsBlurred[activeIndex].src})`
      }} >
        <Row>
          <Col className="ml-auto mr-auto" md="6" >
            <Card className="page-carousel" style={{ padding: 0, margin: 0 }}>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}

              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                                    ydenomi=item.src;
                                    console.log(items[activeIndex]);
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
            
                      <img src={item.src} alt={item.altText} />
                      <CarouselCaption
                        captionText={item.caption}
                        captionHeader=""
                      />
                    </CarouselItem>
                  );
                })}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    
                    previous();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </a>
              </Carousel>
            </Card>
          </Col>
        </Row>

      </div>

      {" "}
    </>
  );
}

export default SectionCarousel;
