import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return (
                <div>
                    <div className='projects-grid'>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{backgroundColor: 'black', color: 'black', height: '176px', background: 'url(https://sarmad-khan-portfolio.s3-us-west-1.amazonaws.com/CAA.jpg) center / cover'}}>Chugging Across America</CardTitle>
                                <CardText>
                                    Full Stack Web App, developed using Google maps API, weather API and a third party Brewery API. Group project at Dev Mountain.
                                </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/sarmadkhan1991/chugging-across-america" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                                <Button colored><a href="https://chuggingcrossamerica.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                            </CardActions>
                                <CardMenu style={{color: 'black'}}>
                                    <IconButton name='share'/>
                                </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{backgroundColor: 'black', color: 'black', height: '176px', background: 'url(https://sarmad-khan-portfolio.s3-us-west-1.amazonaws.com/sirmud-landingPage.jpg) center / cover'}}>sirmud.net</CardTitle>
                                <CardText>
                                    First full stack project. Personal artist website. Hosted on Digital Ocean. Checkout the live version!
                                </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/sarmadkhan1991/personal-project-sk" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                                <Button colored><a href="https://sirmud.net/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                            </CardActions>
                                <CardMenu style={{color: 'black'}}>
                                    <IconButton name='share'/>
                                </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{backgroundColor: 'black', color: 'black', height: '176px', background: 'url(https://sarmad-khan-portfolio.s3-us-west-1.amazonaws.com/Bear-mapsLanding.png) center / cover'}}>Bear Maps</CardTitle>
                                <CardText>
                                    Bear spotting app, developed using google maps geocoding API. Click on the map to report bear sightings! - Hosted using AWS Amplify.
                                </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/sarmadkhan1991/bear-maps" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                                <Button colored><a href="https://master.d3p5o8pdt2s7r4.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                            </CardActions>
                                <CardMenu style={{color: 'black'}}>
                                    <IconButton name='share'/>
                                </CardMenu>
                        </Card>
                        
                    </div>

                    <div className="projects-grid">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{backgroundColor: 'black', color: 'black', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>City Guide</CardTitle>
                                <CardText>
                                    Static city guide app which is showcasing some of my favorite spots in Phoenix. App is highlighting CSS styling skills. - Hosted using AWS Amplify
                                </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/sarmadkhan1991/city-guide-app" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                                <Button colored><a href="https://master.ddi7otmkvn0b7.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                            </CardActions>
                                <CardMenu style={{color: 'black'}}>
                                    <IconButton name='share'/>
                                </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        // } else if (this.state.activeTab === 1){
        //     return (
        //         <div><h1>This is Angular</h1></div>
        //     )
        // } else if (this.state.activeTab === 2) {
        //     return (
        //         <div><h1>This is MongoDB</h1></div>
        //     )
        }
    }

    render () {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    {/* <Tab>Angular</Tab>
                    <Tab>MongoDB</Tab> */}
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;