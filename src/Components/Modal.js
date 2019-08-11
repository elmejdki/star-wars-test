import React from 'react';

const Modal = ({ handleClose, planet }) => {
    let { name, population, climate, diameter, terrain } = planet;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={ handleClose }>&times;</span>
                </div>
                <div className="modal-body">
                    <h2>Planet Name: { name }</h2>
                    <div className="planet-info">
                        <span>Population: { population }</span>
                        <span>Climate: { climate }</span>
                        <span>Diameter: { diameter } KM</span>
                        <span>Terrain: { terrain }</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Modal;

