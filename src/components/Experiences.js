import React, { Component } from 'react'

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>EXPERIENCES</strong>
                        </h6>
                        <div className='row'>
                            <div className='col s12 m4 l4 xl4'>
                                <p className='teal year_exp white-text'>
                                    Jan
                                    <strong>2016</strong> -March
                                    <strong>2017</strong>
                                </p>
                            </div>
                            <div className='col s12 m8 l8 xl8'>
                                <blockquote className='no-pad'>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>WEB DEVELOPER</strong>
                                    </h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col s12 m4 l4 xl4'>
                                <p className='teal year_exp white-text'>
                                    Jan
                                    <strong>2017</strong> -March
                                    <strong>2019</strong>
                                </p>
                            </div>
                            <div className='col s12 m8 l8 xl8'>
                                <blockquote className='no-pad'>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>WEB DEVELOPER</strong>
                                    </h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
