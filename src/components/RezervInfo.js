import Image from "../images/rezerv.png"

const RezervInfo=()=>{
    return(
        <>
                <div className="container video-container">
                        <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="d-flex image-flex" style={{backgroundColor:'#fff', border:'none',borderRadius:'14px'}}>
                                <div className="col-12 col-sm-4 justify-content-center d-flex align-items-center">
                                    <img src={Image} style={{width:'230px',height:'230px'}} alt="" />
                                </div>
                                <div className="col-12 col-sm-8">
                                    <p style={{fontWeight:'800',fontSize:'25px',margin:'25px 28px 0px 0px',color:'#656565'}}>رزرو بلیط اتوبوس</p>
                                    <p style={{margin:'30px 28px 30px 0px',fontWeight:'400',color:'#656565'}}>در هفت روز هفته می توانید بلیط اتوبوس خود را رزرو کنید و مطمعن باشید که به صرفه ترین قیمت بلیط همراه با بهترین امکانات رفاهی را رزرو کرده اید. مسافرینی که از سایت ایباس و اپلیکیشن به صورت اینترنتی اقدام به تهیه بلیط اتوبوس می کنند در طول سفر از خدمات مطلوب رفاهی بهره مند خواهند شد. تیم خدمات مشتریان ایباس صبورانه در کنار شما خواهند بود تا سفری خاطره انگیز را برایتان به ارمغان بیاورند.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        
        </>
    )
}

export default RezervInfo;