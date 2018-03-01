import React from 'react';
import { Switch, Route, } from 'react-router';
import MainContainer from './containers/MainContainer';
import ComposerContainer from './containers/ComposerContainer';
import SettingsContainer from './containers/SettingsContainer';
import LogInContainer from './containers/LogInContainer';
import AuthorizationCodeContainer from './containers/AuthorizationCodeContainer';

const Routes = () => {
  return (
    <MainContainer>
      <Switch>
        <Route exact path="/" component={LogInContainer} />
        <Route exact path="/authorization" component={AuthorizationCodeContainer} />
        <Route exact path="/composer" component={ComposerContainer} />
        <Route exact path="/settings" component={SettingsContainer} />
      </Switch>
    </MainContainer>
  );
};

export default Routes;
