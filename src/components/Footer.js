import Image from "../images/fbazar.png";
import Image1 from "../images/fgoogle.png";
import Image2 from "../images/sabt.png";

const Footer=()=>{
    return(
        <>
            <div className="container-fluid">
                <div style={{backgroundColor:"#e3e6ef"}} className="row d-flex justify-content-evenly d-flex">
                    <div className="col-md-5 col-xl-2 ">
                        <p style={{fontWeight:'700', fontSize:'18px', margin:'15px 20px 12px 0px'}}>ایباس</p>
                        <ul style={{color:'#73d800'}}>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">استرداد بلیط</a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">درباره ما </a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">تماس با ما </a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">فرصت های شغلی</a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">سوالات متداول</a></li>
                        </ul>
                    </div>
                    <div className="col-md-5 col-xl-2">
                    <p style={{fontWeight:'700', fontSize:'18px', margin:'15px 20px 12px 0px'}}>راهنما</p>
                        <ul style={{color:'#73d800'}}>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">سوالات متداول</a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">قوانین و مقررات</a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">راهنمای خرید</a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">حقوق مسافر</a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">حقوق مشتریان</a></li>
                            <li><a style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">سرویس دربستی</a></li>
                        </ul>
                    </div>
                    <div className="col-md-5 col-xl-3 padr">
                        <p style={{fontWeight:'700', fontSize:'18px', margin:'15px 0px 12px 0px'}}>دانلود آپلیکیشن</p>
                        <a style={{textDecoration:'none'}}  className="d-flex ali" href="">
                                    <img src={Image} alt="" />
                                    <img src={Image1} alt="" />
                        </a>
                        <div className="d-flex mt-2 align-items-center">
                            <svg style={{transform:'rotate(270deg)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p style={{margin:'0px 10px 0px 0px'}}> شماره تماس : 02171057305</p>
                        </div>
                        <div className="d-flex mt-2 align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
                                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                    </svg>
                                    <p style={{margin:'0px 10px 0px 0px'}}>فکس : 33737912 , 33737932</p>
                        </div>
                        <div className="d-flex mt-2 align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                    <p style={{margin:'0px 10px 0px 0px'}}>آدرس پست الکترونیکی : info@ebus.ir</p>
                        </div>
                        
                        {/* <ul style={{listStyle:'none',color:'#73d800'}}>
                            <li><a style={{textDecoration:'none'}}  className="d-flex ali" href="">
                                    <img src={Image} alt="" />
                                    <img src={Image1} alt="" />
                                </a></li>
                            <li className="d-flex align-items-center" style={{marginTop:'7px'}}><a className="d-flex align-items-center" style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">
                                    <svg style={{transform:'rotate(270deg)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                    <p style={{margin:'0px 10px 0px 0px'}}> شماره تماس : 02171057305</p>
                                </a></li>
                                <li style={{marginTop:'7px'}}><a className="d-flex align-items-center" style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
                                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                    </svg>
                                    <p style={{margin:'0px 10px 0px 0px'}}>فکس : 33737912 , 33737932</p>
                                </a></li>
                            
                           
                            <li style={{marginTop:'7px'}}><a className="d-flex align-items-center" style={{fontSize:'14px', textDecoration:'none',color:'#040100'}} href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                    <p style={{margin:'0px 10px 0px 0px'}}>آدرس پست الکترونیکی : info@ebus.ir</p>
                                </a></li>
                           </ul> */}
                    </div>
                    <div className="col-md-5 col-xl-2 mb-5 mt-4 mr psx">
                        <img src={Image2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;