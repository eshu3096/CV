import React, { Component } from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';
import Portfolios from './Portfolios';
import Profile from './Profile';
import About from './About';


export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                            <About />
                            <Skills />
                            <Experiences />
                            <Educations />
                            <Portfolios />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
