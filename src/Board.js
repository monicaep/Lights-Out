import React, {Component} from "react";
import Box from "./Box";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
    this.createBoard = this.createBoard.bind(this);
    this.flipBoxesAround = this.flipBoxesAround.bind(this);
  }
  
  createBoard() {
    let board = [];
    for (let i = 0; i < this.props.nRows; i++) {
      let row = [];
      for (let j = 0; j < this.props.nCols; j++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  flipBoxesAround(coord) {
    let {nCols, nRows} = this.props;
    let board = this.state.board;
    let [row, col] = coord.split("-").map(Number);

    function flipBox(row, col) {
      // if this coord is actually on board, flip it
      if (row >= 0 && row < nRows && col >= 0 && col < nCols) {
        board[row][col] = !board[row][col];
      }
    }
    
    //flip this box and the boxes around it
    flipBox(row, col);
    flipBox((row + 1), col);
    flipBox(row, (col + 1));
    flipBox((row -1), col);
    flipBox(row, (col - 1));

    let hasWon = board.every(row => row.every(box => !box));

    this.setState({board, hasWon});
  }

  render() {
    let starterBoard = [];
    for (let row = 0; row < this.props.nRows; row++) {
      let currRow = [];
      for (let col = 0; col < this.props.nCols; col++) {
        let coord = `${row}-${col}`
        currRow.push(
          <Box 
            key={coord} 
            isLit={this.state.board[row][col]} 
            flipBoxesAroundMe={() => this.flipBoxesAround(coord)}
          />)
      }
      starterBoard.push(<tr>{currRow}</tr>)
    }

    return (
      <div className='Board'>
        {this.state.hasWon ?
        <div className='Board-title'>
          <div className='Board-winner'><b>W<span>I</span><span>NN</span>E<span>R</span>!</b></div>
        </div> 
        :
        <div>
          <div className='Board-title'><b>L<span>I</span><span>GH</span>T<span>S O</span>UT</b></div>
          <table className='Board-table'>
            <tbody>
              {starterBoard}
            </tbody>
          </table>
        </div>
        
        }
      </div>
    )
  }
}

export default Board;
