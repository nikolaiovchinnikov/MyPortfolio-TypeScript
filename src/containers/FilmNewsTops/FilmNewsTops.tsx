import styles  from './FilmNewsTops.module.scss'
import  {
    CButton,
    CCardHeader,
    CCardGroup,
    CCardImage,
    CCard,
    CCardTitle,
    CCardBody,
    CCardText
} from '@coreui/react'


const FilmNewsTops = () => {
    return (
        <CCard style={{border:'none',backgroundColor:'transparent'}} className='my-5 myContainer'>
            <CCardHeader style={{backgroundColor:'transparent'}} component="h1">Списки</CCardHeader>
            <CCardBody>
            <CCardGroup style={{gap:"40px"}}>
                <CCard className={styles.cardItems}>
                <CCardBody className={styles.cardBody} >
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                    </CCardText>
                    <CCardText className={styles.cardText} >
                        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                        <CButton color="secondary" size="lg">Large button</CButton>
                    </CCardText>
                </CCardBody>
                <CCardImage style={{height:"350px"}} orientation="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s'} />
                </CCard>

                <div style={{height:"auto",width:"2px",backgroundColor:"black"}}></div>

                <CCard className={styles.cardItems}>
                <CCardBody className={styles.cardBody} >
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                    This card has supporting text below as a natural lead-in to additional content.
                    </CCardText>
                    <CCardText className={styles.cardText}>
                        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                        <CButton color="secondary" size="lg">Large button</CButton>
                    </CCardText>
                </CCardBody>
                <CCardImage style={{height:"350px"}} orientation="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s'} />
                </CCard>

                <div style={{height:"auto",width:"2px",backgroundColor:"black"}}></div>
                
                <CCard className={styles.cardItems}>
                <CCardBody className={styles.cardBody} >
                    <CCardTitle >Card title</CCardTitle>
                    <CCardText >
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This card has even longer content than the first to show that equal height action.
                    </CCardText>
                    <CCardText className={styles.cardText}>
                        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                        <CButton color="secondary" size="lg">Large button</CButton>
                    </CCardText>
                </CCardBody>
                <CCardImage style={{height:"350px"}} orientation="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv61p5TcNGsQEKW8B9L0neRCcKxQ5Xzzmv-Kfir1A&s'} />
                </CCard>
                </CCardGroup>
            </CCardBody>
        </CCard>
    )
}
export default FilmNewsTops