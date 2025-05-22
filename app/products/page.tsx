import React from 'react'

const page = async () => {

    const data = await fetch("https://api.escuelajs.co/api/v1/products")
    const products = await data.json()
    console.log(products)
    // const {images, title, description, price} = products[0]
    // console.log(images, title, description, price)
  return (
    <div>
        
            {products.map((product: {id: number; title: string}) => {
                return(

                    <div key={product.id}>{product.title}</div>
                )
            })}
        
        
    </div>
  )
}

export default page
