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

const Peices = () => {
    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))
    position[0][0] = br
    position[0][1] = bn
    position[0][2] = bb
    position[0][3] = bq
    position[0][4] = bk
    position[0][5] = bb
    position[0][6] = bn
    position[0][7] = br

    for(let i=0;i<8;i++){
        position[1][i] = bp
    }
    for(let i=0;i<8;i++){
        position[6][i] = wp
    }

    position[7][0] = wr
    position[7][1] = wn
    position[7][2] = wb
    position[7][3] = wq
    position[7][4] = wk
    position[7][5] = wb
    position[7][6] = wn
    position[7][7] = wr

    return <div className='peice'></div>
}

export default Peices