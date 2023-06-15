import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { SquareIcon } from "./icons/square-icon";
import { gameSymbols } from "./constants";




export function GameSymbol({symbol, classname}){
    const Icon = {
      [gameSymbols.CROSS]: CrossIcon,
      [gameSymbols.ZERO]: ZeroIcon,
      [gameSymbols.TRIANGLE]: TriangleIcon,
      [gameSymbols.SQUARE]: SquareIcon
    }[symbol] ?? CrossIcon

    return <Icon className={classname}/>
}