import React from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ListProduct from "./pages/AdminPage/ProductPage/ListProduct";
import EditProduct from "./pages/AdminPage/ProductPage/EditProduct";
import AddProduct from "./pages/AdminPage/ProductPage/AddProduct";
import LayoutAdmin from "./pages/LayoutPage/LayoutAdmin";
import LayoutMain from "./pages/LayoutPage/LayoutMain";
import ListCate from "./pages/AdminPage/CatePage/ListCate";
import AddCate from "./pages/AdminPage/CatePage/AddCate";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetail from "./pages/HomePage/ProductDetail";
import Allpost from "./pages/HomePage/Allpost";
import PostDetail from "./pages/HomePage/PostDetail";
import AllProduct from "./pages/AdminPage/ProductPage/AllProduct";
import CateProduct from "./pages/AdminPage/ProductPage/CateProduct";
import CheckOut from "./pages/HomePage/CheckOut";
import EditCate from "./pages/AdminPage/CatePage/EditCate";
import Dashboard from "./pages/AdminPage/Dashboard";
import ListPost from "./pages/AdminPage/PostPage/ListPost";
import AddPost from "./pages/AdminPage/PostPage/AddPost";
import EditPost from "./pages/AdminPage/PostPage/EditPost";
import Login from "./components/Login/Login";

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>

                            <Route path='/admin' exact>
                                <Dashboard></Dashboard>
                            </Route>

                            <Route path='/admin/products'>
                                <ListProduct/>
                            </Route>

                            <Route path='/admin/product/add'>
                                <AddProduct/>
                            </Route>

                            <Route path='/admin/product/:id'>
                                <EditProduct/>
                            </Route>

                            <Route path='/admin/categories'>
                                <ListCate></ListCate>
                            </Route>
                            <Route path='/admin/category/add'>
                                <AddCate></AddCate>
                            </Route>
                            <Route path='/admin/category/:id'>
                                <EditCate></EditCate>
                            </Route>

                            <Route path='/admin/posts'>
                                <ListPost></ListPost>
                            </Route>
                            <Route path='/admin/post/add'>
                                <AddPost></AddPost>
                            </Route>
                            <Route path='/admin/post/:id'>
                                <EditPost></EditPost>
                            </Route>


                        </Switch>
                    </LayoutAdmin>
                </Route>

                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path='/' exact>
                                <HomePage></HomePage>
                            </Route>

                            <Route path='/dang-nhap'>
                                <Login></Login>
                            </Route>

                            <Route path='/contact'>
                                Contact
                            </Route>

                            <Route path='/product/:id'>
                                <ProductDetail></ProductDetail>
                            </Route>

                            <Route path='/product'>
                                <AllProduct></AllProduct>
                            </Route>

                            <Route path='/category/:id'>
                                <CateProduct/>
                            </Route>

                            <Route path='/check-out'>
                                <CheckOut></CheckOut>
                            </Route>

                            <Route path='/bai-viet' exact>
                                <Allpost></Allpost>
                            </Route>
                            <Route path='/bai-viet/:id'>
                                <PostDetail></PostDetail>
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
