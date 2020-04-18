import React from 'react';
import classes from './App.module.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './container/main';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="My Portfolio" className={classes.header} scroll>
            <Navigation>
              <Link to="/project">Project</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">Aboutme</Link>
              <Link to="/contactme">Contactme</Link>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation>
              <Link to="/project">Project</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">Aboutme</Link>
              <Link to="/contactme">Contactme</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }

}

export default App;
