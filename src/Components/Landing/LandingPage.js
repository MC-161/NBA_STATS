import BannerPannel from "../BannerPannel";
import Home from "../Home";
import TopPlayer from "./player_landing/TopPlayer"
import TopTeam from "./team_landing/TopTeam";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Home />
      <TopPlayer />
      <BannerPannel />
      <TopTeam />
    </div>
  );
}
 
export default LandingPage;