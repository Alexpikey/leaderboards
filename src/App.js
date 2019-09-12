import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Profile from './components/Profile';
import Leaderboard from './components/leaderboard/Leaderboard';
import MobileBackground from './layout/MobileBackgrounds';
import Background from './layout/Backgrounds';

function App() {
  return (
      <div className="App">
        <Header/>
        <main className="leaderboard-page">
          <MobileBackground/>
          <Background/>
          <Profile/>
          <Leaderboard/>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
