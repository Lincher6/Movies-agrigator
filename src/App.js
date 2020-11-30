import React from 'react'
import * as ROUTES from 'constants/routes'
import { BrowserRouter, Switch } from "react-router-dom";
import {HomePage, SignInPage, SignUpPage} from "./pages";
import {AuthRedirect, ProtectedRoute} from "./helpers/routes";

export function App() {
    const user = true

    return (
        <BrowserRouter>
            <Switch>
                <ProtectedRoute
                    user={user}
                    path={ROUTES.BROWSE}
                >
                    Browse
                </ProtectedRoute>

                <AuthRedirect
                    path={ROUTES.SIGN_IN}
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                >
                    <SignInPage/>
                </AuthRedirect>

                <AuthRedirect
                    path={ROUTES.SIGN_UP}
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                >
                    <SignUpPage/>
                </AuthRedirect>

                <AuthRedirect
                    loggedInPath={ROUTES.BROWSE}
                    user={user}
                    path={ROUTES.HOME}
                >
                    <HomePage/>
                </AuthRedirect>
            </Switch>
        </BrowserRouter>
    )
}
