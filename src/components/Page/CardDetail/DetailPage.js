import React from 'react'
import CardDetail from './CardDetail'

export default function DetailPage(props) {
    const {products}=props
  return (
      <div><CardDetail products={products}/></div>
  )
}
