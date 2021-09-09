import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>PROFESSIONL SKILLS</strong>
                        </h6>
                        <div className='row mt-top'>
                            <div className='col s6'>
                                <p>HTML</p>
                                <div className='progress grey lightn-1'>
                                    <div className='determinate blue' style={{ width: '90%'}}>    
                                    </div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>CSS</p>
                                <div className='progress grey lightn-1'>
                                    <div className='determinate blue' style={{ width: '90%'}}>    
                                    </div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Bootstrap</p>
                                <div className='progress grey lightn-1'>
                                    <div className='determinate blue' style={{ width: '88%'}}>    
                                    </div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>React js</p>
                                <div className='progress grey lightn-1'>
                                    <div className='determinate blue' style={{ width: '70%'}}>    
                                    </div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Git</p>
                                <div className='progress grey lightn-1'>
                                    <div className='determinate blue' style={{ width: '85%'}}>    
                                    </div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Adobe Photoshop</p>
                                <div className='progress grey lightn-1'>
                                    <div className='determinate blue' style={{ width: '75%'}}>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
