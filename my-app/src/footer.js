import './App.css';
import Vk from './vk.png';
import Telega from './telega.png';
import Viber from './viber.png';

function footer() {
    return (
        <div className='footer'>
            <p className="corp">2022,@Algada.com</p>
            <p className="corp">Все права защищены</p>
            <p className="corp">Наши соц. сети</p>
            <div className="logos">
                <img src={Vk} className="logo"/>
                <img src={Telega} className="logo2"/>
                <img src={Viber} className="logo2"/>
            </div>
        </div>
    )
  }
  
  export default footer;