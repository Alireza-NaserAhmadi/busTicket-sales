import Image from "../images/ticket.png";

const VipInfo=()=>{
    return(
        <>
            <div className="container video-container">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="d-flex imag-flex" style={{backgroundColor:'#fff', border:'none',borderRadius:'14px'}}>
                            <div className="col-12 col-lg-8">
                                <p style={{fontWeight:'800',fontSize:'25px',margin:'25px 28px 0px 0px',color:'#656565'}}>VIP خرید بلیط اتوبوس</p>
                                <p style={{margin:'30px 28px 35px 0px',fontWeight:'400',color:'#656565'}}>را می توانید از vip امروزه به دلیل ارائه خدمات بهتر دارای متقاضیان زیادی برای سفر هستند بلیط اتوبوس vip اتوبوس های موجود در بازار ایران کیفیت سفر شما را تضمین سایت ایباس خریداری کنید. ایباس با در اختیار داشتن بهترین اتوبوس های vip در ایباس به صرفه ترین قیمت می باشد وبه راحتی می توانید اقدام به خرید بلیط اتوبوس vip میکند. قیمت بلیط اتوبوس کنید اتوبوس های وی ای پی دارای این امکانات هستند : 1- صندلی راحت 2- سیستم تهویه گرمایشی و سرمایشی 3- مانیتور شخصی با موزیک و فیلم 4-پذیرایی از مسافران 5- سرعت و امنیت بالا 6-شارژ رایگان سایت بلیط اتوبوس ایباس سعی دارد همواره بهترین خدمات را به مشتریان خود ارائه دهد و در این راستا از هیچ کاری دریغ نخواهد کرد. ایباس متخصص سفر جاده ای است و شرکتی مشابه آن در ایران وجود ندارد. ایباس متعد است با هوشمندسازی و دخیل کردن تکنولوؤی برای اولین بار در سیستم حمل و نقل جاده ای تجربه ی متفاوتی از سفر جاده ای را برای شما رقم یزند</p>
                            </div>
                            <div className="col-12 col-lg-4 justify-content-center d-flex align-items-center mt">
                                <img src={Image} style={{width:'270px',height:'270px'}} alt="" />
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default VipInfo;