import React, { Component} from 'react';
import CardList from './Components/CardList';
import CardFilter from './Components/CardFilter';
import Scroll from './Components/Scroll';
import Modal from './Components/Modal';

class App extends Component{
    constructor(){
        super();

        this.state = {
            next         : true,
            characters   : [],
            searchField  : '',
            planet       : null
        }
    }

    handleSearchChange = ( e ) => {
        this.setState({ searchField: e.target.value });
    }

    handleClickEvent = ( ) => {
        if( this.state.next ){
            fetch( this.state.next )
            .then( response => response.json() )
            .then( rs => {
                this.setState({ 
                  characters: this.state.characters.concat( rs.results ),
                  next: rs.next 
                });
            })
        }
    }

    handleClick = ( planet ) => {
        fetch( planet )
            .then( response => response.json() )
            .then( rs => {
                this.setState({ planet: rs });
            });
    }

    handleClose = () => {
      this.setState({ planet: null });
    }

    componentWillMount() {
        fetch( 'https://swapi.co/api/people' )
            .then( response => response.json() )
            .then( rs => {
                this.setState({ characters: rs.results, next: rs.next });
            })
    }
  
    render(){
        const { characters, searchField, planet } = this.state;
        const filteredcharacters = characters.filter(character => {
            return character.name.toLowerCase().includes(
                searchField.toLowerCase()
            )
        })

        return !characters.length ? 
            <h1 className="center">Loading...</h1> : 
        (
            <div className = "container">
                <div className = "header">
                    <div className="title">
                        <span className = "crowd-icon"></span>
                        <h1>Star Wars Characters</h1>
                    </div>
                    <CardFilter searchChange = { this.handleSearchChange } />
                </div>
                <Scroll handleClickEvent = { this.handleClickEvent } >
                    <CardList 
                        handleClick = { this.handleClick }
                        characters = { filteredcharacters } />
                </Scroll>
                    { !planet ? null : 
                        (
                            <Modal 
                                handleClose = { this.handleClose } 
                                planet = { planet } 
                                />
                        )
                    }                
            </div>
        );
    }
}

export default App;
