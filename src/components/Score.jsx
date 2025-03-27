import React from 'react'

const Score = () => {

    
  return (
    <div className='flex justify-center space-x-10 mt-4'>
        <p className='text-center text-[#4B164C] text-xl'>Score: 0</p>  {/* Score will be updated dynamically */}
        <p className='text-xl text-[#4B164C]'>Best Score: 0</p>
    </div>
  )
}

export default Score