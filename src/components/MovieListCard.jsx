import React from "react";
import { Card } from "react-bootstrap";

export default function MovieListCard(props) {
  return (
    <div className="card">
      <Card>
        <Card.Body>
          <img src={props.movie.Poster}></img>
          <Card.Title>{props.movie.Title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
