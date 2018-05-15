import React from 'react';
import {MovieDetail} from './MovieDetail';

export const MovieList = ({movies}) => {
    return(
        <section style={{display:'flex', flexWrap:'wrap'}}>
            {movies.map((movie, index)=>{

            return <MovieDetail key={index} movie={movie} />

            })}
        </section>
    );
};