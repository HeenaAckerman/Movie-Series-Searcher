import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './SearchIcon.png';


const API_URL= 'http://www.omdbapi.com?apikey=d7b4841e';

/*const movie1= {
    "Title": "Ironman Triathlon World Championship",
    "Year": "2005",
    "imdbID": "tt1129377",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTNlNjAyMTUtMzQwZC00NjM4LTk5NzYtMDU1NTQ3MTZiZTZlXkEyXkFqcGdeQXVyMjcxMjE1OTM@._V1_SX300.jpg"
};*/

const App=()=>
{
    //state
    const [movies , setMovies]=useState([]);
    //u can have multiple states, use effect hoop for one componet
    const [searchTerm , setSearchTerm] = useState("");
    
    
    
    
    
    
    
    //async data it will take some time to fecth data
    const searchMovies =async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect( ()=> {
        searchMovies('spiderman');

    },[]);
    return(
     <div className="app">


        <h1> Search It</h1>


        <div className="search">
            <input placeholder="Search for movies"
            value={searchTerm}               //"Superman"//staticly set value
            onChange={(e) => setSearchTerm(e.target.value)}//e=event
            
            />
            <img src={SearchIcon} alt="search"
            onClick={() => searchMovies(searchTerm)}
            />

        </div>
        {
            movies?.length > 0 ? (
            <div className="container">
                {movies.map( (movie) =>(
                    <MovieCard movie={movie} />
                ))}   
            </div>
            ) : ( <div className="empty">
                <h2> No movie found</h2> </div>
            
            )
        }


       <h4> Made by : Heena  </h4>

     </div>
    );
}
export default App;