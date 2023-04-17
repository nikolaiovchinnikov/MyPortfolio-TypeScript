import styles from './FilmSerchItem.module.scss'
import {
    CCard,
    CRow,
    CCol,
    CCardTitle,
    CCardBody,
    CCardText,
    CCardSubtitle
} from '@coreui/react'
import PlayerAppComponent from '../../components/PlayerAppComponent/PlayerAppComponent'
interface IIsColorMod {
    isColorMod:boolean
}
const FilmSerchItem = ({isColorMod}:IIsColorMod) => {
    let colorModStyle = isColorMod?'dark':'light';
    return (
        <main className={'myContainer'}>
            <CCard style={{borderRadius:'0'}} className={[colorModStyle, 'my-5'].join(' ')} >
                <CRow className="g-0">
                    <CCol className={[styles.playerBlock, 'my-4'].join(' ')} md={8}>
                        <PlayerAppComponent url="_g9_9hKPyeg"/>
                    </CCol>
                    <CCol md={4}>
                        <CCardBody className={styles.blockText}>
                            <CCardTitle style={{lineHeight: '26.3px',textAlign:'center'}} className="h1 mb-0">Card title</CCardTitle>
                            <CCardTitle style={{textAlign:'center'}} className="h1">Card title</CCardTitle>
                            <CCardSubtitle style={{textAlign:'center'}}>DDDDDDDDDD</CCardSubtitle>
                            <CCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </CCardText>
                            <CCardText>
                                <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                            </CCardText>
                        </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
        </main>
    )
}
export default FilmSerchItem