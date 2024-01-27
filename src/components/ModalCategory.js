import { useEffect, useState } from "react";
const ModalCategory = (props) => {
    const [icon,setIcon] = useState(null)

    useEffect(() => {
        if(icon != null) {
            props.setIcon(icon)
        props.setState(false)
        console.log(icon)
        }
    },[icon])
    //  const [iconModel,setIconModel] = useState(true)

  return (
    <div className="modalContainer">
      <div className="modalBody">
        <div className="closeBtn">
          <button onClick={(() => {props.setState(false)})}>X</button>
        </div>
        {/* Food & drinks */}
        <div className="categoriesImages">
          <div>
            <h3>Еда & Напитки</h3>
            <div className="categoryImg">
              <div>
                <img src="images/food&drinks/supermarket.png" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Продукты</p>
              </div>
              <div className="imagesByCategory">
                <img src="images/food&drinks/steak.png" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Рестораны</p>
              </div>
              <div>
                <img src="images/food&drinks/juice.png" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Напитки</p>
              </div>
              <div>
                <img src="images/food&drinks/muffin.png" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Десерты</p>
              </div>
              <div className="imagesByCategory">
                <img src="images/food&drinks/delivery.png" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Доставка</p>
              </div>
            </div>
          </div>
        </div>
        {/* Housing */}
        {/* <div className="categoriesImages">
          <div>
            <h3>Жилье</h3>
            <div className="categoryImg">
              <div>
              <img src="images/housing/rent.png" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Аренда</p>
              </div>
              <div className="imagesByCategory">
              <img src="images/housing/tax.png" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Налоги</p>
              </div>
              <div>
                <div>img</div>
                <p>Тарифы</p>
              </div>
              <div>
                <div>img</div>
                <p>Счета</p>
              </div>
              <div>
                <div>img</div>
                <p>Бытовые материалы</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Transport */}
        {/* <div className="categoriesImages">
          <div>
            <h3>Транспорт</h3>
            <div className="categoryImg">
              <div>
                <div>img</div>
                <p>Парковка</p>
              </div>
              <div className="imagesByCategory">
                <div>img</div>
                <p>Бензин</p>
              </div>
              <div>
                <div>img</div>
                <p>Общественный Транспорт</p>
              </div>
              <div>
                <div>img</div>
                <p>Такси</p>
              </div>
              <div>
                <div>img</div>
                <p>Ремонт</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Healthcare */}
        {/* <div className="categoriesImages">
          <div>
            <h3>Образ жизни</h3>
            <div className="categoryImg">
              <div>
                <div>img</div>
                <p>Врач</p>
              </div>
              <div className="imagesByCategory">
              <img src="images/school.jpeg" value = {icon} onClick={((e) => {setIcon(e.target.src)})}/>
                <p>Образование</p>
              </div>
              <div>
                <div>img</div>
                <p>Покупки</p>
              </div>
              <div>
                <div>img</div>
                <p>Дети</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Incomes */}
        {/* <div className="categoriesImages">
          <div>
            <h3>Доходы</h3>
            <div className="categoryImg">
              <div>
                <div>img</div>
                <p>Заработная плаиа</p>
              </div>
              <div className="imagesByCategory">
                <div>img</div>
                <p>Сбережения</p>
              </div>
              <div>
                <div>img</div>
                <p>Инвестиции</p>
              </div>
              <div>
                <div>img</div>
                <p>Проценты</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* others */}
        {/* <div className="categoriesImages">
          <div>
            <h3>Развлечения</h3>
            <div className="categoryImg">
              <div>
                <div>img</div>
                <p>Restaurant</p>
              </div>
              <div className="imagesByCategory">
                <div>img</div>
                <p>Restaurant</p>
              </div>
              <div>
                <div>img</div>
                <p>Restaurant</p>
              </div>
              <div>
                <div>img</div>
                <p>Restaurant</p>
              </div>
            </div>
          </div>
        </div> */}
        
      </div>
    </div>
  );
};
export default ModalCategory;
