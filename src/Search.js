import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=397d83d7";
const movies = [
  {
    Title: "Bet on Revenge",
    Year: "2017",
    Rated: "N/A",
    Released: "16 Mar 2017",
    Runtime: "121 min",
    Genre: "Adventure, Drama, History",
    Director: "Gábor Herendi",
    Writer: "Bálint Hegedûs, Gábor Herendi",
    Actors: "Ervin Nagy, Andrea Petrik, Tibor Gáspár",
    Plot:
      "Ernõ Blaskovich lost everything after the Hungarian Revolution of 1848. Kincsem, a magnificent horse gives a purpose of his meaningless, self-destructing life. He gets a chance to gain everything back: revenge, love and fame.",
    Language: "Hungarian, English",
    Country: "Hungary",
    Awards: "2 wins & 1 nomination",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzU1YzkzYzQtYTdkMS00ZWM1LThjOWQtMjg1NGIwM2I0MDc5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTkzMzMyNDA@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "7.3/10" }],
    Metascore: "N/A",
    imdbRating: "7.3",
    imdbVotes: "5,638",
    imdbID: "tt4964310",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "The Cat in the Hat",
    Year: "2003",
    Rated: "PG",
    Released: "21 Nov 2003",
    Runtime: "82 min",
    Genre: "Adventure, Comedy, Family",
    Director: "Bo Welch",
    Writer: "Dr. Seuss, Alec Berg, David Mandel",
    Actors: "Mike Myers, Spencer Breslin, Dakota Fanning",
    Plot:
      "Two bored children have their lives turned upside down when a talking cat comes to visit them.",
    Language: "English",
    Country: "United States",
    Awards: "7 wins & 22 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "4.0/10" },
      { Source: "Rotten Tomatoes", Value: "9%" },
      { Source: "Metacritic", Value: "19/100" }
    ],
    Metascore: "19",
    imdbRating: "4.0",
    imdbVotes: "82,491",
    imdbID: "tt0312528",
    Type: "movie",
    DVD: "17 Jan 2006",
    BoxOffice: "$101,149,285",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Flower",
    Year: "2017",
    Rated: "R",
    Released: "16 Mar 2018",
    Runtime: "90 min",
    Genre: "Comedy, Drama",
    Director: "Max Winkler",
    Writer: "Alex McAulay, Matt Spicer, Max Winkler",
    Actors: "Zoey Deutch, Kathryn Hahn, Tim Heidecker",
    Plot:
      "A sexually-curious teen forms an unorthodox kinship with her mentally-unstable stepbrother.",
    Language: "English",
    Country: "United States",
    Awards: "1 nomination",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzViOTBmMGUtODBlMi00YzYzLThiM2MtOGFlMzZkNWU4NDRjXkEyXkFqcGdeQXVyODE0MDY3NzY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.0/10" },
      { Source: "Rotten Tomatoes", Value: "50%" },
      { Source: "Metacritic", Value: "45/100" }
    ],
    Metascore: "45",
    imdbRating: "6.0",
    imdbVotes: "8,969",
    imdbID: "tt2582784",
    Type: "movie",
    DVD: "05 Jun 2018",
    BoxOffice: "$328,188",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  }
];

const Search = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState(true);

  // useEffect(() => {
  //   searchMovies("bet");
  // }, [searchKey])

  // async function searchMovies() {
  //   const res = await fetch(
  //     `${API_URL}&s=${searchKey}`
  //     );
  //   const data = await res.json();
  //   setMovieList(data);
  // };

  // useEffect(() => {
  //   requestSort(sortKey);
  // }, [sortKey]);

  const searchMovies = () => {
    let newList = [];
    newList = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchKey)
    );
    setMovieList(newList);
  };

  const requestSort = () => {
    let newList = [...movieList];
    newList.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return sortDirection ? 1 : -1;
      if (a[sortKey] < b[sortKey]) return sortDirection ? -1 : 1;
      return 0;
    });
    setMovieList(newList);
  };

  const toggleSort = (key) => {
    if (key === sortKey) {
      setSortDirection(!sortDirection);
    }
  };

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchMovies();
        }}
      >
        <input
          type="text"
          placeholder="search movie"
          onChange={(e) => setSearchKey(e.target.value)}
          onBlur={(e) => setSearchKey(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <div>
        <label>Sort by</label>
        <button
          onClick={(e) => {
            setSortKey("Title");
            toggleSort("Title");
            requestSort();
          }}
        >
          Title
        </button>
        <button
          onClick={(e) => {
            setSortKey("Year");
            setSortDirection(() => {
              if (sortKey === "Year") return !sortDirection;
            });
            requestSort();
          }}
        >
          Year
        </button>
      </div>
      <SearchResult movies={movieList} />
    </div>
  );
};

export default Search;
