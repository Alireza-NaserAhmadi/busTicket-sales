import Image from '../images/bus1.jpg';
import Image1 from '../images/bus2.jpg';
import Image2 from '../images/bus3.jpg'


const Motarareqe=()=>{
    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-evenly">
                    <div>
                        <p className="mb-4" style={{fontWeight:'700',fontSize:'17px',color:'#656565'}}>موضوعات متفرقه</p>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 mt-4">
                        <div className="task">
                            <img className="tasvir" src={Image} alt="" />
                            <p style={{color:'#fff',position:'relative',bottom:'50px',right:'15px'}}>رفت و برگشت به صرفه و ارزان</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 mt-4">
                        <div className="task">
                            <img className="tasvir" src={Image1} alt="" />
                            <p style={{color:'#fff',position:'relative',bottom:'50px',right:'15px'}}>رفت و برگشت به صرفه و ارزان</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-4 mt-4">
                        <div className="task">
                            <img className="tasvir" src={Image2} alt="" />
                            <p style={{color:'#fff',position:'relative',bottom:'50px',right:'15px'}}>رفت و برگشت به صرفه و ارزان</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Motarareqe;