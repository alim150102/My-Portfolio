import React from 'react';
import Aux from '../../container/Aux';
import classes from './landingpage.module.css'
import { Grid, Cell } from 'react-mdl';

class Landingpage extends React.Component {
    render() {
        return (
            <Aux>
                <div className={classes.landingPage}>
                    <Grid className={classes.landingGrid}>
                        <Cell col="12">
                            <img className={classes.imgProfile} src="https://image.flaticon.com/icons/svg/2784/2784488.svg" />
                            <div className={classes.banner}>
                                <h1>Front End Developer</h1>
                                <hr />
                                <p>HTML | CSS | Bootstrap | JavaScript | React | React-Native</p>

                                <div className={classes.socialMedia}>
                                    <a href="http://google.com" rel="noopener noreferrer" teget="blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="http://google.com" rel="noopener noreferrer" teget="blank">
                                        <i className="fa fa-github-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="http://google.com" rel="noopener noreferrer" teget="blank">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="http://google.com" rel="noopener noreferrer" teget="blank">
                                        <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="http://google.com" rel="noopener noreferrer" teget="blank">
                                        <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </Aux>
        )
    }
}

export default Landingpage;