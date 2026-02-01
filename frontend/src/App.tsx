import React from 'react';

const App = () => {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', border: '5px solid white', padding: '20px' }}>
        🛡️ SISTEMA ONLINE
      </h1>
      <h2 style={{ marginTop: '20px', color: 'red', fontWeight: 'bold' }}>
        DR. ALAN SILVA
      </h2>
      <p style={{ color: '#555' }}>Se você está vendo isso, o React venceu!</p>
    </div>
  );
};

export default App;