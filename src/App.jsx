import { useState } from 'react';

import Perfil from './components/Perfil/Index'
// import Formulario from './components/Formulario/Index';
import ReposList from './components/RepoList/Index';

function App() {
  // const [formularioVisivel, setFormularioVisitvel] = useState(true)
  const [nomeUsurario, setNomeUsuario] = useState('')
  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsurario.length > 4 && (
        <>
          <Perfil nomeUsurario={nomeUsurario} />
          <ReposList nomeUsurario={nomeUsurario} />
        </>
      )}
      
      {/* {formularioVisivel && (
      <Formulario />
      )}
      <button onClick={() => setFormularioVisitvel(!formularioVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App;