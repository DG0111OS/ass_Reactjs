import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";

export default function LayoutMain({children}) {
    console.log('main');

    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}
