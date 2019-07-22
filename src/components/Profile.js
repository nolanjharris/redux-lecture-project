import React, { Component } from 'react';
import store, { UPDATE_FAV_SHOW, UPDATE_FAV_MOVIE, UPDATE_FAV_COLOR, UPDATE_FAV_FOOD, UPDATE_FAV_BAND } from './redux/store';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            favShow: '',
            favMovie: '',
            favColor: '',
            favFood: '',
            favBand: ''
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                favShow: store.getState().favShow,
                favMovie: store.getState().favMovie,
                favColor: store.getState().favColor,
                favFood: store.getState().favFood,
                favBand: store.getState().favBand
            })
        })
    }

    handleShowChange = (e) => {
        const action = {
            type: UPDATE_FAV_SHOW,
            payload: e.target.value
        }
        store.dispatch(action);
    }

    handleMovieChange = (e) => {
        const action = {
            type: UPDATE_FAV_MOVIE,
            payload: e.target.value
        }
        store.dispatch(action);
    }

    handleColorChange = (e) => {
        const action = {
            type: UPDATE_FAV_COLOR,
            payload: e.target.value
        }
        store.dispatch(action);
    }

    handleFoodChange = (e) => {
        const action = {
            type: UPDATE_FAV_FOOD,
            payload: e.target.value
        }
        store.dispatch(action);
    }

    handleBandChange = (e) => {
        const action = {
            type: UPDATE_FAV_BAND,
            payload: e.target.value
        }
        store.dispatch(action);
    }

    render() {
        return (
            <div>
                <h1>Welcome {store.getState().username}</h1>
                <input placeholder="Favorite Show" onChange={this.handleShowChange} />
                <input placeholder="Favorite Movie" onChange={this.handleMovieChange} />
                <input placeholder="Favorite Color" onChange={this.handleColorChange} />
                <input placeholder="Favorite Food" onChange={this.handleFoodChange} />
                <input placeholder="Favorite Band" onChange={this.handleBandChange} />
                <h1>Your favorite show is {this.state.favShow}</h1>
                <h1>Your favorite movie is {this.state.favMovie}</h1>
                <h1>Your favorite color is {this.state.favColor}</h1>
                <h1>Your favorite food is {this.state.favFood}</h1>
                <h1>Your favorite band is {this.state.favBand}</h1>
            </div>
        )
    }
}