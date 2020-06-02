import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from "./Streams/StreamList";
import StreamEdit from "./Streams/StreamEdit";
import StreamShow from "./Streams/StreamShow";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import Header from "./Header"
import history from "../history";




const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/create" exact component={StreamCreate} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>

    );

}

export default App;
