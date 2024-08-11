import './App.css'
import Navbar  from './Components/Navbar'
import Form from './Components/Form'
import About from './Components/About'
import Alert from './Components/Alert'
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
function App(props) {
  const [mode, setMode] = useState("light")
  const [cyMode, setCyMode] = useState("light")
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const [btnCyanText, setBtnCyanText] = useState("Enable Cyan Mode")
  const [alert, setAlert] = useState(null)
  // Alert 
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
  })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  // Color toggle
  const toggleCyan=()=>{
    if (cyMode==="light" || cyMode==="dark"){
      setCyMode("cyan")
      setMode("dark")
      setBtnCyanText("Enable Light Mode")
      document.body.style.backgroundColor="#003636";
      document.body.style.color="#00FFFF"
      showAlert("You have changed to cyan mode","success");
    }
    else{
      setCyMode("light")
      setMode("light")
      setBtnCyanText("Enable Cyan Mode")
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("You have changed to light mode","success");
    }
  }
  const toggleColor = () => {
    if (mode === "light") {
      setMode("dark")
      setBtnText("Enable Light Mode")
      document.body.style.backgroundColor="#2E2E2E";
      document.body.style.color="white";
      showAlert("You have changed to dark mode","success");
    }
    else{
      setMode("light")
      setBtnText("Enable Dark Mode")
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("You have changed to light mode","success");
    }
  };
  
return (
    <>
    <div>
      <Navbar title="Texty.com" mode={mode} cyMode={cyMode} toggleColor={toggleColor} toggleCyan={toggleCyan} alert={alert} btnCyanText={btnCyanText} btnText={btnText}/>
      <Alert alert={alert}/>
      {/* <Form heading="Enter Your Text" mode={mode} toggleColor={toggleColor} showAlert={showAlert} btnText={btnText}/>
      <About/> */}
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/" element={<Form/>}/>
      </Routes>
    </div>


    </>
  )
}

export default App
