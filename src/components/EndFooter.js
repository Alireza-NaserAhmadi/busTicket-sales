import Image from "../images/Ebus.png";
import Image1 from '../images/icon1.png';
import Image2 from '../images/icon2.png';
import Image3 from '../images/icon3.png';
import Image4 from '../images/icon4.png';
import Image5 from '../images/icon5.png';
import Image6 from '../images/icon6.png';






const EndFooter =()=>{
    return(
        <>
            <div style={{ backgroundColor:'#656565'}} className="container-fluid">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-8 col-xl-6 my-3 d-flex align-items-center justify-content-center">
                        <img className="me-2 ms-2" style={{width:'50px',height:'30px'}} src={Image} alt="" />
                        <p style={{margin:'0px',color:'#fff'}}>کلیه حقوق این سایت محفوظ و متعلق به راهکار سفر سروین می باشد</p>
                    </div>
                    <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center my-3">
                        <div className="d-flex">
                            <a className="me-2" href=""><img src={Image1} alt="" /></a>
                            <a className="me-2" href=""><img src={Image2} alt="" /></a>
                            <a className="me-2" href=""><img src={Image3} alt="" /></a>
                            <a className="me-2" href=""><img src={Image4} alt="" /></a>
                            <a className="me-2" href=""><img src={Image5} alt="" /></a>
                            <a className="me-2" href=""><img src={Image6} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EndFooter;