import { fetchAnime } from "./action"
import LoadMore from "./components/LoadMore"

const Home = async () => {
  const data = await fetchAnime(1);

  return (
    <main className="sm:px-16 px-8 py-16 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">
        Explore Anime
      </h2>

      <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  )
}

export default Home
