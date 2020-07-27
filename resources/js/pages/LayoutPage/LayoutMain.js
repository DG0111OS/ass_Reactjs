import React from "react";

export default function LayoutMain({children}) {
    console.log('main');

    return (
        <div>
            {children}
        </div>
    )
}
