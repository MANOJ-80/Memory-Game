import React, { useState } from 'react'

const Card = ({key, name, imageURL, data}) => {

 console.log("Name", name)
 console.log("URL", imageURL)

 const [imageUrl, setImageUrl] = useState('')
 
 const [isClicked, setIsClicked] = useState(false)


 const getPokeImage = async (url) => {
  const source = url
  const data = await fetch(source, {mode : 'cors'})
  const jsonData = await data.json()
  const imageUrl = jsonData.sprites.front_default    

  setImageUrl(imageUrl)  
}

getPokeImage(imageURL)


const handleOnClick = () => {
 // alert("Click")
  setIsClicked(true)
  data(isClicked)
  console.log("Key",name)

 
}

  return (
    <>


<div onClick={handleOnClick} key={key} className="m-7 mt-0 h-auto w-80 hover:shadow-[#4B164C] hover:shadow-2xl flex flex-col items-center max-w-sm bg-amber-500 border border-[#F8E7F6] rounded-xl shadow-sm ">
    
    <div className='bg-[#FFF5E4] rounded-2xl mt-5'>
    <img className="size-65 mt-4 shadow-2xl" src={imageUrl} alt="" />

    </div>
    
    <div className="py-3">
       <h2 className='text-black'>{name}</h2>
    </div>
</div>

    </>
  )
}

export default Card