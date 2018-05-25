import React, { Component } from 'react';
import './conwayGrid.css';

class ConwayGame extends Component {
  //# Use arrow function
  renderCells(cells) {
    return (
      cells.map(function (row) {
        return (
          //# When using map, add a key to the eleme
          <div className="conway-grid_row">
            {row.map(function (cell) {
              return (
                //# When using map, add a key to the eleme
                //# in concise evaluation, better return null instead
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
