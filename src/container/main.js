import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from '../components/landingpage/landingpage';
import Aboutme from '../components/aboutme/aboutme';
import Contactme from '../components/contactme/contactme';
import Project from '../components/project/project';
import Resume from '../components/resume/resume';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route path="/project" component={Project} />
            <Route path="/resume" component={Resume} />
            <Route path="/contactme" component={Contactme} />
            <Route path="/aboutme" component={Aboutme} />
        </Switch>
    )
}

export default Main; 