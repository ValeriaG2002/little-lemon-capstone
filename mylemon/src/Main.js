import { useNavigate } from 'react-router-dom';
import restaurantfood from './assets/restaurantFood.jpg';
import Specials from './Specials';
import Testimonials from './Testimonials';

function Main() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservations');
  };

  return (
    <main>
      <section className="header">
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon is a family-owned Mediterranean restaurant that specializes in traditional dishes with a modern twist.</p>
          <button onClick={handleReserveClick} className="button">Reserve a Table</button>
        </div>
        <div className='banner-img'>
          <img src={restaurantfood} alt="A dish from Little Lemon" />
        </div>
      </section>
      <Specials />
      <Testimonials/>
    </main>
  );
}

export default Main;