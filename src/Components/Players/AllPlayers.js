import { useState } from "react";
import useFetchFakeAllP from "../utils/useFetchFakeAllP";
import AllPlayerList from "./AllPlayerList";

const AllPlayers = () => {
  const {players, isPending, error} = useFetchFakeAllP() 
  const [query, setQuery] = useState('')
  return (
    <div className="bg-black h-screen overflow-y-scroll">
      <div className="allPlayers  h-screen text-white bg-no-repeat pt-12 bg-[url('https://wallpaper.dog/large/17206943.jpg')] ">  
      <h1 className="text-center text-2xl">All Players</h1>
      <div className="w-100 flex justify-center">
        <div className=" p-2 flex w-full flex-wrap items-stretch w-80">
          <input
            type="search"
            className="m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] font-normal leading-e-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3" onChange={e=>setQuery(e.target.value)} />
        </div>
     </div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {players && <AllPlayerList players={players} query={query}/>}
    </div>
    </div>
  );
}
 
export default AllPlayers;