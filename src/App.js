//import logo from './logo.svg';
import React , {useState} from 'react';
import './apps.css';
import Hero from "./jk/hero";

 import Text from './jk/text';
 import Input from './jk/input';
 import About from './jk/about';

function App() {
  const [dark,setDark] = useState({
    backgroundColor: "#fff",
    color :"#333",
  })



  const [mode,setMode] = useState("dark");
  const [modetext,setModetext] = useState("muted");
  const [heading,setHeading] = useState("light");
  
  const [d_text, setD_text] = useState();
  const mood = () =>{
    if(dark.color == "#333"){
      setDark({
        backgroundColor: "#222",
        color :"#fff",
      } )
      setMode("dark");
      setD_text("Light");
    }

    else{
      setDark({
        backgroundColor: "#fff",
        color :"#333",
      })
      setD_text("dark");
      setMode("light");
    }

  }

  const toggle = () =>{
  let main=  document.getElementById("root");
    if(mode==="dark"){
      setMode("light");
      setModetext("dark");  
    }
    else{
      setMode("dark");
    setModetext("muted"); 
    }
  }
   return (
   
    <div className="root" id="root" style={dark}> 
    <Text logo="hello" mode={mode}  toggle={toggle} />
    <Hero mode={mode} toggle={toggle} modetext={modetext} />
    
       <Input heading="enter the text change formted" mode= {mode} modetext={modetext} toggle={toggle}/>
       <About mode={mode} modetext={modetext}/>
        
  
    </div>
  );


}

export default App;
