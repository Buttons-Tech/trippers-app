import React from 'react'

const ProductPage = async({params}: {params: {productid: string; email: string}}) => {

   const {productid} = params
   

  return (
    <div>
      {productid}
    </div>
  )
}

export default ProductPage
