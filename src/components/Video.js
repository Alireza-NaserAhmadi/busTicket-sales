import Image from '../images/video.jpg'

const Video=()=>{
    return(
        <>
           <div className="container">
            <div className="video-container container mt-5 mb-5">
                    <p style={{marginBottom:"30px",fontSize:'17px',fontWeight:'700'}}>ایباس را بهتر بشناسید</p>
                    <div style={{borderRadius:'12px'}} className="row bg-white">
                        <div style={{margin:'0 auto'}} className="col-12 col-sm-12 col-md-12 col-lg-6 my-4 d-flex justify-content-center video">
                            <img className="maste mobilevideo" style={{height:'370px',width:'100%', borderRadius:'10px'}} src={Image} alt="" />
                        </div>
                        <div style={{marginTop:'1.5rem'}} className="margin-video col-md-12 col-lg-6 mb-4">
                            <p style={{fontWeight:'400',fontSize:'17px'}}>معرفی ایباس " ایباس اولین سامانه حمل و نقل هوشمند بین شهری اتوبوسی" که فعالیت خود را از سال 1400 با هدف بهبود خدمات ارائه شده به مسافران آغاز کرده است. تا بتواند برای تمام افراد امکان سفری امن خدماتی مقرون به صرفه و با کیفیت بالا در ناوگان اتوبوسی فراهم کند ما در این مسیر ملزم به اخذ  مجوز های لازم برای ارائه خدمات قانونی به شما بودیم تمام فعالیت های ایباس قانونی بوده و تحت نظارت سازمان راهداری و حمل و نقل جاده ای کشور انجام می شود. ایباس یک پلتفرم قابل اعتماد و کارآمد که با شناسایی نیاز های مشتری و سنجش مشکلات سفر های اتوبوسی به دنبال رفع مشکلات و برآورده کردن نیازهای اولیه مشتری با ارئه راه حل های لجستیک و مشتری مداری با تعهد به برتری و کیفیت خدمات به منظور رقابت و بهینه سازی هزینه ها وایجاد شبکه امن در حمل و نقل عمومی میباشد.</p>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Video;