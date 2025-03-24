import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card";
import UseFetch from "../hooks/UseFetch";


const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams()
  const quarySeach=searchParams.get("q")
  const {data:movies}=UseFetch(apiPath,quarySeach)

  return (
    <main>
      <section>
        <p>{movies.length===0?`No reasult found for '${quarySeach}' `:`Reasult For '${quarySeach}'` }</p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap gap-3 ">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  </main>
  )
}

export default Search
