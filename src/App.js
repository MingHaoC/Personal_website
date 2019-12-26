import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Introduction from './components/Introduction/Introduction';
import Project from "./components/Portfolio/Project";
import Contact from './components/Contact/Contact';
import SideDrawer from "./components/SideDrawer/Sidedrawer";
import './components/Backdrop/Backdrop.css'
import picture from './image/v.jpg';
import './App.css';


class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawToggleClickHandlers = () => {
        this.setState( (prevState) =>{
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () =>{
        this.setState({
            sideDrawerOpen: false
        });
    };

    render() {
        let backdrop;
        if(this.state.sideDrawerOpen) {
            backdrop = <div className= "backdrop" onClick={this.backdropClickHandler}/>;
        }

        return (
            <div className="App">
                <div style={{height: '100%'}}>
                    <Toolbar onClick={this.drawToggleClickHandlers}/>
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                </div>
                <header className="App-header">
                    <img src={picture} className="App-logo" alt="logo"/>
                    <div className="beginning">
                        <h1>
                            <b>
                                Ming Hao Chen
                            </b>
                        </h1>
                        <h2>
                            Computer Science Student
                        </h2>
                    </div>
                </header>

                <h2>
                    <Introduction/>
                </h2>

                <h3>
                    PROJECTS
                    <Project/>
                </h3>

                <h4>
                    <Contact/>
                </h4>
            </div>
        );
    }
}

export default App;
