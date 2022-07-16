import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import Image from '../images/question.png';


const { Panel } = Collapse;

const Question=()=>{
    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12">
                        <p style={{color:'#666666',fontWeight:'800', fontSize:'22px'}}>سوالات متداول</p>
                    </div>
                    <div className="col-12">
                        <Collapse style={{ boxShadow:'1px 1px 1px 1px rgba(101,101,101,.4)',borderRadius:'15px',padding:'0px'}} expandIcon={()=>{
                                return null
                    }} accordion>
                                <Panel style={{border:'0px'}} header={
                                    <>
                                        <div className="d-flex">
                                            <img style={{width:'30px', height:'30px'}} src={Image} alt="" />
                                            <p style={{color:'#646464',margin:'5px 15px 0px 0px'}}>چه زمانی میتوانیم اقدام به خرید کنیم؟</p>
                                        </div>
                                    </>
                                } key="1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui eveniet expedita assumenda fugiat facere et consequuntur, quasi aut! Aut distinctio obcaecati sequi quos aperiam quidem ut nesciunt rem ipsam.</p>
                                </Panel>
                            
                        </Collapse>
                    </div>
                    <div className="col-12 mt-3">
                        <Collapse style={{ boxShadow:'1px 1px 1px 1px rgba(101,101,101,.4)',borderRadius:'15px',padding:'0px'}} expandIcon={()=>{
                                return null
                    }} accordion>
                                <Panel style={{border:'0px'}} header={
                                    <>
                                        <div className="d-flex">
                                            <img style={{width:'30px', height:'30px'}} src={Image} alt="" />
                                            <p style={{color:'#646464',margin:'5px 15px 0px 0px'}}>چه زمانی میتوانیم اقدام به خرید کنیم؟</p>
                                        </div>
                                    </>
                                } key="1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui eveniet expedita assumenda fugiat facere et consequuntur, quasi aut! Aut distinctio obcaecati sequi quos aperiam quidem ut nesciunt rem ipsam.</p>
                                </Panel>
                            
                        </Collapse>
                    </div>
                    
                    <div className="col-12 mt-3">
                        <Collapse style={{ boxShadow:'1px 1px 1px 1px rgba(101,101,101,.4)',borderRadius:'15px',padding:'0px'}} expandIcon={()=>{
                                return null
                    }} accordion>
                                <Panel style={{border:'0px'}} header={
                                    <>
                                        <div className="d-flex">
                                            <img style={{width:'30px', height:'30px'}} src={Image} alt="" />
                                            <p style={{color:'#646464',margin:'5px 15px 0px 0px'}}>چه زمانی میتوانیم اقدام به خرید کنیم؟</p>
                                        </div>
                                    </>
                                } key="1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui eveniet expedita assumenda fugiat facere et consequuntur, quasi aut! Aut distinctio obcaecati sequi quos aperiam quidem ut nesciunt rem ipsam.</p>
                                </Panel>
                            
                        </Collapse>
                    </div>
                    <div className="col-12 mt-3">
                        <Collapse style={{ boxShadow:'1px 1px 1px 1px rgba(101,101,101,.4)',borderRadius:'15px',padding:'0px'}} expandIcon={()=>{
                                return null
                    }} accordion>
                                <Panel style={{border:'0px'}} header={
                                    <>
                                        <div className="d-flex">
                                            <img style={{width:'30px', height:'30px'}} src={Image} alt="" />
                                            <p style={{color:'#646464',margin:'5px 15px 0px 0px'}}>چه زمانی میتوانیم اقدام به خرید کنیم؟</p>
                                        </div>
                                    </>
                                } key="1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui eveniet expedita assumenda fugiat facere et consequuntur, quasi aut! Aut distinctio obcaecati sequi quos aperiam quidem ut nesciunt rem ipsam.</p>
                                </Panel>
                            
                        </Collapse>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Question;