import logo from './logo.svg';
import './App.css';
import CheckBox_MUI from "./CheckBox_MUI"
import VideoPlayer_MUI from './VideoPlayer_MUI';
import RadioButton_MUI from './RadioButton_MUI';
import ProgressBar_MUI from "./ProgressBar_MUI";
import CircularStatic from "./CircularProgressBar";
import MobileNumber_MUI from './MobileNumber_MUI';
import FileUpload from "./FileUpload_MUI"
import Slider_MUI from "./Slider_MUI";
import ToggleButton_MUI from './ToggleButton_MUI';
import TransferList from "./TransferList_MUI";
import Graphs_MUI from "./Graphs_MUI";

function App() {
  return (
    <div className="App">
    <CheckBox_MUI />
    <VideoPlayer_MUI />
    <RadioButton_MUI />
    <ProgressBar_MUI /><br/>
    <CircularStatic /><br/>
    <MobileNumber_MUI />
    <FileUpload />
    <Slider_MUI />
    <ToggleButton_MUI />
    <TransferList />
    {/* <Graphs_MUI /> */}

    </div>
    
  );
}

export default App;
