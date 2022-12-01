import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function c2() {
  return (
    <div>
        <br></br>
        <h1>Explore Our Network</h1>
        <Row>
            <Col xs={6} md={4}>
              <Button variant="primary">97 distribution centers</Button>
            </Col>
            <Col xs={6} md={4}>
              <Button variant="primary">1,447 retail outlets</Button>
            </Col>
            <Col xs={6} md={4}>
              <Button variant="primary">+/- 69,000+ 3 party billed outlets</Button>
            </Col>
        </Row>
        <Image src="https://www.erajaya.com/files/uploads/MAP%20Eraa.png" alt="Card image"/>
    </div>
  );
}

export default c2;