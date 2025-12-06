import React from 'react'
import GreetCustomer from './Component/GreetCustomer.jsx'
import Product from './Pages/Product.jsx'
import Counter from './Pages/Counter.jsx'

function App(){

  let shoeData = [
    {title: "Nike", price: "Rs. 6,999/-"},
    {title: "Adidas", price: "Rs. 5,499/-"},
    {title: "Campus", price: "Rs. 1,699/-"},
    {title: "Puma", price: "Rs. 9,999/-"}
  ]

  return (
    <>
      <div class="mt-4">
        <GreetCustomer name="Shivang" />
      </div>
      <hr class="mt-4"></hr>{/*--------------------------- */}
      <div>
        {
          shoeData.map((shoe) => (
            <div class="border-2 text-center ml-32 mr-32 mt-4 hover:scale-105 duration-300">
                <Product title={shoe.title} price={shoe.price}></Product>
            </div>
          ))
        }
      </div>

      <hr class="mt-4"></hr>{/*--------------------------- */}

      <div>
          <Counter></Counter>
      </div>

      <hr class="mt-4"></hr>{/*--------------------------- */}
    </>
  )
}

export default App;

