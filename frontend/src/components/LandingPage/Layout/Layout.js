import React from 'react';

export default function Layout(props){

    return(
        <React.Fragment className="Layout">
            {props.children}
        </React.Fragment>
    )
}