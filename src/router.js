import React,{Component} from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import App from './App'
import Main from './Main';
import Login from './pages/login';
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Tips from './pages/ui/tips'
import NoMatch from './pages/nomatch';
import Loading from './pages/ui/loading';
class Myrouter extends Component {
   render(){
       return(
         <Router>
            <App>
                <Route path="/login" component={Login}/>
                <Route path="/admin" render={()=>
                 <Main>
                   <Switch>
                 <Route path="/admin/home" component={Home}></Route>
                 <Route path="/admin/ui/buttons" component={Buttons}></Route>
                 <Route path="/admin/ui/loading" component={Loading}></Route>
                 <Route path="/admin/ui/tips" component={Tips}></Route>
                 <Route component={NoMatch}></Route>
                 </Switch>
                 </Main>
                }/>
                
            </App>
         </Router>
       );
   }
}
export default Myrouter;