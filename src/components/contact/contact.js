import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';

class Contact extends Component {
    render () {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Sarmad Khan</h2>
                        <img 
                            src='https://sarmad-khan-portfolio.s3-us-west-1.amazonaws.com/Portfolio-pic.png' 
                            alt='avatar'
                            style={{ height: '250px', borderRadius: '10px' }}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Hello there! Thanks for taking the time to check out my portfolio as a Full Stack Web Developer. My name is Sarmad and I developed a passion for coding sometime around the fall of 2018. Ever since then I have attended and completed a 13 week immersive coding bootcamp and I have been learning on my own as well. I am sure that the skills that I learned there will help me in the coming future which is going to be dictated by these exciting technologies. Feel free to reach out if something caught your attention on here. Take care, thanks! 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true'/>
                                        (623) 203-3317
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>
                                        sir.mud.khan@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;