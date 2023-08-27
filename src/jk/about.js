import React ,{useState}from 'react'

export default function About(props) {
 const [mystyle,setMystyle] = useState({
    backgroundColor :"#fff",
    color : "#333",
   })
 
  const mood = () =>{
      if(mystyle.color == "#fff"){
        setMystyle(
          {
            backgroundColor : "#fff",
             color : "#333",

          })
        setText("dark mood");
        }


          else{
            setMystyle(
                {
                    backgroundColor:"#333",
                    color: "#fff",
                    border : "1px solid #222",
                }
                )
                setText("Light mood");
        
        
        
      }
  }
   
  const [text,setText] = useState("dark mood");
    return (
        <div className={`container  style={mystyle} width="100%  bg-${props.mode}`}>
        <button className='btn btn-danger' onClick={mood}>{text}</button>
      <h2 className={`text-${props.modetext}`}>About Us</h2>  
     <ul class={`list-group bg-${props.mode} text-light`}>
  <li class="list-group-item active" aria-current="true" >An active item</li>
  <li class="list-group-item" style={mystyle}>A second item</li>
  <li class="list-group-item" style={mystyle}>A third item</li>
  <li class="list-group-item" style={mystyle}>A fourth item</li>
  <li class="list-group-item" style={mystyle}>And a fifth one</li>
</ul>
    </div>
  )
}
