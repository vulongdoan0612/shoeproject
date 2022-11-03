import React from 'react'

export default function CardDetail(props) {
    const { products } = props
    console.log(products)
  return (
      <>
          {products.map((product) => {
              return (
                  <div className="a"><h1>{product.title}</h1>
                  <img src={product.img} alt=""/>
                  </div>
              )
          })}
      </>
  )
}
