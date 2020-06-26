import React from 'react'; 
import Tweet from './Tweet';


function App()
{
  return(
    <div className = 'app'>
      <Tweet name='Harry' message="This is a random tweet" likes="Likes: 10,000"/>
      <Tweet name= 'Edi'message="I HAVE A SHORT TEMPER" likes= "Likes: -1"/>
      <Tweet name='Jack'message="YORICK, MY ONE TRUE LORD" likes= "Likes: 7,000,000,000,000,000"/>
    </div>
  );
}

export default App;