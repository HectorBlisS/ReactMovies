import React, {Component} from 'react';
import {MovieList} from './MovieList';
import {RaisedButton} from 'material-ui';
import LinearProgress from 'material-ui/LinearProgress';
import CircularProgress from 'material-ui/CircularProgress';


class MovieContainer extends Component{

    state = {
        movies:[],
        loading:false
        }

    componentWillMount(){
        this.getMovies();
    }

    getMovies = (number=28) =>{
        this.setState({loading:true});
        console.log(number);
        const url = `https://api.themoviedb.org/3/genre/${number}/movies?api_key=f941d82d2eb2ad6ff536b1982f931b6b&language=es`
        fetch(url)
        .then(r=>r.json())
        .then(response=>{
            this.setState({movies:response.results, loading:false});
        });
    }

    render(){
        console.log(this.state.movies);
        return(
            <div>
                {this.state.loading && <LinearProgress/>}
                <RaisedButton
                    label={this.state.loading ? <CircularProgress/> : "Accion"}
                    primary
                    onClick={()=>this.getMovies()}
                    
                />
                <RaisedButton
                    label="Drama"
                    secondary
                    onClick={()=>this.getMovies(18)}
                />
                <RaisedButton
                    label="Comedia"
                    onClick={()=>this.getMovies(35)}
                />
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default MovieContainer;