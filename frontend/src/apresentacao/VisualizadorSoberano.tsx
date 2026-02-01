import React, { useEffect } from 'react';

interface Props {
  pdfUrl: string;
  nomeVisualizador: string;
}

export const VisualizadorSoberano: React.FC<Props> = ({ pdfUrl, nomeVisualizador }) => {
  
  useEffect(() => {
    // 🛡️ TRAVA: Bloqueia clique direito
    const bloquearMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', bloquearMenu);
    return () => document.removeEventListener('contextmenu', bloquearMenu);
  }, []);

  return (
    <div style={{ position: 'relative', userSelect: 'none', backgroundColor: '#0d1117', padding: '20px' }}>
      {/* 🛡️ MARCA D'ÁGUA DINÂMICA */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        opacity: 0.1,
        fontSize: '3rem',
        color: '#ff0000',
        pointerEvents: 'none',
        zIndex: 10,
        textAlign: 'center'
      }}>
        ACESSO AUTORIZADO POR: {nomeVisualizador.toUpperCase()}<br/>
        DATA: {new Date().toLocaleDateString()}
      </div>

      <div style={{ height: '750px', border: '2px dashed #00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#00ff88' }}>
          [Visualizador Protegido: O PDF será renderizado aqui sem opção de download]
        </p>
      </div>
    </div>
  );
};