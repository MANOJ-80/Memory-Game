import React, { useEffect, useState } from 'react';
import Card from './Card';
import Header from './Header';
import Score from './Score';

import Swal from 'sweetalert2'


const Page = ({ cards }) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (name) => {
   // console.log("Clicked:", name, "Score:", score);

    if (clickedCards.includes(name)) {
      setScore(0);
      setClickedCards([]);
     // alert("You Lost !")
      Swal.fire({
        title: "You Lost !",
        icon: "error",
        draggable: true
      });
    }
    else {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      setClickedCards([...clickedCards, name]);


      if(newScore === 10){
        //alert("Congratulations! You Won!")
        Swal.fire({
          title: "Congratulations! You Won!",
          icon: "success",
          draggable: true
        });
        setScore(0);
        setClickedCards([]);
        setShuffledCards(shuffle(cards));
      }
    }

    setShuffledCards(shuffle(cards));
  };

  useEffect(() => {
    setShuffledCards(shuffle(cards));
  }, [cards]); 

  return (
    <main className="h-screen flex flex-col items-center bg-gradient-to-b from-[#FFA725] to-[#FFF5E4]">
      <Header />
      <Score score={score} bestScore={bestScore} />
     
      <div className="flex flex-wrap mt-10">
        
        {
        shuffledCards.map((card) => (
          <Card key={card.name} name={card.name} imageURL={card.url} onClick={handleCardClick} />
        ))
        }
      </div>

    </main>
  );
};

export default Page;
