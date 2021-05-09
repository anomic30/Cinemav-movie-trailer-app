import React from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { forwardRef } from 'react';
import { useState } from 'react';
import movieaddress from "./movieAddress";

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
    const [movieUrl, setMovieUrl] = useState("");
    console.log(movie.id);

    const handleClick = (movie) => {
        if (movieUrl) {
            setMovieUrl("");
        } else {
            setMovieUrl("abcd");
        }
    }
    return (
        <div className="row">
            <div ref={ref} class="videoCard">
                <img onClick={()=>handleClick(movie)} src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="posters" />
                <TextTruncate
                    line={1}
                    element="p"
                    truncateText="..."
                    text={movie.overview}
                />
                <h2>{movie.title || movie.original_name}</h2>
                <p className="videoCard__stats">
                    {/* {movie.media_type && `${movie.media_type} .`} */}
                    {/* {movie.release_date || movie.first_air_date} */}
                    {/* <ThumbUpAltRoundedIcon />{" "}
                    {movie.vote_count} */}
                </p>
            </div>
            <div className="video__box">
                {movieUrl && <iframe
                    title="Movie"
                    src={movieaddress[movie.id]}
                    width="400em"
                    height="260em"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    allowfullscreen="true"
                    scrolling="no"
                />}
            </div>
        </div>
    )
});

export default VideoCard;
