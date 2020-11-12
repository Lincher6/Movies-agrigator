import React from 'react'
import * as ROUTES from 'constants/routes'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {SignInPage} from "./pages/SignInPage";

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.HOME}>
                    <HomePage/>
                </Route>
                <Route exact path={ROUTES.BROWSE}>
                    Browse
                </Route>
                <Route exact path={ROUTES.SIGN_IN}>
                    <SignInPage/>
                </Route>
                <Route exact path={ROUTES.SIGN_UP}>
                    SIGNUP
                </Route>

                <Route path={ROUTES.HOME}>
                    <HomePage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
