import { useState } from 'react'
import './App.css'

function App() {
const [togglemenu, setTogglemenu] = useState(false)

function newstate(){
  setTogglemenu(toggle=> !toggle)
}

  return (
    <div className="container">
        <header>
            <div className="boxlogo">
              <h1 className='logo'>
                Logo
              </h1>
            </div>

            <nav>
                <a href="#" className='linkheader'>
                  <button>inicio</button>
                </a>
                <a href="#" className='linkheader'>
                  <button>contato</button>
                </a>
                <a href="#" className='linkheader'>
                  <button>Privacidade</button>
                </a>

                <div className='boxiconmenu' onClick={newstate}>
                   <div className= {togglemenu ? "activemenu iconmenu" : "iconmenu"}>
                    {/* icon menu */}
                   </div> 
                </div>
            </nav>
        </header>
    </div>
  )
}

export default App
