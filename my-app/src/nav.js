import './App.css';

const futbolki = "футболки"
const hoodie = "худи"
const shtani = "штаны"
const rybashki = "рубашки"
const polo = "поло"

function nav() {
    return (
        <div className="nav">
            <p className='futbolki'>{futbolki}</p>
            <p className='hoodie'>{hoodie}</p>
            <p className='shtani'>{shtani}</p>
            <p className='rybashki'>{rybashki}</p>
            <p className='polo'>{polo}</p>
      </div>
    )
  }
  
  export default nav;