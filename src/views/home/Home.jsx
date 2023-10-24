import React from 'react';
import './styles.css'
import Menu from "../../components/menu/menu";

const Home = () => {
  return (
    <div className={'row'}>

      <div className="card mt-5 me-5" style={{
        width: '18rem'
      }}>
        <img src="https://m.media-amazon.com/images/I/51Z+vuseAEL._AC_UF1000,1000_QL80_.jpg" className="card-img-top" alt="perro" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      <div className="card mt-5" style={{
        width: '18rem'
      }}>
        <img src="https://petitpaws.com.co/cdn/shop/collections/moda-para-perros_1200x1200.jpg?v=1676609419" className="card-img-top" alt="perro" />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

    </div>
  );
}
export default Home;
