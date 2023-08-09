import Roster from './Roster';

const TeamStats = ({teamObject}) => {
  const logo = teamObject.nbaComLogo1
  const roster = teamObject.Roster
  console.log(roster)
  return (
    <div className="playerStats flex justify-center items-center">
      <div className="stats flex flex-col justify-center text-white pt-8">
        <div className="stats-grid-container grid grid-cols-3 gap-10 mb-10 shrink-0">
          <div className="headshot flex justify-center items-center">
            <img className='h-60' src={logo} alt="" />
          </div>
          <div className="base_info outline outline-1 flex flex-col pt-12">
            <h4 className="text-2xl">WINS</h4>
            <h4 className="text-2xl p-5">{teamObject.wins}</h4>
            <h4 className="text-2xl">LOSSES</h4>
            <p className="text-xl mb-5">{teamObject.loss}</p>
          </div>
          <div className="otherStats outline outline-1 flex flex-col pt-10">
            <h4 className="text-2xl p-2">Team Name</h4>
            <p className="text-xl ">{teamObject.teamName}</p>
            <h4 className="text-2xl pt-5">Team City</h4>
            <p className="text-xl">{teamObject.teamCity}</p>
          </div>
        </div>
        <div className='text-center text-2xl'>Roster</div>
        {roster && <Roster Roster={roster}/>}
      </div>
    </div>
  );
};

export default TeamStats;
