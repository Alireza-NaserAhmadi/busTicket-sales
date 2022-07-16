import Image from '../images/ret-tick.png'

const CancelInfo=()=>{
    return(
        <>
            <div className="container video-container">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="d-flex images-flex" style={{backgroundColor:'#fff', border:'none',borderRadius:'14px'}}>
                            <div className="col-12 col-md-8">
                                <p style={{fontWeight:'800',fontSize:'25px',margin:'25px 28px 0px 0px',color:'#656565'}}>استرداد بلیط اتوبوس یا کنسلی بلیط</p>
                                <p className="bilit-into-text" style={{margin:'30px 28px 0px 0px',fontWeight:'400',color:'#656565'}}>ایباس شرایط  و قوانینی را فراهم کرده که شما بتوانید بلیط اتوبوس خریداری شده خود را لغو کنید. مبلغ بلیط شما بدون هیچ کسری به کیف پول خودتان در پنل کاربری ایباس بازمی گردد یا بتوانید بلیط بعدی خود را به راحتی تهییه کنید. برای اطلاع دقیق تر از قانون استرداد بلیط اینترنتی اتوبوس به قوانین استرداد بلیط مراجعه کنید</p>
                            </div>
                            <div className="col-12 col-md-4 justify-content-center d-flex align-items-center margint">
                                <img src={Image} style={{width:'225px',height:'225px'}} alt="" />
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default CancelInfo;