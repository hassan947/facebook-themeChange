import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import img1 from './images/h2.jpg'
import p1 from './images/h1.jpg'

function Hi(props) {
  const [isBright,setIsBright]=React.useState(true);
  const mode=()=>{
    setIsBright(!isBright)

  };
  return<div className='for'> 
  <button id="aa" className={isBright ? 'Bmode' :'Dmode'} onClick={mode}>Theme Change</button>
<div className={isBright ? 'Bmain' :'Dmain'}>
    
    <div className='inner'>
    
      <img className='dp' src={props.ima} />
      <h4>{props.name}</h4>
    </div>
    <p className="date">{props.date}</p>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Commodi cupiditate quisquam sapiente, non quaerat
       lab orum sint nostrum ipsam sit qui,
     
      </p>
    <img class='product' src={props.pma} />
    <button className='ract'>Like</button>
    <button className='ract'>Comment</button>
    <button className='ract'>Share</button>
  </div>;
  </div>


}
ReactDom.render(<div><Hi name='Hassan Habib Khan' ima={img1} pma={p1} date='oct 9 at 10:06 PM' />

  </div>,
  document.querySelector('#root'));
