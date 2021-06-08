import React, { Component } from "react";


class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: this.props.media,
            active: 0
        }
        // this.handleIndexClick = this.handleIndexClick.bind(this);
    }
    
    // static getDrivedStateFromprops ({media}){
    //     let photos = ["http://placecorgi.com/600/600"];

    //     if(media.length) {
    //         photos = photos.map(({large}) => large);
    //     }

    //     return {photos};
    // }

    handleIndexClick  = (event) => {
        // this.state.active = +event.target.dataset.index;
        this.setState({
            active: +event.target.dataset.index
        })
    }

    render () {
        const {photos, active} = this.state;

        return (
            <div className="carousel">
                <img src={photos[active].large} alt="animal" />
            <div className="carousel-smaller">
                {this.props.media.map((photo, index)=> (
                    <img
                        key={photo.large}
                        onClick={this.handleIndexClick}
                        data-index={index}
                        src={photo.large}
                        className={index === active? "active": ""}
                        alt="animal thumbnail"
                    />
                ))}
            </div>
            </div>
        )
    }
}

export default Carousel;