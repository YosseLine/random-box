import React, { Component } from 'react';
import './App.css';
/*
class RandomBox extends React.Component {
     render(){
         const liStyle = {fontSize: '1.5em'};
         const hobbies =['comer','dormir','maullar','aruñar','comer atun','laslalsl'];
         return (
             <div className ="card">
                <h2 className="name">Mozza</h2>
                <img src="http://www.rodentia.es/blog/wp-content/uploads/2016/02/Qu%C3%A9-Comen-los-Gatos.jpg" alt="gato mozza"/>
               <h5 style={{fontSize:'2em', margin:'2px'}}>Hobbies:</h5>
               <ul>
                {hobbies.map(function(hobbiItem ,i){
                  return <li key={i} style={liStyle}>{hobbiItem}</li>
                })}
               </ul>
            </div>
         );
        }
      }
   //Ahora utilizamos el DOM para crear el elemento Pet(componente) estará dentro de app
  ReactDOM.render(<RandomBox/>, document.getElementById('main'));
  let number = Math.random();
  number = number * Array.length;
  number = number * .5;
  number = Math.round(number);
  let listArray = Array[number];*/

class App extends Component {
  render() {
    const Array = ["That the world is ugly. But you're beautiful to me. Well are you thinking of me now (now)",
    "Solo solo day. Solo solo day girl. Solo solo day girl. I feel better today. Do not touch me. Solo solo day. Solo solo day. Solo solo day boy. Solo solo day boy. Agreeable. Solo solo solo day. Solo solo solo day",
    "What's the worst thing I can say. Things are better if I stay. So long and goodnight. So long and goodnight",
    "We'll carry on, we'll carry on. And though you're dead and gone, believe me. Your memory will carry onWe'll carry on. And in my heart I can't contain itThe anthem won't explain it"];

    let number = Math.random();
    number = number * Array.length;
    number = number * .5;
    number = Math.round(number);
    console.log(number);

    return (
      <main className="Box-flex">
        <div className="Style-box">
       <p>{Array[number]}</p>
        </div>
      </main>
    );
  }
}

export default App;
