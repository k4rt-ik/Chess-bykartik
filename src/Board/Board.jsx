import { useState } from 'react'
import './Board.css'
import Peices, { images } from './peices/peices'

const Board = () => {
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [pieceIsSelected, setPieceIsSelected] = useState(false)
  const [position, setPosition] = useState(Peices())
  const [currentTurn, setCurrentTurn] = useState('white')
  const rows = Array(8).fill().map((_, i) => String.fromCharCode(65 + i))
  const files = Array(8).fill().map((_, i) => 8 - i)

  const getPieceColor = (piece) => {
    if (!piece) return null
    if (piece.toLowerCase().includes('white')) return 'white'
    if (piece.toLowerCase().includes('black')) return 'black'
    return null
  }

  const handleCellClick = (piece, cellId) => {
    if (!pieceIsSelected) {
      // Select a piece
      if (piece) {
        const pieceColor = getPieceColor(piece)
        // Only allow selecting pieces of current turn color
        if (pieceColor === currentTurn) {
          setSelectedPiece(piece)
          setSelectedPosition(cellId)
          setPieceIsSelected(true)
          console.log('Selected piece:', piece)
          console.log('Selected position:', cellId)
        }
      }
    } else {
      // Move the piece to new position
      const [fromCol, fromRow] = [selectedPosition.charCodeAt(0) - 65, 8 - parseInt(selectedPosition[1])]
      const [toCol, toRow] = [cellId.charCodeAt(0) - 65, 8 - parseInt(cellId[1])]

      const newPosition = position.map((rank, i) => [...rank])
      newPosition[toRow][toCol] = selectedPiece
      newPosition[fromRow][fromCol] = null

      setPosition(newPosition)
      setPieceIsSelected(false)
      setSelectedPiece(null)
      setSelectedPosition(null)
      
      // Switch turns
      setCurrentTurn(currentTurn === 'white' ? 'black' : 'white')
      console.log('Moved piece to:', cellId)
    }
  }

  return (
    <div className="game-wrapper">
      <div className="current-turn" style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        Current Turn: {currentTurn.toUpperCase()}
      </div>
      
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
              const cellId = `${rows[j]}${files[i]}`
              const pieceColor = getPieceColor(piece)
              const isClickable = !pieceIsSelected && piece && pieceColor === currentTurn
              return (
                <div
                  key={cellId}
                  id={cellId}
                  className={`tile ${isEven ? 'white-tile' : 'black-tile'} ${isClickable ? 'clickable' : ''}`}
                  onClick={() => handleCellClick(piece, cellId)}
                  style={{ cursor: isClickable ? 'pointer' : 'default' }}
                >
                  {piece && (
                    <img
                      src={piece}
                      alt={pieceColor}
                      className={`piece ${pieceColor}`}
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