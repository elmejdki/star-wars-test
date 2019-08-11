import React, { Component} from 'react';
import CardList from './Components/CardList';
import CardFilter from './Components/CardFilter';
import Scroll from './Components/Scroll';

class App extends Component{
    constructor(){
        super();

        this.state = {
            next         : true,
            characters   : [],
            searchField  : '',
            activateModal: false,
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
                this.setState({ planet: rs, activateModal: true });
            });
    }

    handleClose = () => {
      this.setState({ planet: null, activateModal: false });
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
                {!this.props.closebutton ? null :
                  <div
                    className="backdrop-close"
                    onClick={this.props.close}
                  >
                    <div className="icon-cross"></div>
                  </div>
                }
                  { !planet ? null : 
                      (<div className="modal">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <span className="close" onClick={ this.handleClose }>&times;</span>
                              </div>
                              <div className="modal-body">
                                  <h2>Planet Name: { planet.name }</h2>
                                  <div className="planet-info">
                                      <span>Population: {planet.population}</span>
                                      <span>Climate: {planet.climate}</span>
                                      <span>Diameter: {planet.diameter} KM</span>
                                      <span>Terrain: {planet.terrain}</span>
                                  </div>
                              </div>
                          </div>
                      </div>)
                  }                
            </div>
        );
    }
}

export default App;
