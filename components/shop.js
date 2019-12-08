
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'

const Shop = () => (
    <>
        <Row id="id_shop">
            <Col style={{ 'text-align': 'center' }}><h1>Спорядження</h1></Col>
        </Row>
        <Row>
        <Col>
          - швидко забрудняться...<br />
          - порвуться...<br />
          - у іншого виробника є кращі...<br />
          - чому на переднє колесо?<br /><br />

          Це тільки частина того, що ми чули... 😱<br />

          Чому ж ми вирішили робити власні сумки коли є багато готових? 🤷‍♀️<br />

          Ми купили готові. Нарульна та підседільну. Але жодна з них нам не підійшла. Нарульна просто не причепилася на руль, як ми на старалися, а підседільна:<br />
          1. Не зручно знімати/кріпити.<br />
          2. Постійно розстібалась, за що отримала призьвисько "блюющая" 🙊 (вибачте, але виглядало саме так, коли перед твоїм велосипедом випадає купа речей з попереднього ровера)<br />
          <br />
          Тож, зручні та легкі вело-сумки - це мета, яку ми поставили перед собою.
<br />
          Наразі наші сумки мандрують світом, і довели надійність і зручність. Навіть "Двоколісні Хроники" мандрують пвденною америкою.

        </Col>
      </Row>

      <Row style={{ 'height': "200px" }}>
        <Col style={{ 'text-align': 'center', 'height': '100%' }}>
          <Carousel>
            <Carousel.Item style={{ 'backgroundColor': '#333333', 'height': "200px" }} >
              <Carousel.Caption>
                <h2>Надійні!!</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'backgroundColor': '#333333', 'height': "200px" }}>
              <Carousel.Caption>
                <h3>Зручні</h3>
                <p>Кріпляться на спеціальні кріплення</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка1</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка2</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка3</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка4</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
      </Row>
    </>
)


export default Shop