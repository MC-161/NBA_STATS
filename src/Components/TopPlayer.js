import './TopPlayer.css'
import TopPlayerList from './TopPlayerList';
const TopPlayer = () => {
  const container = document.querySelector('.player')
  return (
    <div className="topPlayer">
      <div className='tp_div'>
        <p className='tp_Title text-2xl pt-5'>Top Player</p>
        <div className='tp_Grid_Container flex justify-center p-10 '>
          <TopPlayerList />
        </div>
      </div>
    </div>
  );
}
export default TopPlayer;