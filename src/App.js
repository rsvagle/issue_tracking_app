import React from 'react';
import Header from './components/layout/Header';
import ContactForm from './components/ContactForm';
import SideNavigation from './components/layout/SideNavigation';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideNavigation />
        <div id="content-wrapper">
        <Header />
        <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;