import React from "react";

//function name is similar to component name -- this is not a necessity but a good practice
const MovieCard = ({movie}) =>
{
    return(
        <div className="movie">
            <div>
            {movie.Year}
            </div>
            <div>
               <img src={movie.Poster!=='N/A'? movie.Poster:'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>
        
            <div>
               <span>{movie.Type}</span>
               <h3>{movie.Title}</h3>
            </div>

        </div>
    );
   

}
export default MovieCard;