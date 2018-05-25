import React, { Component } from 'react';
import './conwayGrid.css';

class ConwayGame extends Component {
  renderCells(cells) {
    return (       
        cells.map(function(row) {
            return (
                <div className="conway-grid_row">
                    {row.map(function(cell) {
                        return (
                            <div className={"conway-grid_cell" + (cell ? " alive" : '')}></div>
                        );
                    })}
                </div>
            );
        })
    ); 
  }
  
  render() {
    return (
        <div className="conway-grid_container">
            <div className="conway-grid">
                {this.renderCells(this.props.cells)}
            </div>
        </div>
    );
  }
}

export default ConwayGame;
