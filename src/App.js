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
    const Array = ['Un amigo es quien ríe nuestra risa y llora nuestras lágrimas',
    'La mejor forma de conseguir un amigo es serlo',
    'Los amigos se convierten con frecuencia en ladrones de nuestro tiempo',
    'Un amigo es una persona con la que se puede pensar en voz alta'];

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
