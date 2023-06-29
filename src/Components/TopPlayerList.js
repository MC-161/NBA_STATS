import Atropos from 'atropos/react';
const TopPlayerList = () => {
  const data = {
    players:['jokivic','james','giannis', 'steph'],
    imgs:{
      jokivic:'https://w0.peakpx.com/wallpaper/928/325/HD-wallpaper-nikola-jokic-mvp-2021.jpg',
      james:'https://w0.peakpx.com/wallpaper/445/368/HD-wallpaper-lebron-james-los-angeles-lakers-forward-portrait-creative-art-american-basketball-player-nba-basketball-usa-national-basketball-association.jpg',
      giannis:'https://wallpaperaccess.com/full/1291368.jpg',
      steph:'https://images7.alphacoders.com/982/982253.jpg',
    }
  }
  return (
    <div className="tp_grid grid grid-cols-4 gap-20">
      {data.players.map( player =>(
        <div className="player">
          <Atropos 
            activeOffset={40} 
            shadowScale={1.05}
            className='player cursor-pointer' >
            <img className='w-full h-full object-cover rounded-xl' src={data.imgs[player]} alt="" />
          </Atropos>
        </div>
      ))}
    </div>
  );
}
 
export default TopPlayerList;