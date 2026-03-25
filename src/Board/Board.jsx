import './Board.css'

const Board = () =>{
    const rows = Array(8).fill().map((_, i) => String.fromCharCode(65 + i))
    const files = Array(8).fill().map((_, i) => 8 - i)
    // placing the peices on the board


   return (
  <div className="game-wrapper">
    {/* Left Side: Numbers */}
    <div className='files'>
      {files.map((file, index) => (
        <div key={index} className="file-label">{file}</div>
      ))}
    </div>

    {/* Right Side: Board + Bottom Letters */}
    <div className="board-and-labels">
      <div className='Board'>
        {files.map((file, i) => ( // Loop through 8-1
          rows.map((row, j) => {  // Loop through A-H
            const isEven = (i + j) % 2 === 0;
            const tileColor = isEven ? 'white-tile' : 'black-tile';
            return (
              <div key={j} className={`tile ${tileColor}`}>
                {row}{file}
              </div>
            );
          })
        ))}
      </div>

      {/* Bottom: Letters aligned with columns */}
      <div className='rows'>
        {rows.map((item, index) => (
          <div key={index} className="row-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Board