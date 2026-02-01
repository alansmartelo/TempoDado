import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#0d1117', color: '#00ff88', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace' }}>
      <div style={{ textAlign: 'center', border: '1px solid #00ff88', padding: '50px', position: 'relative' }}>
        <h1>🛡️ TEMPO DADO</h1>
        <p style={{ color: '#c9d1d9' }}>SISTEMA OPERACIONAL E SEGURO</p>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', fontSize: '3rem', color: 'rgba(255, 0, 0, 0.2)', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
          DR. ALAN MARTELO
        </div>
      </div>
    </div>
  );
}

export default App;