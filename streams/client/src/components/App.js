import React from 'react';
import {Router,Route,Link,Switch} from 'react-router-dom';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import History from '../history';


class App extends React.Component{

    
    render(){
        return(<div className="ui container">    
            <Router history={History}>
            <div>
                <Header />
                <Switch>
                 <Route path="/" exact component={StreamList}/>
                 <Route path="/streams/new" exact component={StreamCreate}/>
                 <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                 <Route path="/streams/:id" exact component={StreamShow}/>
                 <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                 </Switch>
            </div>
          </Router>
        </div>);
    }
}
export default App;
