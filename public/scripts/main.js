// filepicker.setKey('ABF95lzYQqNV2ewYLYYQyz');

// filepicker.pick(
//  {
//     mimetype: 'image/*',
//     container: 'window',
//     services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
//   },
//   function(test){
//     console.log(JSON.stringify(test));
//   },
//   function(FPError){
//  	console.log(FPError.toString()); //- print errors to console
//   }
// );

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Profile from './components/pages/Profile';
import Create from './components/pages/Create';
import Content from './components/pages/Content';
import Home from './components/pages/Home';
import App from './components/App';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/profile" component={Profile}/>
			<Route path="/create" component={Create}/>
			<Route path="/content" component={Content}/>
		</Route>
	</Router>
);

ReactDOM.render(
	router,
	document.getElementById('app')
);