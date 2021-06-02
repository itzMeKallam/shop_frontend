import React, { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Routes
const Signup = React.lazy(() => import('./signup/'))
const Signin = React.lazy(() => import('./signin/'))
const Home = React.lazy(() => import('./home/'))
const AddProducts = React.lazy(() => import('./addProducts/'))
const ViewProducts = React.lazy(() => import('./viewProducts/'))
const UpdateProducts = React.lazy(() => import('./updateProducts/'))
const UpdateProduct = React.lazy(() => import('./updateProduct/'))

export default function Index() {
    return (
        <Router>
            <Switch>
                    <Route path="/admin/signin" exact>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Signin />
                        </Suspense>
                    </Route>
                    <Route path="/admin/signup" exact>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Signup />
                        </Suspense>
                    </Route>
                    <Route path="/admin/addProducts" exact>
                        <Suspense fallback={<div>Loading...</div>}>
                            <AddProducts />
                        </Suspense>
                    </Route>
                    <Route path="/admin/viewProducts" exact>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ViewProducts />
                        </Suspense>
                    </Route>
                    <Route path="/admin/updateProducts" exact>
                        <Suspense fallback={<div>Loading...</div>}>
                            <UpdateProducts />
                        </Suspense>
                    </Route>
                    <Route path="/admin/updateProduct">
                        <Suspense fallback={<div>Loading...</div>}>
                            <UpdateProduct />
                        </Suspense>
                    </Route>
                    <Route path="/admin/" exact>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Home />
                        </Suspense>
                    </Route>
            </Switch>
        </Router>
    )
}
