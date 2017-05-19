/**
 * App.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import Main from './Main';
import Gist from './Gist';
import Home from './Home';
import { Link, Route } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const style = {
    display: 'flex',
    alignItems: 'stretch'
};




class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style={style}>
        <Sidebar>
            {
                console.log(this.props),
                this.props.gists ? this.props.gists.teams.map(gist => (
                        <SidebarItem key={gist._links.self.href.substring(gist._links.self.href.lastIndexOf('/') + 1)}>
                            <Image src={gist.crestUrl} thumbnail circle={true}  width="30" />
                            <Link to={`/g/${gist._links.self.href.substring(gist._links.self.href.lastIndexOf('/') + 1)}`}>
                                {gist.name || '[no description]'}
                            </Link>
                        </SidebarItem>
                    )) : (<p>Loading…</p>)
            }
        </Sidebar>
        <Main>

            <Route path="/" exact component={Home} />
            {

                this.props.gists && (
                    <Route path="/g/:gistId" render={
                        ({ match }) => (
                            <Gist players={this.props.players} gist={this.props.gists.teams.find(g => g._links.self.href.substring(g._links.self.href.lastIndexOf('/') + 1) === match.params.gistId)} />
                        )
                    } />
                )
            }
        </Main>
    </div>

            );

    }
}

export default App;