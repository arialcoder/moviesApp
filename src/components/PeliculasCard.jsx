import "./PeliculasCard.css";

export function PeliculasCard({ pelicula }) {

    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path} `

    return (
        <li className="movieCard">
            <img className="movieImg" src={imgURL} alt={pelicula.title} />
            <div>{pelicula.title}</div>

        </li>
    )


}