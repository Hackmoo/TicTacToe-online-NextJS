import { GameSymbol } from "./game-symbol"


export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
    if (isDraw) {
      return (
        <div className='mb-[10px]'>
          Ничья
        </div>
      )
    }
  
    if (winnerSymbol) {
      return (
        <div className='mb-[10px]'>
          Победитель: <GameSymbol symbol={winnerSymbol} />
        </div>
      )
    }
  
    return (
      <div className='mb-[10px]'>
        Ход: <GameSymbol symbol={currentStep} />
      </div>
    )
  }
  