import { GameInfo } from './game-info'
import { GameCell } from './game-cell'
import styles from './game.module.css'
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
    <div className={styles['game']}>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className={styles['game-field']}>
        {cells.map((symbol, index) => (
          <GameCell 
            key={index}
            symbol={symbol} 
            isWinner={winnerSequence?.includes(index)} 
            onClick={() => handleCellClick(index)} 
          />
        ))}
      </div>
      <button className={styles['reset']} onClick={handleResetClick}>Сбросить</button>
    </div>
  )
}