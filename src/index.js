import { createRoot } from 'react-dom/client';
import video from "./assets/video.mp4";
import "./index.css";
import College_twitter from './College_twitter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





const App=()=>{
  
   
     
    
  return(
    <>
    
   <College_twitter/>         
    
    </>
  )
}
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App  />);