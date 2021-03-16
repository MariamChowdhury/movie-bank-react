import React from "react";
import { Card, Button } from "react-bootstrap";
const SingleMovie = (props) => {
  const { title, poster_path, id } = props.movie;
  return (
    <div className=" col-md-4 my-3">
      <Card>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        />

        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>

          <Button variant="danger">Show details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleMovie;
