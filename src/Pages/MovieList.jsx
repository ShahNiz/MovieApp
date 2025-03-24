import Card from "../Components/Card";
import UseFetch from "../hooks/UseFetch";

const MovieList = ({apiPath}) => {
 const {data:movies}=UseFetch(apiPath)

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-3 ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
