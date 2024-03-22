import  { useEffect, useState } from 'react'
import { Square } from './Square'

export const Board = () => {
const [board, setBoard] = useState(Array( 9).fill(''))
const [turn, setTurn] = useState('X')
const [winer, setWiner] = useState()

const handleClick = (index) => {
    if (index < 0 || index >9 || board[index] || winer) return
    const newBoard = [...board]
    newBoard.splice(index, 1, turn)
    setBoard(newBoard)
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)
  
}

const handleRestart = () =>{
setBoard(Array(9).fill(''))
setWiner()
}

useEffect(() =>{
const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let winningPositionIndex = 0
let newWinner = ''

while(winningPositionIndex < winningPosition.length && !newWinner){
    const boardPositionToCheck = winningPosition[winningPositionIndex]
    const boardValueToCheck = boardPositionToCheck.map(index => board[index])
    const chekingValue = boardValueToCheck[0]
    const isFinished = boardValueToCheck.every((value) => value === chekingValue && chekingValue)
    newWinner = isFinished ? chekingValue : null
    winningPositionIndex++
}
if ( newWinner) {
    setWiner( newWinner ==='X' ? 'ГРАВЕЦЬ 1' : 'ГРАВЕЦЬ2')
}

},[board])


  return (
    <div className='container-board'>
        <h1 className='title'>Хрестики-Нулики</h1>
    {winer && <h2>Переможець - {winer} ({turn === 'X' ? 'O' : 'X'})</h2> }

<div className='board'>
{board.map((el,index) => (
    <Square key={index} value={el} index={index} handleClick={handleClick} />
))}
</div>
        <button className='button-restart' onClick={handleRestart}>Почати знов</button>
    </div>
  )
}
