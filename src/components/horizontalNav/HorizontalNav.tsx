import { useState } from 'react';
import './HorizontalNav.scss'

// Array Categorias
const categorias = [
    'Aperitivos y Cocteles', 'Bebidas y cervezas', 'Entradas', 'Carnes', 'Pescados', 'Postres'
]

function HorizontalNav() {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const changeColor = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="mx-auto flex flex-col justify-center contNav" >
      <div>
        <ul className="flex flex-row gap-4 overflow-y-auto navUl">
        {
          // .map Categorias
            categorias.map((categoria, index) => {
                return <li className="navLi"  key={categoria}><a className={`navLink ${index === selectedIndex ? 'active' : ''}`} onClick={() => changeColor(index)}>{categoria}</a></li>;
            })  
        }
        </ul>
      </div>
    </div>
  )
}

export default HorizontalNav