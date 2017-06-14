/**
 * Home.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React from 'react';
import { Image } from 'react-bootstrap';



const style = {
    textAlign:"center"
};

const Home = (props) => {

	return(<h1 style={style}>{props.name}</h1>);
}

export default Home;