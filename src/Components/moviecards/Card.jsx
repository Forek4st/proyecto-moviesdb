import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const API_KEY = "faa79a51fcacae083dd37b6815606a4a";
const items = 5;

const CardComponent = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es&page=1`
        );
        const genreResponse = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es`
        );

        const [movieData, genreData] = await Promise.all([
          movieResponse.json(),
          genreResponse.json(),
        ]);

        const movies = movieData.results.map((movie) => {
          const movieGenre = movie.genre_ids.map(
            (genreId) =>
              genreData.genres.find((genre) => genre.id === genreId)?.name
          );

          return {
            title: movie.title,
            resumen: movie.overview,
            imgMovie: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            release_date: movie.release_date,
            genre: movieGenre.join(", "),
          };
        });

        setMoviesData(movies);
      } catch (error) {
        console.error("Error obteniendo datos de las películas:", error);
      }
    };

    fetchData();
  }, []);

  const renderMovieCards = () => {
    return moviesData
      .slice(startIndex, startIndex + items)
      .map((movie, index) => (
        <Col /* key={index} md={3} */>
          <Card>
            <Card.Img variant="top" src={movie.imgMovie} alt={movie.title} />
            <Card.Body>
              <Card.Title
                id={`card-title-${index}`}
              >{`${movie.title}`}</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ));
  };

  const handleNextItems = () => {
    setStartIndex((prevIndex) => prevIndex + items);
  };

  const handlePrevItems = () => {
    setStartIndex((prevIndex) =>
      prevIndex - items >= 0 ? prevIndex - items : 0
    );
  };

  return (
    <div className="card-wrapper">
      <Button
        variant="outline-primary"
        onClick={handlePrevItems}
        disabled={startIndex === 0}
      >
       Atrás
      </Button>
      <Row className="card-container">{renderMovieCards()}</Row>
      
        <Button
          variant="outline-primary"
          onClick={handleNextItems}
          disabled={startIndex + items >= moviesData.length}
        >
          Adelante
        </Button>
      
    </div>
  );
};

export default CardComponent;
