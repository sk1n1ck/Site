import './App.css';

const nazv = "Algada"

function header() {
    return (
        <div className="header">
            <h1 className='nazv'>{nazv}</h1>
            <div className='polosa'></div>
        </div>
    )
  }
  
  export default header;