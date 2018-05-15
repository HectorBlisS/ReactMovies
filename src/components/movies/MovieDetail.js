import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export const MovieDetail = ({movie}) => {
    return(
        <div style={{maxWidth:'200px'}}>
              <Card>
                <CardHeader
                title={movie.original_title}
                subtitle={'Acción'}
                avatar="https://www.material-ui.com/images/jsa-128.jpg"
                />
                <CardMedia
                overlay={<CardTitle title={movie.original_title} subtitle={movie.original_title} />}
                >
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
                </CardMedia>
                <CardTitle title={movie.original_title} />
                <CardText >
                {movie.overview && movie.overview.slice(0,100)}...
                </CardText>
                <CardActions>
                <FlatButton label="Comprar" />
                <FlatButton label="Reportar" />
                </CardActions>
            </Card>
        </div>
    );
};