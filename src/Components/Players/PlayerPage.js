import { useState } from "react";
import PlayerStats from "./PlayerStats";

const PlayerPage = () => {
  // const location = useLocation();
  // const player = new URLSearchParams(location.search).get("query");
  // // const { playerInfo, isPending, error} = useFetchPlayer(player);
  const [isPending, setIsPending] = useState(true)
  const [playerInfo, setPlayerInfo] = useState()
  setTimeout(() => {
    const playerInfo = {
      james:'pooo',
      rror:'adsad'
    }
    setPlayerInfo(playerInfo  )
    setIsPending(false)
    console.log("Value changed to false");
  }, 10000);
  let error = false
  return (
    <div className="PlayerPage">
      { error && <div> {error} </div>}
      { isPending &&<iframe className=" bg-zinc-950 w-screen h-screen" src="https://embed.lottiefiles.com/animation/32960">Loading</iframe>}
      { playerInfo && <PlayerStats playerInfo= {playerInfo} />}
    </div>
  );
}
 
export default PlayerPage;