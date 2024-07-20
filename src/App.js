import './App.css';
import Toolbar from './Components/Toolbar';
import { useState } from 'react';

function App() {

  const [expanded, setExpanded] = useState(false)

  function expandToolbar() {
    setExpanded(!expanded)
  }

  return (
    <div className="action-toolbar">
      <header>
        <main className='page-main'>
          <section className='section'>
            <div className='container'>
              <Toolbar expanded={expanded}
              setExpanded={setExpanded}
              onClick={expandToolbar}/>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
