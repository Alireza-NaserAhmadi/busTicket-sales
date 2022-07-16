import { Carousel } from 'antd';
import Image from '../images/bus1.jpg';
import Image2 from '../images/bus2.jpg';
import Image3 from '../images/bus3.jpg';


const contentStyle = {
  
    height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Test =()=>{
    return(
        <>
            <div className="container d-flex justify-content-center">
                <Carousel 
                style={{width:'200px'}}
                autoplay
                easing={()=>{return null}}
                >
                    <div>
                        <img style={contentStyle} src={Image} alt="" />
                    </div>
                    <div>
                        <img style={contentStyle} src={Image2} alt="" />
                    </div>
                    <div>
                        <img style={contentStyle} src={Image3} alt="" />
                    </div>
                    
                </Carousel>
            </div>
        </>
    )
}

export default Test;