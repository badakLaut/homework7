import Carousel from 'react-bootstrap/Carousel';

function carousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.erajaya.com/files/uploads/banner/picture/2020/Mar/06/5e61b74cb116d/our-story-banner-1.jpg?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>On track to be the largest lifestyle smart retailer</h3>
          <p>We are aggressively growing our products and services portfolio to lead the lifestyle products evolution</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.erajaya.com/files/uploads/banner/picture/2022/Jul/27/62e0bd1f6f469/pb2-new-rev3.jpg?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Integrated and comprehensive proposition to customers</h3>
          <p>We offer end-to-end lifestyle product and solution</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.erajaya.com/files/uploads/banner/picture/2022/Jul/27/62e0bc4617a75/our-business-banner-2.jpg?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Market leader with nationwide omnichannel network</h3>
          <p>Our vast network of channel to deliver the best personalized and innovative experience to customer</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;