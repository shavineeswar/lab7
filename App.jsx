import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostHolder from './component/PostHolder';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Router>
            <Switch>
                <Route exact path="/posts">
                    <PostHolder/>
                </Route>
                <Redirect to='/posts'/>
            </Switch>
        </Router>
    }
}
