import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Sirmud from './Portfolio-pic.png';

class LandingPage extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={Sirmud}
                            alt='headShot'
                            className='headShot-img'
                        />
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML5/CSS | NodeJS | JavaScript | ReactJS | Express | </p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* YouTube */}
                                <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;