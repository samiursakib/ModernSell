import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { getCreatedOrder, getProducts } from '../app/api';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';



function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


export const Store = () => {
   const loggedIn = useSelector(state => state.token.loggedIn);
   const customerId = useSelector(state => state.token.userId);
   const [products, setProducts] = useState(null);
   const [orderDetails, setOrderDetails] = useState({
      customerId,
      productId: null,
      quantity: 0
   });
   getProducts()
      .then(res => {
         setProducts(res.data);
      })
      .catch(e => console.log(e));
   const handleChange = e => {
      const { name, value } = e.target;
      setOrderDetails({...orderDetails, [name]: value});
   };
   return (
      <div className='gallery'>
         {loggedIn && products && products.map((item, index) => {
            return (
               // <Card style={{ width: '18rem', display: 'iniline-block' }} key={index}>
               //    <Card.Img variant="top" src={images[item.image]} />
               //    <Card.Body>
               //       <Card.Title>{item.name}</Card.Title>
               //       <Card.Text>{item.description}</Card.Text>
               //       <p>{item.price}</p>
               //       <input
               //          type='number'
               //          name='quantity'
               //          value={orderDetails.quantity}
               //          onChange={handleChange}
               //          />
               //       <Button variant="primary" onClick={() => getCreatedOrder(orderDetails)}>Order Now</Button>
               //    </Card.Body>
               // </Card>
               <div className='card'>
                  <img src={images[item.image]} />
                  <div className='card-body'>
                     <h2>{item.title}</h2>
                     <p>{item.description}</p>
                     <p>$ {item.price}</p>
                     <input
                        type='number'
                        name='quantity'
                        value={orderDetails.quantity}
                        onChange={handleChange}
                     />
                     <button onClick={() => getCreatedOrder(orderDetails)}>Order Now</button>
                  </div>
               </div>
            )}
         )}
      </div>
   );
};