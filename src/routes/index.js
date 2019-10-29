import React from 'react';
import SpotApp from '../containers/SpotApp';
import Album from '../containers/album/Album';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

class Jsx extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SpotApp} />
          <Route exact path='/album' component={Album} />
        </Switch>
      </BrowserRouter>
    )
  }

}
export default Jsx;
