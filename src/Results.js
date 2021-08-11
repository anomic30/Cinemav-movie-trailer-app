import React, { useEffect, useState } from 'react';
import "./Results.css";
import VideoCard from './VideoCard';
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedOption, searchItem }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]);

    console.log(searchItem);

    return (
            <div className="results">
                <FlipMove>
                    {movies.filter((movie) => {
                        if (movie.original_name) {
                            return movie.original_name.toLowerCase().includes(searchItem.toLowerCase());
                        } else if(movie.title){
                            return movie.title.toLowerCase().includes(searchItem.toLowerCase());
                        } else {
                            return <h1>No result!</h1>
                        }
                    }).map((movie) => (
                        <VideoCard key={movie.id} movie={movie} />
                    ))}
                </FlipMove>
            </div>
    )
}

export default Results
