import React, { Component } from 'react';
import ConwayGrid from '../../components/conwayGrid/conwayGrid';
import './conwayGame.css';

class ConwayGame extends Component {
  //# Avoid the use of constructor
  //# Would make sense to have your functions in the lifecycle order, so there's a clear walkthrough
  constructor(props) {
    super(props);

    this.state = {
      cells: this.getInitialState()
    };

    this.runStep = this.runStep.bind(this);
  }

  componentDidMount() {
    //# Should wait 1000s before first step
    this.interval = setInterval(() => this.runStep(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //# Use arrow function
  runStep() {
    this.setState((prevState) => {
      return { cells: this.calcNextStep(prevState.cells) };
    });
  }

  //# Use arrow function
  calcNextStep(cells) {
    //# Replace var everywhere for let or const
    //# Use a deep cloning method instead, this method is O(2n**2) while deep cloning O(n)
    var clonedCells = JSON.parse(JSON.stringify(cells));

    //Use for(let i in cells)
    for (var i = 0; i < cells.length; i++) {
      //Use for(let j in cells[i])
      for (var j = 0; j < cells[i].length; j++) {
        clonedCells[i][j] = this.isAlive(cells, i, j);
      }
    }

    //# Use deep comparison
    if (JSON.stringify(clonedCells) === JSON.stringify(cells)) {
      clearInterval(this.interval);
    }

    return clonedCells;
  }

  isAlive(cells, indexX, indexY) {
    let aliveNeighbours = 0;
    let isAlive = false;
    for (var i = indexX - 1; i <= indexX + 1; i++) {
      for (var j = indexY - 1; j <= indexY + 1; j++) {
        //# For this long comparison, explain each
        //# Use strong comparison !== ===
        if (i >= 0 && j >= 0 && i < cells.length && j <= cells[i].length && cells[i][j] && (i != indexX || j != indexY)) {
          //# Better use aliveNeighbours+= 1
          aliveNeighbours++;
        }
      }
    }

    //# This can be way more concise, the cells only live when it's 2 or 3
    if (cells[indexX][indexY]) {
      if (aliveNeighbours < 2) {
        isAlive = false;
      } else if (aliveNeighbours >= 2 && aliveNeighbours < 4) {
        isAlive = true;
      } else if (aliveNeighbours >= 4) {
        isAlive = false;
      }
    } else {
      if (aliveNeighbours === 3) {
        isAlive = true;
      }
    }

    return isAlive;
  }

  getInitialState() {
    let cells = [];
    for (var i = 0; i < 50; i++) {
      let row = [];

      for (var j = 0; j < 50; j++) {
        row.push(false);
      }
      cells.push(row);
    }

    cells[0][0] = true;
    cells[0][1] = true;
    cells[1][0] = true;
    cells[1][3] = true;
    cells[2][1] = true;
    cells[2][2] = true;

    return cells;
  }

  render() {
    return (
      <div className="conway-game">
        <h1>Conway's Game of Life by Sergio R</h1>
        <div className="conway-game_container">
          <ConwayGrid cells={this.state.cells} />
        </div>
      </div>
    );
  }
}

export default ConwayGame;
