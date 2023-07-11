import TeamStats from "./TeamStats";
import { useLocation } from "react-router-dom";
import useFetchFakeTeam from "../utils/useFetchFakeTeam";

const TeamPage = () => {
  const location = useLocation();
  const team = new URLSearchParams(location.search).get("query");
  const { teamObject, isPending, error} = useFetchFakeTeam(team)
  return (
    <div className="PlayerPage">
      { error && <div> {error} </div>}
      { isPending && <iframe className=" bg-zinc-950 w-screen h-screen" src="https://embed.lottiefiles.com/animation/32960"></iframe>}
      { teamObject && <TeamStats teamObject={teamObject} />}
    </div>
  );
}
 
export default TeamPage;