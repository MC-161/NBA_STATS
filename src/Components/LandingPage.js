import BannerPannel from "./BannerPannel";
import Home from "./Home";
import TopPlayer from "./TopPlayer";
import TopTeam from "./TopTeam";
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