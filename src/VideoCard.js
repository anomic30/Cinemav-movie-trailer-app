import React from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { forwardRef } from 'react';
import { useState, useEffect } from 'react';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
    const [trailerURL, setTrailerURL] = useState("");
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        movieTrailer(movie.title || movie.original_name).then((res) => {
            setTrailerURL(res);
        })
    },[movie.title,movie.original_name])

    return (
        <div className="row">
            <div ref={ref} class="videoCard">
                <img onClick={()=>setShow(!show)} src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="posters" />
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
            {show && <ReactPlayer url={trailerURL} controls={true} width='100%' className="trailer"/>}
        </div>
    )
});

export default VideoCard;
