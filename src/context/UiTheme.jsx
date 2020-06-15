import React, { createContext, Component } from 'react';

export const theme_ui = createContext();

class Theme extends Component{
    state = {
        isLight: true,
        uiDarkTheme:{color:"back"},
        uiLightTheme:{color:"white"}
    }

    render(){
        return(
            <Theme.Provider value={{...this.state}}>
                {this.props.children}
            </Theme.Provider>    
        );
    }
}
export default Theme;