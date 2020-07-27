import React from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ListProduct from "./pages/AdminPage/ProductPage/ListProduct";
import EditProduct from "./pages/AdminPage/ProductPage/EditProduct";
import AddProduct from "./pages/AdminPage/ProductPage/AddProduct";
import LayoutAdmin from "./pages/LayoutPage/LayoutAdmin";
import LayoutMain from "./pages/LayoutPage/LayoutMain";

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>

                            <Route path='/admin' exact>
                                Dashboard
                            </Route>

                            <Route path='/admin/products'>
                                <ListProduct/>
                            </Route>

                            <Route path='/admin/product/add'>
                                <AddProduct/>
                            </Route>

                            <Route path='/admin/product/:id'>
                                {   /*luôn luôn nhớ có '/'   */}
                                Edit product
                                {/*<EditProduct/>*/}
                                {/*chưa chạy vào đươc cái này*/}
                            </Route>

                        </Switch>
                    </LayoutAdmin>
                </Route>

                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path='/' exact>
                                HomePage
                            </Route>
                            <Route path='/contact'>
                                Contact
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>

                <Route path=''>
                    <NotFoundPage></NotFoundPage>
                    {/*chưa chạy vào đươc cái này*/}
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers;
