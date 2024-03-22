import  { useEffect, useState } from 'react'
import card from "../icon/card.png";
import cardCat from "../icon/cardCat.png";
import cardKitty from "../icon/cardKitty.png";
import cardDog from "../icon/cardDog.png";
import cardPony from "../icon/CardPony.png";
import cardDino from "../icon/cardDino.png";
import cardDinoCute from "../icon/cardDinoCute.png";

const initialArr = [ 
    { id: 1, img: cardCat },
    { id: 2, img: cardKitty },
    { id: 3, img: cardDino },
    { id: 4, img: cardDog },
    { id: 5, img: cardPony },
    { id: 6, img: cardDinoCute},
  ];
  
  const pairOfArrCards = [...initialArr, ...initialArr];

export const CardGame = () => {
    const [arrCards, setArrCard] = useState([]);
    const [openedCards, setOpenedCards] = useState([]);
    const [matched, setMached] = useState([]);
    const [moves, setMoves] = useState(0);
  
   
  
    const shuffle = (arr) => {
      let curentIndex = arr.length,
        temporaryValue,
        randomIndex
  
        while(curentIndex !==0) {
          randomIndex = Math.floor(Math.random() * curentIndex)
          curentIndex -= 1;
          
          temporaryValue = arr[curentIndex]
          arr[curentIndex] = arr[randomIndex]
          arr[randomIndex] = temporaryValue
        }
        return arr;
    };
  
    useEffect(() => {
  setArrCard(shuffle(pairOfArrCards))
    },[])
  
    const flipCard = (index) => () => {
      if (
        openedCards[openedCards.length - 1] !== index &&
        openedCards.length < 2
      ) {
        setOpenedCards((opened) => [...opened, index]);
        setMoves((prevMove) => prevMove + 1);
      }
    };
  
  useEffect(() => {
  if (openedCards < 2) return
  const firstMatched = arrCards[openedCards[0]];
  const secondMatched = arrCards[openedCards[1]];
  
  if (secondMatched && firstMatched.id === secondMatched.id){
    setMached([...matched, firstMatched.id])
  }
  
  if (openedCards.length ===2) setTimeout(( )=> setOpenedCards([]),1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ openedCards])
  
  const handleResetGame = () => {
    setOpenedCards([]);
    setMached([]);
    setMoves(0);
    
    setArrCard(arrCards.map((item) => ({
      ...item,
      isFlipped: false,
    })));
    setTimeout(() => {
      
      setArrCard(shuffle(pairOfArrCards));
    }, 1000);
  };

  return (
    <>
    <div className="container">
    <h1>Знайди однакові картки</h1>
     <p className="number-of-strokes">Зроблено кроків: {moves}</p>
     <div className="cards">
      {arrCards.map((item, index) => {
        let isFliped = false;
        if (openedCards.includes(index)) isFliped = true;
        if (matched.includes(item.id)) isFliped = true;

        return (
          <div key={index} className={`card ${isFliped ? 'flipped' : ''}`}
          onClick={flipCard(index)}
          >
            <div className="inner">
            <div className="front">
              <img src={item.img} alt="front-card" width='150' height='150'/>
            </div>

            <div className="back">
              <img src={card} alt="back-card" width='150' height='150'/>
            </div>
            </div>
            </div>
        )
      }
        )}
     </div>
     <button onClick={handleResetGame} className="button-restart">Почати знов</button>
      </div>
  </>
  )
}
