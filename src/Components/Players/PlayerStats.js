import {useLocation} from "react-router-dom";
import useFetchPlayer from "../utils/useFetchPlayer";
import './PlayerStats.css'

const PlayerStats = () => {
  const location = useLocation();
  const player = new URLSearchParams(location.search).get("query");
  return (
    <div className="playerStats flex justify-center items-center">
      <div className="stats flex justify-center text-white outline outline-1">
        <div className="stats-grid-container grid grid-cols-3 gap-4 shrink-0">
          <div className="base_info outline outline-1 ">s</div>
          <div className="headshot outline outline-1">s</div>
          <div className="otherStats outline outline-1">s</div>
          <div className="col-span-3 grid grid-cols-2 outline outline-1">
            <div className="main_stats grid grid-cols-3">
            </div>
            <div className="info"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default PlayerStats;