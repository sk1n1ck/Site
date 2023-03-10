import './App.css';
import Header from './header.js';
import Nav from './nav.js';
import Footer from './footer.js';
import Center from './center.js';

function App() {
  return (
    <div className='menu'>
      <Header />
      <Nav />
      <Center />
      <Footer />
    </div>
  )
}

export default App;