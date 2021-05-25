import React, { useContext, useEffect } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { HomeView } from "../view/HomeView"
import { GalleryView } from "../view/navigationtabviews/GalleryView"
import { NewsView } from "../view/navigationtabviews/NewsView"
import { ShopView } from "../view/navigationtabviews/ShopView"
import { SignInView } from "../view/navigationtabviews/SignInView"
import { ProfileView } from "../view/profiledropdownviews/ProfileView"
import { SavedProductsView } from "../view/profiledropdownviews/SavedProductsView"
import { SettingsView } from "../view/profiledropdownviews/SettingsView"
import RoutingPath from "./RoutingPath"
import { UserContext } from "../shared/provider/UserProvider"
import { ItemDetail } from "../view/navigationtabviews/ItemDetail"

export const Routes = (props: { children?: React.ReactChild }) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: React.FC) => {
        return authenticatedUser ? HomeView : navigateToViewIfAuthenticated
    }

    const authenticatedRequired = (navigateToViewIfAuthenticated: React.FC) => {
        return authenticatedUser ? navigateToViewIfAuthenticated : SignInView
    }

    const checkIfUserIsAuthenticated = () => {
        const getLocalStorage = localStorage.getItem('userName')
        if (getLocalStorage) setAuthenticatedUser(getLocalStorage)
    }

    useEffect(() => {
        checkIfUserIsAuthenticated()
    }, [])

    return (
        <BrowserRouter>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.galleryView} component={GalleryView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
                <Route exact path={RoutingPath.profileView} component={authenticatedRequired(ProfileView)} />
                <Route exact path={RoutingPath.savedProductsView} component={authenticatedRequired(SavedProductsView)} />
                <Route exact path={RoutingPath.settingsView} component={authenticatedRequired(SettingsView)} />
                <Route exact path={RoutingPath.itemDetailView} component={ItemDetail} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}