
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const Banner = () => (
    <>
        <Row id="id_home">
            <Col className="hero">
                <center> <h2>Наші проекти</h2> </center>
            </Col>
        </Row>

        <Row>
            <Col style={{ 'text-align': 'center' }}>
                <div>Cпорядження</div>
                <Image src="/shop_350*318.png"></Image>
            </Col>
        </Row>
        <Row>
            <Col style={{ 'text-align': 'center' }}>
                <div>Путівник</div>
                <Image src="/pathfinger_350*329.png" alt="Не вышло :("></Image>

            </Col>


            <Col style={{ 'text-align': 'center' }}>
                <div>Блог Flower`s way</div>
                <Image src="/blog_350*337.png"></Image>
            </Col>


        </Row>
    </>
)


export default Banner