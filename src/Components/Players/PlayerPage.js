import PlayerStats from "./PlayerStats";
import { useLocation } from "react-router-dom";
import useFetchPlayer from "../utils/useFetchPlayer";
import useFetchFake from "../utils/useFetchFake";

const PlayerPage = () => {
  const location = useLocation();
  const player = new URLSearchParams(location.search).get("query");
  const { playerInfo, isPending, error} = useFetchFake()
  return (
    <div className="PlayerPage">
      { error && <div> {error} </div>}
      { isPending && <iframe className=" bg-zinc-950 w-screen h-screen" src="https://embed.lottiefiles.com/animation/32960"></iframe>}
      { playerInfo && <PlayerStats playerInfo={playerInfo} />}
    </div>
  );
}
 
export default PlayerPage;