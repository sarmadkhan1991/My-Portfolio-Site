import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './landingpage.css';


class LandingPage extends Component {
    render () {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src='https://sarmad-khan-portfolio.s3-us-west-1.amazonaws.com/Portfolio-pic.png'
                            alt='headShot'
                            className='headShot-img'
                        />
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML5/CSS | NodeJS | JavaScript | ReactJS | Express | Redux | PostgreSQL | Next.js | MassiveDB</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sarmad-khan-584447156/" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/sarmadkhan1991" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
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