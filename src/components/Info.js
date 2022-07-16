import Image from '../images/easy.png';
import Image2 from '../images/express.png';
import Image3 from '../images/economic.png'

const Info=()=>{
    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-xl-4 d-flex">
                        <div className="row">
                            <div className="col-4">
                                <img className="image" src={Image} alt="" />
                            </div>
                            <div className="col-8">
                                <div style={{marginTop:'8px', marginRight:'31px'}}>
                                    <h6 style={{color:'#656565'}}>راحت</h6>
                                    <p style={{color:'#aeaeae',marginTop:'23px'}}>با چند کلیک ساده بلیط تهیه و در کمال آرامش سفر کنید</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 d-flex">
                        <div className="row">
                            <div className="col-4">
                                <img className="image" src={Image2} alt="" />
                            </div>
                            <div className="col-8">
                                <div style={{marginTop:'8px', marginRight:'31px'}}>
                                    <h6 style={{color:'#656565'}}>سریع</h6>
                                    <p style={{color:'#aeaeae',marginTop:'23px'}}>سریع و بدون معطلی سفر کنید و نگران تاخیر نباشید</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 d-flex">
                        
                        <div className="row">
                                <div className="col-4">
                                    <img className="image" src={Image3} alt="" />
                                </div>
                                <div className="col-8">
                                    <div style={{marginTop:'8px', marginRight:'31px'}}>
                                        <h6 style={{color:'#656565'}}>به صرفه</h6>
                                        <p style={{color:'#aeaeae',marginTop:'23px'}}> ارزان تر و مقرون به صرفه تر از هر جای دیگر بلیط تهیه کنید</p>
                                    </div>
                                </div>
                        </div>
                      </div>
                </div>
            </div>
            
        </>
    )
}


export default Info;