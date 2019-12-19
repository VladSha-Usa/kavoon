
const objects = [
  {
    title: `Мальвоничий Свірж`,
    subtitle: `та навколо`,
    text: `Якщо я б будував замок, я б збудував його на тому самому місці. Замок розташован в дійсно мальновничому місці серед невеличких холмів та шикарної  природа.
     
      Також в цьому регіоні просто безліч добре і не дуже збережених памятників давнини: костел в перемишлянах, старий млин, 2 каплички в місті Бібрка, да і сама Бібрка, яка старіща за Львів, варта того щоб приділити ій якщо не цілий день, то пів дня точно...`

  }
]

const PathfinderObject = ({ direct }) => {
  const flexDirection = direct ? "row" : "row-reverse"
  return (<>
    <article style={{ paddingTop: "95px" }}>

      <div style={{ display: "flex", flexDirection: flexDirection, flexWrap: "no-wrap", width: "100%", height: "320px" }}>
        <div style={{ flex: "0 0 450px", height: "100%", overflow: "hidden" }}>
          <img src="Swirg_300*400.jpg" className="image" />
        </div>
        <div style={{ flex: "auto", overflow: "hidden" }}>

          <div className="pathfinder-object-text" style={{ marginLeft: "105px" }}>
            <p className = "header" >Мальовничий Свірж</p>
            <p>Якщо б я будував замок, я б збудував його на тому <b>самому місці</b>. Замок розташован в дійсно мальновничому місці серед невеличких холмів та шикарної  природа. Також в цьому регіоні просто безліч добре і не дуже збережених памятників давнини: костел в перемишлянах, старий млин, 2 каплички в місті Бібрка, да і сама Бібрка, яка старіща за Львів, варта того щоб приділити ій якщо не цілий день, то пів дня точно...
           </p>
          </div>
        </div>


      </div>
    </article>
    <style jsx>{`
      .header  {
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: 1.5px;
        color: var(--primarycolor);
        margin: 5px;
      }
      h4 {
        color: var(--texticonscolor);
      }

      .image {
        width: 450px;
        height: 320px;
        object-fill: contain;
        border-radius: 25px;
        box-shadow: 4px 10px 30px 0 rgba(9, 21, 85, 0.18);
      }
      .pathfinder-object-text {
        //text-align: justify;
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.53;
        letter-spacing: 0.79px;
        color: #061434;

      }
      `}
    </style>
  </>)
}

const Pathfinder = () => (
  <>

    <div>
      <div className="pathfinder-caption-background-text">Путівник</div>
      <div className="pathfinder-caption-text">Путівник</div>
    </div>
    <div style={{ height: "1px" }}>
      <img style={{ position: "relative", left: "481px", top: "-42px" }} src="img/vector-background.svg"
        className="vector-background" />
    </div>
    <div className="pathfinder-story-text" style={{paddingBottom: "16px"}}>
      На цій сторіннці ми зібрали об'єкти лвівської області які варті вашої уваги.
    </div>

    <PathfinderObject direct={true} />
    {/* <PathfinderObject direct={false} /> */}
    {/* <PathfinderObject direct={true} /> */}

    {/* Бібрка начало блока */}
    {/* <div>
            <div style={{ 'text-align': 'center' }}><h3>Цікава Бібрка, </h3><h4>яку ви ще не бачили</h4></div>

            <div>
                <div>
                    <img src="Bibrka_300*300.jpg"></img>
                </div>
                <div>
                Бібрка вражає тим, що навколо зібралося багато цікавих місць, замків та пам'яток. Та і саме містечко теж заслуговує на невеликий огляд. Якщо раніше ми розглядали його як місце де можна перепочити та рушити до Львова, то наразі ми відкрили Бібрку з зовсім іншої сторони.

           </div>
            </div>
        </div> */}
    {/* Бібрка конец блока */}

    {/* Гавареччина начало блока */}
    {/* <div>
            <div style={{ 'text-align': 'center' }}><h3>Між Гавареччиною  </h3><h4>та Красним</h4></div>

            <div>
                <div>
                    <img src="Rozvag_kostel.jpg"></img>
                </div>
                <div>
                Львівська область багата на різноманітні пам’ятки сакральної архітектури. Майже всі вони в дуже занедбаному стані, але це тільки ще більше додає їм таємничості. 
На дільниці між Золочевом та селом Красне можна подивитись декілька закинутих дерев'яних та кам’яних костелів, а також завітати у серце виробництва чорного глиняного посуду - Гавареччину.

           </div>
            </div>
        </div> */}
    {/* Гавареччина конец блока */}
    {/* Вовків начало блока */}
    {/* <div>
            <div style={{ 'text-align': 'center' }}><h3>Руйнівна сила часу  </h3><h4></h4></div>

            <div>
                <div>
                    <img src="Vovkiv_300*300.jpg"></img>
                </div>
                <div>
                Недалеко від Львова є пам’ятки, які можна оглянути за один день, маючи тільки велосипед. Маршрут протяжністю біля 60 км, з нескладними апхілами підійде як для підготовлених роверистів, так і для новачків.
Мова йде про декілька закинутих костелів та зруйнований замок у Старому Селі. Тут можна зануритись у середньовіччя, відчути велич минулих років та подивитись на руйнівну силу часу.


           </div>
            </div>
        </div> */}
    {/* Вовків конец блока */}
    <style jsx>{`
          .vector-background {
            width: 484px;
            //height: 1118px;
            object-fit: contain;
          }
          .pathfinder-caption-background-text {
              object-fit: contain;
              opacity: 0.12;
              font-family: Montserrat;
              font-size: 38px;
              font-weight: 900;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.05;
              letter-spacing: 1.78px;
              color: var(--transparency);
              
              text-transform: uppercase;
              text-align: center;
              position: relative;
          }
          .pathfinder-caption-text  {
              font-family: Montserrat;
              font-size: 28px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: 1.31px;
              color: var(--texticonscolor);
              text-transform: uppercase;
              text-align: center;
              position: relative;
              top: -18px;
          }
          .pathfinder-story-text {
              font-family: Montserrat;
              font-size: 17px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.53;
              letter-spacing: 0.79px;
              text-align: center;
              color: #061434;
          }
          .pathfinder-object-text {
              font-family: Montserrat;
              font-size: 17px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.53;
              letter-spacing: 0.79px;
              color: var(--texticonscolor);
          }
        `}</style>
  </>
)


export default Pathfinder