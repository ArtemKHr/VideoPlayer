import {VideoPlayer} from "./components/VideoPlayer/VideoPlayer";
import './main.css'

function App() {
  return (
    <div className="App">
      <VideoPlayer
        videoUrl="https://static-prod.weplay.tv/TV-video-bg.mp4"
        muted
        autoPlay
      />
    </div>
  );
}

export default App
