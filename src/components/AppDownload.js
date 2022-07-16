import Image from '../images/bazar.png';
import Image1 from '../images/mobile.png';
import Image2 from '../images/down.png';

const AppDownload=()=>{
    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex">
                    <div className="d-flex" style={{borderRadius:'12px',border:'none',backgroundImage:'linear-gradient(270deg, #e7e7e7, #fdfdfd)'}}>
                        <div className="col-8 col-sm-6 col-md-8 col-lg-8 col-lg-8 col-xl-6">
                            <div className="row">
                                <div className="col-8 col-sm-12 col-xl-12 mt-5 masi appmobile">
                                    <p style={{color:'#656565',fontWeihgt:'500',fontSize:'20px'}}>دانلود اپلیکیشن ایباس</p>
                                </div>
                                <div className="col-6 col-sm-12 col-xl-12 mt-2 masi appmobile">
                                    <p style={{color:'#999999',fontSize:'12px',fontWeihgt:'400'}}>با استفاده از اپلیکیشن ایباس به راحتی بلیط خود را تهیه نمایید و از مزایای آن برخوردار شوید</p>
                                </div>
                                <div className="col-6 col-sm-12 col-xl-12 masis appmobile">
                                    <div className="row mt-4 mb-5">
                                        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 mt-3 me-3 p-0 appmobile">
                                            <a className="align-items-center" style={{marginRaght:"20px",width:'180px',borderRadius:'10px',textDecoration:'none',display:'flex',backgroundColor:'#656565'}} href="/">
                                                <img src={Image} style={{margin:'0px 30px 0px 10px',width:'20px',height:'20px'}} alt="" />
                                                <p style={{color:'#ffffff',margin:'13px 0px 13px 30px',fontWeight:'700',fontSize:'13px'}}>دانلود از بازار</p>
                                            </a>
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 mt-3 p-0 me-3 appmobile">
                                            <a className="align-items-center" style={{width:'180px',borderRadius:'10px',textDecoration:'none',display:'flex',backgroundColor:'#656565'}} href="/">
                                                <img src={Image2} style={{margin:'0px 30px 0px 10px',width:'20px',height:'20px'}} alt="" />
                                                <p style={{color:'#ffffff',margin:'13px 0px 13px 30px',fontWeight:'700',fontSize:'13px'}}>دانلود مستقیم</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="col-4 col-sm-6 col-md-4 col-lg-4 col-xl-6" style={{display:'flex',justifyContent:'center'}}>
                            <img src={Image1} style={{width:'260px',height:'260px', margin:'auto'}} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AppDownload;