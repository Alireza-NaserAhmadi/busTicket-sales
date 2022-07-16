import Image from '../images/ticket-2.png';

const BilitInfo=()=>{
   return(
        <>
           <div className="container video-container mt-5 mb-5">
            <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="d-flex image-flex" style={{backgroundColor:'#fff', border:'none',borderRadius:'14px'}}>
                            <div className="col-12 col-sm-6 col-md-8">
                                <p style={{fontWeight:'800',fontSize:'25px',margin:'25px 28px 0px 0px',color:'#656565'}}>بلیط اتوبوس</p>
                                <p className="bilit-into-text" style={{margin:'30px 28px 0px 0px',fontWeight:'400',color:'#656565'}}> ایباس اولین سامانه حمل ونقل هوشمند بین شهری هست که فعالیت خود را از سال 1400 با هدف بهبود خدمات ارائه شده به بهترین قیمت بلیط های بین شهری را ارائه می دهد و شما میتوانید قیمت بلیط های ایباس را با Ebus مسافران آغاز کرده است سایر شرکت های فروش بلیط مقایسه کنید</p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 justify-content-center d-flex align-items-center">
                                <img src={Image} style={{width:'225px',height:'225px'}} alt="" />
                            </div>
                
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default BilitInfo;