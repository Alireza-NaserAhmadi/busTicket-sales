import Image from '../images/ticket.png'

const KharidInfo=()=>{
    return(
        <>
            <div className="container video-container">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="d-flex images-flex" style={{backgroundColor:'#fff', border:'none',borderRadius:'14px'}}>
                            <div className="col-12 col-md-4 justify-content-center d-flex align-items-center">
                                <img src={Image} style={{width:'280px',height:'280px'}} alt="" />
                            </div>
                            <div className="col-12 col-md-8">
                                <p style={{fontWeight:'800',fontSize:'25px',margin:'25px 28px 0px 0px',color:'#656565'}}>خرید اینترنتی بلیط اتوبوس</p>
                                <p style={{margin:'30px 28px 30px 0px',fontWeight:'400',color:'#656565'}}>با خرید بلیط اتوبوس از ایباس اطمینان خواهید داشت که از یک شرکت معتبر (که تمام مجوزهای لازم در این حوزه را اخذ کرده است) بلیط خود را خریداری کرده اید و کارشناسان و پشتیبانان ما آمده پاسخگویی به شما خواهند بود. نحوه تهیه بلیط اینترنتی از ایباس بسیار ساده است. کافی است که مبدا حرکت اتوبوس و مقصد آن را مشخص و سپس تاریخ جرکت حود را انتخاب کنید و در نهایت بر روی دکمه جسنجو کلیک کنید تا لیست قیمت بلیط برای مقصد شما نمایش داده شود. در این لیست گزینه های مختلفی برای محدود کردن قیمت بلیط اتوبوس ها و رسیدن به بهترین گزینه برای خرید بلیط برای شما مهیا شده است. سامانه رزرو بلیط اتوبوس ایباس امکانات زیادی دارد. می توانید صندلی مورد نظرتان را انتخاب کنید ار بلیط تهیه کرده اید و برنامه تان تغییر کرده یا از سفر  کردن منصرف شده اید می توانید بدون هیچ جریمه ای بلیط خود را لغو کنید. در هر شرایطی اتوبوس های ایباس به موقع و بدون هیچ تاخیری حرکت خواهند کرد پس اگر اهل هر برنامه ریزی هستید با خیال راحت بلیط خود را خریداری کنید. ار همه مهم تر در مناسبت ها و شرایط مختلف تخفیفات و برنامه های ویژه ای برای شما در نظر گرفته است که با دنبال کردن صفحات EBUS اجتماعی ایباس می توانید زودتر از بقیه از آن ها مطلع شوید و سفری به صرفه هیجان انگیز و در عین حال با آرامش را تجربه کنید</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default KharidInfo;