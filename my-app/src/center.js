import './App.css';
import Putin from './putin.jpg';
import Georgiy from './georgiy.jpg';
import Army from './army.jpg';

function Center() {
  return (
    <div className='cards'>
        <div>
            <img src={Putin} className="card"/>
            <div className='podpis'>
                <p>Мужская футболка "Путин"</p>
            </div>
        </div>
        
        <div>
            <img src={Georgiy} className="card"/>
            <div className='podpis'>
                <p>Мужская футболка "Георгий"</p>
            </div>
        </div>

        <div>
            <img src={Army} className="card"/>
            <div className='podpis'>
                <p>Мужская футболка "Армия России"</p>
            </div>
        </div>
    </div>
  )
}

export default Center;