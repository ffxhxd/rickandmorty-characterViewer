import useEpisodes from "../../Utils/useEpisodes";
import EpisodeCard from "./EpisodeCard";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import bgImg from "../../Assets/episodePageBG.jpg";

const Episodes = () => {
  const data = useEpisodes()?.results;

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Header />

        <div className="overflow-x-scroll flex items-center gap-10 p-4 m-auto w-screen no-scrollbar">
          <div className="flex">
            {data.map((curr) => (
              <EpisodeCard key={curr.id} data={curr} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
