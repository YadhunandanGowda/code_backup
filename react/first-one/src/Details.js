import React, { Component } from 'react';
import Pet from '@frontendmasters/pet';
import Carousel from './carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from "./ThemeContext";

class Details extends Component {

    constructor (props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    // state = {loading:true};

componentDidMount () {
    // throw new Error("some")
    Pet.animal(this.props.id)
    .then(({animal})=> {
        this.setState({
            name: animal.name,
            animal: animal.type,
            location: `${animal.contact.address.city},${animal.contact.address.state}`,
            description: animal.description,
            media: animal.photos,
            breed: animal.breeds.primary,
            loading: false
        })
    }, console.error)
}

    render () {
    const {name, animal, loaction, description, media, breed} = this.state;

        if(this.state.loading) {
            return (<div className="details">
                <h1>Loading. . .</h1>
            </div>)
        }else {
            return (
                <div className="details">
                    <Carousel media={media}/>
                    <div>
                        <h1>{name}</h1> 
                        <h2>{`${animal}, ${breed}, ${loaction}`}</h2>
                        <ThemeContext.Consumer>
                            {([theme]) => (
                            <button
                                onClick={this.toggleModal}
                                style={{ backgroundColor: theme }}
                            >
                                Adopt {name}
                            </button>
                            )}
                        </ThemeContext.Consumer>
                        <p>{description}</p>
                    </div>
                </div>
            )
        }
    }
}

export default function DetailsErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <Details {...props} />
      </ErrorBoundary>
    );
  }