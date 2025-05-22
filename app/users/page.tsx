import React from 'react'

const page = async () => {

  


    const data = await fetch("https://api.escuelajs.co/api/v1/users")
    const users = await data.json()
    console.log(users)
    // const {images, title, description, price} = products[0]
    // console.log(images, title, description, price)
  return (
    <div>
        
            {users.map((user: {id: number; email: string}) => {
                return
                  {

                    <div>
                      <div key={user.id}>{user.email}</div>
                      
                    </div>
                  }

                
            })}
        
        
    </div>
  )
}

export default page
