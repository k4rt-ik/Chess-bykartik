import './Board.css'
import Peices, { images } from './peices/peices'

const Board = () => {
  const position = Peices()
  const rows = Array(8).fill().map((_, i) => String.fromCharCode(65 + i))
  const files = Array(8).fill().map((_, i) => 8 - i)

  const handleMovement = (piece, row, col) => {
    const pieceName = Object.keys(images).find(key => images[key] === piece)
    console.log('piece clicked:', pieceName, 'position', row, col)
    if (pieceName == 'wp' || pieceName == 'bp') {    
      const direction = pieceName === 'wp' ? -2 : 2
      const targetRow = row + direction
      console.log('target row:', targetRow)

    }
  }

  return (
    <div className="game-wrapper">
      <div className="files">
        {files.map((file, index) => (
          <div key={index} className="file-label">{file}</div>
        ))}
      </div>

      <div className="board-and-labels">
        <div className="Board">
          {position.map((rank, i) =>
            rank.map((piece, j) => {
              const isEven = (i + j) % 2 === 0
              return (
                <div
                  key={`${i}-${j}`}
                  className={`tile ${isEven ? 'white-tile' : 'black-tile'}`}
                >
                  {piece && (
                    <img
                      src={piece}
                      onClick={() => handleMovement(piece, i, j)}
                      alt=""
                      className="piece"
                    />
                  )}
                </div>
              )
            })
          )}
        </div>

        <div className="rows">
          {rows.map((item, index) => (
            <div key={index} className="row-item">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Board