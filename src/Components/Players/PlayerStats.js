import { useLocation } from "react-router-dom";
import useFetchPlayer from "../utils/useFetchPlayer";
import React from "react"; // Add this import if it's missing
import './PlayerStats.css';

const PlayerStats = ({playerInfo}) => {
  return (
    <div className="playerStats flex justify-center items-center">
      <div className="stats flex justify-center text-white pt-8">
        <div className="stats-grid-container grid grid-cols-3 gap-10 shrink-0">
          <div className="base_info outline outline-1 flex flex-col">
            {/* <h4 className="name text-2xl p-5">{playerInfo?.bRefName}</h4> */}
            <h4 className="height text-2xl">Height</h4>
            {/* <p className="text-xl mb-5">{playerInfo?.height}</p> */}
            <h4 className="birthdate text-2xl">Birthdate</h4>
            {/* <p className="mb-5 text-xl">{playerInfo?.bDay}</p> */}
          </div>
          <div className="headshot outline outline-1">
            {/* <img src={headshot} alt="" /> */}
          </div>
          <div className="otherStats outline outline-1 flex flex-col">
            <h4 className="text-2xl pt-5 mb-4">College</h4>
            {/* <p className="college text-xl mb-5">{playerInfo?.college}</p> */}
            <h4 className="text-2xl mb-4">Espn Id</h4>
            {/* <p className="text-xl">{playerInfo?.espnID}</p> */}
          </div>
          <div className="main_stats col-span-3 grid grid-cols-2 outline outline-1 h-[300px]">
            <div className="grid grid-cols-3">
              <div className="weight">
                <h4 className="text-center p-2">Weight</h4>
                {/* <p>{playerInfo?.weight}</p> */}
              </div>
              <div className="ast outline outline-1">
                <h4 className="text-center p-2">Assists</h4>
                {/* <p>{playerInfo.ast}</p> */}
              </div>
              <div className="pts outline outline-1">
                <h4 className="text-center p-2">Points</h4>
                {/* <p>{playerInfo?.pts}</p> */}
              </div>
              <div className="mins">
                <h4 className="text-center p-2">Minutes</h4>
                {/* <p>{playerInfo?.mins}</p> */}
              </div>
              <div className="games outline outline-1">
                <h4 className="text-center p-2">Games Played</h4>
                {/* <p>{playerInfo?.gamesPlayed}</p>gamesPlayed */}
              </div>
              <div className="fgm outline outline-1">
                <h4 className="text-center p-2">FGM</h4>
                {/* <p>{playerInfo.fgm}</p> */}
              </div>
            </div>
            <div className="info grid grid-cols-2">
              <div className="position text-center outline outline-1">
                <h4 className="text-center text-xl p-2">Position</h4>
                {/* <p>{playerInfo?.pos}</p> height */}
                <p className="text-2xl">sf</p>
              </div>
              <div className="jersey_number text-center">
                <h4 className="text-center text-xl p-2">Jersey Num</h4>
                <p className="text-2xl">14</p>
                {/* <p>{playerInfo?.jerseyNum}</p> */}
              </div>
              <div className="links col-span-2 h-[80px] text-center">
                <h4 className="p-2 text-xl">NBA / ESPN LINKS</h4>
                <ul>
                  <li>link 1</li>
                  <li>link 2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
