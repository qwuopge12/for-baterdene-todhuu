import React, {useState} from 'react'
import './app1.css'
import Check from './assets/checked.png'


function App() {
  const [newItem,setNewItem] = useState('')
  const [oldItem,sedNewItem] = useState('')
  const [midItem,dedNewItem] = useState('')
  const [item,setItem] = useState([])
  const [file,setFile] = useState('')
  const [pile,sedFile] = useState('')

  const fileUpload = (yuj) => {
        setFile(URL.createObjectURL(yuj.target.files[0]))
        
  }
  const fiseUpload = (lol) => {
    
    sedFile(URL.createObjectURL(lol.target.files[0]))
}
  const addItem = () =>{
    const itemuud = {
      id: Math.floor(Math.random() * 9999999),
      img:file,
      zurag:pile,
      value: newItem,
      baldam:oldItem,
      Amra:midItem,
    }
    
    setItem(oldlist => [...oldlist, itemuud])

  }
  const amaRaaDelete = (id) =>{    
    const arr = item.filter(amaraa => amaraa.id !== id )
    setItem(arr)
  }
return (
    <div className='dripp'>
      <div className='input-button'>
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="   Type your title..."/>
        <input type="text" baldam={oldItem} onChange={a => sedNewItem(a.target.value)} placeholder="  Type your channel name..."/>
        <input type="text" Amra={midItem} onChange={b => dedNewItem(b.target.value)} placeholder="  Type your date..."/>
        <input className='bolog' type="file"  onChange={fileUpload} />
        <input className='bolog123' type="file"  onChange={fiseUpload} />
        <button onClick = {()=>addItem()}>Create</button>
      </div>
      <div className='drippy'>
            {item.map((items) =>{
                return(
                  <div className='style-from'>                                          
                      <img className='ghj' src={items.img} alt=''/>
                      <div className='skip-title'>  
                        <img src={items.zurag} alt=''/>  
                        <div className='container_title-channel-date'>                
                          <div className='title'>{items.value}</div>
                          <div className='channel'>                                                       
                            <div className='channal'>{items.baldam}</div> 
                            <img src={Check} alt=''/>
                          </div>
                          <div className='date'>
                            <div className='datar'>{items.Amra}</div>
                          </div>
                        </div>
                      </div>       
                      <button onClick={() => amaRaaDelete(items.id)}></button>
                      <div className='chanale-name'>                         
                      </div>
                  </div>
                )
            })}
      </div>      
    </div>
);
}

export default App;                   
