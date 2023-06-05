import { GameInfo } from './game-info'
import { GameCell } from './game-cell'
import {useGameState} from './use-game-state'
 
export default function Game() {

    const {cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDraw} = useGameState()
   
//   const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined
//   const isDraw = !winnerSequence && cells.filter(value => value).length === 9;

  return (
    <div className='flex flex-col items-center w-40 my-24 mx-auto p-5 border border-black'>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className='grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]'>
        {cells.map((symbol, index) => (
          <GameCell 
            key={index}
            symbol={symbol} 
            isWinner={winnerSequence?.includes(index)} 
            onClick={() => handleCellClick(index)} 
          />
        ))}
      </div>
      <button className='cursor-pointer mt-2.5 bg-transparent border border-gray-50 py-1 px-3 rounded' onClick={handleResetClick}>Сбросить</button>
    </div>
  )
}