import React, { useEffect, useState } from 'react';

const Card = ({ name, imageURL, onClick }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const getPokeImage = async (url) => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setImageUrl(jsonData.sprites.other['official-artwork'].front_default);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    if (imageURL) {
      getPokeImage(imageURL);
    }
  }, [imageURL]);

  const handleOnClick = () => {
    onClick(name);
  };

  return (
    <div

      onClick={handleOnClick}
      className="m-7 mt-0 h-auto w-80 hover:shadow-[#4B164C] hover:shadow-2xl flex flex-col items-center max-w-sm bg-amber-500 border border-[#F8E7F6] rounded-xl shadow-sm">
      
      <div className="bg-[#FFF5E4] rounded-2xl mt-5">
        <img className="size-65 mt-4 shadow-2xl" src={imageUrl || "https://via.placeholder.com/150"} alt={name} />
      </div>
     
      <div className="py-3">
        <h2 className="text-black">{name}</h2>
      </div>

    </div>
  );
};

export default Card;
