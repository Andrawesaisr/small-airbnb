import Bar from './component/navbar';
import Body from './component/body';
import Card from './component/card';
import data from './data';
import './style.css';
function App() {

    const f=data.map((item)=>{
      return <Card 
      sold={item.openSpots}
      {...item}
      />
    })
  
  return (
   <div>
    <Bar/>
    <Body/> 
   <section className='card-list'>
    {f}
   </section>
   </div>
  );
}

export default App;
