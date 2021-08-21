import NotFound from "components/NotFound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Main from "./pages/Main";
import Save from "./pages/Save";

Photo.propTypes = {};

function Photo(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={Main} />
            <Route path={`${match.url}/add`} component={Save} />
            <Route path={`${match.url}/:photoId`} component={Save} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;
