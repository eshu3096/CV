import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6 className='mt-bottom'>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className='grey-text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className='card-action'>
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className="row mt">
                            <div class="col s12 m6 l6 xl6">
                                <p>
                                    <strong>Address:</strong> 123 Lorem
                                </p>
                                <p>
                                    <strong>Email:</strong> test@gmail.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> 123 456 789
                                </p>
                            </div>
                            <div class="col s12 m6 l6 xl6">
                                <p>
                                    <strong>Main Language:</strong> Hindi
                                </p>
                                <p>
                                    <strong>Second Language:</strong> English
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
