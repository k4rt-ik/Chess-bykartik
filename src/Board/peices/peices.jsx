import './peices.css'
import br from './black rook.png'
import bk from './black king.png'
import bn from './black knight.png'
import bq from './black queen.png'
import bp from './black pawn.png'
import bb from './black bishop.png'
import wr from './white rook.png'
import wb from './white bishop.png'
import wp from './white pawn.png'
import wk from './white king.png'
import wq from './white queen.png'
import wn from './white knight.png'

export const images = {
  br, bk, bn, bq, bp, bb,
  wr, wb, wp, wk, wq, wn,
}

const Peices = () => {
    const position = new Array(8).fill('').map(() => new Array(8).fill(''))
    position[0] = [br, bn, bb, bq, bk, bb, bn, br]
    
    position[1].fill(bp)
    position[6].fill(wp)
    
    position[7] = [wr, wn, wb, wq, wk, wb, wn, wr]

    return position
}

export default Peices