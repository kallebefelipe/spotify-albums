import React from 'react';
import SpotApp from '../containers/SpotApp';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

class Jsx extends React.Component {

  render() {

    return (
      <SpotApp />
      // <BrowserRouter>
      //   <Switch>
      //     <Route exact path='/' component={SpotApp} />
      //   </Switch>
      // </BrowserRouter>
    )
  }

}
export default Jsx;
