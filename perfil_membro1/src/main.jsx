import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [mostrarProjetos, setMostrarProjetos] = useState(false);

  const meusProjetos = [
    { titulo: 'Linktree i9', desc: 'Configuração de pipeline CI/CD no GitHub Actions e deploy.' },
    { titulo: 'Wikiédia InoveJr', desc: 'Desenvolvimento e estruturação da base de conhecimento dos membros.' }
  ];

  return (
    <div>
      <h2 id="Habilidades" className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
        Habilidades & Projetos
      </h2>
      <p className="mb-4 text-gray-500">Minhas aptidões técnicas geradas dinamicamente via React:</p>

      {/* Botão */}
      <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
        <button 
          onClick={() => setMostrarProjetos(!mostrarProjetos)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full transition-colors text-sm shadow-sm"
        >
          {mostrarProjetos ? '▲ Ocultar Principais Projetos' : '▼ Ver Principais Projetos na InoveJr'}
        </button>

        {/* Exibição baseada no clique do botão */}
        {mostrarProjetos && (
          <div className="mt-4 space-y-3 pt-3 border-t border-gray-200">
            {meusProjetos.map((proj, idx) => (
              <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200 shadow-2xs">
                <h4 className="font-bold text-gray-700">{proj.titulo}</h4>
                <p className="text-sm text-gray-500">{proj.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);