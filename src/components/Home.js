import React from 'react'
import './styles.css';


function Home(props) {
    return (
        <>
            <div className="product-cart">
                <img className="product-image" src={props.image} alt={props.key}/>
                <h3 className="product-name" >{props.name}</h3>
                <p className="product-price" >{props.price}</p>
            </div>
        </>
    )
}

export default Home
