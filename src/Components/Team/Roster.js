import { useNavigate } from "react-router-dom";

const Roster = ({ Roster }) => {
  const rosterArray = Object.values(Roster);
  const navigate = useNavigate()
  const handleClick = (e) =>{
    navigate(`/player?query=${e.target.id}`)
  }

  return (
    <div className="md:col-span-3 lg:gap-6 lg:col-span-3 lg:grid lg:grid-cols-3 outline outline-1 lg:h-[400px] lg:pt-5 overflow-y-scroll">
      {rosterArray.map((player) => (
        <div key={player.bRefID} id={player.espnName} onClick={(e)=>handleClick(e)} className=" bg-black opacity-80 text-center playerCard text-center outline outline-1 p-10">
          {player.espnName}
        </div>
      ))}
    </div>
  );
};

export default Roster;
