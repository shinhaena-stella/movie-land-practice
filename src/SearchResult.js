const SearchResult = ({ movies }) => {
  //{ imdbID, Year, Poster, Title, Type, Plot }

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie" key={movie.imdbID}>
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={movie.Title}
              />
              <div>
                {movie.Plot} && {movie.Plot}
              </div>
            </div>
            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
          </div>
        ))
      ) : (
        <h1>There's no movie to show</h1>
      )}
    </div>
  );
};

export default SearchResult;
