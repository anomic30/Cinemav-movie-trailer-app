import React from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import { forwardRef } from 'react';

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} class="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="posters" />
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            {/* <p>{movie.overview}</p> */}
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} .`}
                {movie.release_date || movie.first_air_date} .
                <ThumbUpAltRoundedIcon />{" "}
                {movie.vote_count}
            </p>
        </div>
    )
});

export default VideoCard
