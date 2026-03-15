import './Board.css'


const Board = () =>{
    const rows = Array(8).fill().map((_, i) => String.fromCharCode(65 + i))
    const files = Array(8).fill().map((_, i) => 8 - i)

    // placing the peices on the board


    return (
        <div className='Board'>
            {rows.map((row, i) => (
                <div key={i} className="row-container"> 
                    {files.map((file, j) => {
                        // Arithmetic check: is the sum of indices even?
                        const isEven = (i + j) % 2 === 0;
                        const tileColor = isEven ? 'white-tile' : 'black-tile';

                        return (
                            <div key={j} className={`tile ${tileColor}`}>
                                {row}{file}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Board