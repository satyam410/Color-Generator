import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color , setColor] = useState('');
  const [ error , setError] = useState(false);
  const [list,setList] = useState([]);

  const handleSubmit =(e) => {

    try {
      let newColors = new Values(color).all(10);
      setList(newColors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("Error is there");
    }

    e.preventDefault();
  }

  return <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit} >
        <input type="text" value={color}  onChange={(e) => setColor(e.target.value)} placeholder="#f15025"
        className={`${error ? 'error': null}`} />
        <button className="btn"  >Generate</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color,index)=>{
        console.log(color);
       return  <SingleColor key={index}  {...color} hexColor={color.hex} index={index}/>
      })}
    </section>
  </>
}

export default App
