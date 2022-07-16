import Image from '../images/safar.png'

const Shans=()=>{
    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8 mt-4">
                        
                        <div style={{borderRadius:'18px' ,backgroundImage:'linear-gradient(#fefefe, #e6e6e6)',border:'1px solid #e8e8e8',display:'flex'}}>
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <img style={{margin:'52px 15px',width:'250px',height:'200px'}} src={Image} alt="" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-8 d-flex align-items-center">
                                    <div className="px-3 mb-3 d-flex align-items-center">
                                        <div>
                                            <p style={{fontWeight:'700',fontSize:'23px', color:'#656565'}}>شانس بهت رو کرده</p>
                                            <p style={{color:'#777777'}}>با استفاده از تقویم قیمتی شما می توانید کمترین و بیشترین قیمت بلیط پرواز را در روزهای قبل و بعد از آن تاریخ مشاهده کنید</p>
                                            <button style={{marginRight:'7px', backgroundColor:'#ffac50',borderRadius:'30px',fontSize:'13px',padding:'5px 14px 8px 14px' ,color:'#fffefb', border:'none'}}>بیشتر بخون</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 mt-4">
                        <div className="d-flex flex-column" style={{height:'100%',backgroundImage:'linear-gradient(#3dc36e, #7ade9e)',border:'1px solid #3dc36e',borderRadius:'18px' ,width:"100%"}}>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <p style={{color:'#eff5f1',fontSize:'19px',fontWeight:'600',display:'flex',justifyContent:'center', marginTop:'35px'}}>عضویت در خبرنامه</p>
                                <p style={{display:'flex',textAlign:'center',margin:'10px 60px',fontSize:'11px',color:'#c6d8cc',fontWeight:'500'}}>با عضویت در خبرنامه از آخرین اخبار و جشنواره های ایباس با خبر شوید</p>
                                <input placeholder="ایمیل خود را وارد کنید " style={{width:'240px',backgroundColor:'#9affc5',margin:'17px 57px',padding:'7px 14px',fontWeight:'500',border:'none',borderRadius:'20px',outline:'none' }} type="text" />
                                <button style={{width:'240px',backgroundColor:'#017550', margin:'0px 57px 45px',padding:'6px',borderRadius:'20px',border:'none' }}>ثبت</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shans;