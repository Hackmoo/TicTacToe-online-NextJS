import { useState } from "react";
import { GameInfo, GameTitle, GameField } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {

  const [playersAmount, setPlayersAmount] = useState(2)

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
       <GameTitle playersAmount={playersAmount}/>
       <GameInfo className="mt-2" playersAmount={playersAmount} />
       <GameField className='mt-6'playersAmount={playersAmount} />
      </main>
    </div>
  );
}
