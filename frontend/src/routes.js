import React  from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import NewClient from './pages/NewClient';
import Confirmation from './pages/Confirmation';
import Clients from './pages/Clients';
import EditClients from './pages/EditClients';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/newclient" component={NewClient} />
                <Route path="/confirmation" component={Confirmation} />
                <Route path="/clients" component={Clients} />
                <Route path="/editclients" component={EditClients} />
            </Switch>
        </BrowserRouter>
    )
};