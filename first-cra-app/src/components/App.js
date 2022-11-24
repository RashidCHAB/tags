import React, { Component } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import MainContent from './main/MainContent';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default App;