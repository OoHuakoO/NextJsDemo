import React from "react";

export default function Movies(props) {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {props.movies.map((movies, index) => {
          return <li key={`${index}`}>{`${index + 1}. ${movies}`}</li>;
        })}
      </ul>
      <span>{JSON.stringify(props.movies)}</span>
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      movies: ["Back to the future", "The contact", "iRobot", "Superman"],
    }, // will be passed to the page component as props
  };
}
