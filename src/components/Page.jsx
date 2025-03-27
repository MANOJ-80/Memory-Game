import React, { useState } from 'react'
import Card from './Card'
import Header from './Header'
import Score from './Score'

const Page = ({cards}) => {
  console.log("Cards",cards)

   const [isClicked, setIsClicked] = useState(false);

   const handleIsClicked = (data) => {
     setIsClicked(data)
     console.log("Clicked", isClicked)
     alert("Clicked", isClicked)
     console.log("Data", data)  
   }
  
  

  return (
    <>
    <main className="h-screen flex flex-col items-center bg-gradient-to-b from-[#FFA725] to-[#FFF5E4]">
       <Header/>
       <Score />
      
      <div className='flex flex-wrap mt-10'>
      
      {
         cards.map((card) => {
           return <Card key={card.name} name={card.name} imageURL={card.url} data={handleIsClicked}/>
         })
       }
      
      </div>
   
      
  
    </main>
    
    </>
  )
}

export default Page