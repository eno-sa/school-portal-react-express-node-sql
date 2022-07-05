import myPDF from '/Users/enosaliu/VS Code Project/school-comms-react-express-node-sql/client/src/assets/pdf/StudentsT3.pdf#zoom=FitW'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectNavHeight } from '../../../features/navbar-height/navHeightSlice.js'
import './styles.css'

const Index = () => {
    const pdfRef = useRef()
    const navHeight = useSelector(selectNavHeight)

    function focus() {
        const total = pdfRef.current.offsetTop - navHeight
        console.log(total)
        window.scrollTo(0, total);
    }

    return (
        <div className='schedule-body'>
            <header>
                <h1>
                    Schedule
                </h1>
            </header>

            <div className="pdf-viewer">
                <button onClick={focus}>Focus</button>
                <embed
                    ref={pdfRef}
                    src={myPDF}
                    frameBorder="0"
                    scrolling="auto"
                    height="100%"
                    width="100%"
                ></embed>
            </div>
        </div>
    )
}

export default Index