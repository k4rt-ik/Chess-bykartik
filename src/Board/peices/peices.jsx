import './peices.css'
import br from './br.png'
import bk from './bk.png'
import bn from './bn.png'
import bq from './bq.png'
import bp from './bp.png'
import bb from './bb.png'
import wr from './wr.png'
import wb from './wb.png'
import wp from './wp.png'
import wk from './wk.png'
import wq from './wq.png'
import wn from './wn.png'

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