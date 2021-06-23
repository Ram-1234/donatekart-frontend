import React,{useState,useEffect} from 'react'
import './styles.css';
import Home from './Home';
import product from './product.json'

function Apps() {
  const [curr,setCurr]=useState("INR")
  const [bool,setBool]=useState(true)
  const [data,setData]=useState(null)
  
  console.log(data)
  const selectOption =(e)=>{
      if(e.target.value==="INR"){
        setBool(true)
      }else{
        setBool(false)
      }
        setCurr(e.target.value)
  }

  useEffect(()=>{
    fetch('https://api.exchangeratesapi.io/latest?base=INR')
    .then(data=>data.json())
    .then(d=>setData(d))
  },[])

    return (
      <div className="main-app">
          {
            bool ?  product.map(item=> <Home
              key={item.id}
              name={item.name}
              image={item.image}
              price={"₹"+item.price}
              />) :  product.map(item=> <Home
                key={item.id}
                name={item.name}
                image={item.image}
                price={"$"+(parseInt(item.price)/74.18).toFixed(2)}
                />)
          }
         <div className="crrency-conversion">
         <lable>Currency </lable>    
         <select  defaultValue={curr} onChange={selectOption}>
             <option value="INR">INR</option>
             <option value="USD">USD</option>
         </select> 
         </div>
      </div>  
    )
}

export default Apps
