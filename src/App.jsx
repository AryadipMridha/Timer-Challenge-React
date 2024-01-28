import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Not Easy" targetTime={5}/>
        <TimerChallenge title="Hard" targetTime={10}/>
        <TimerChallenge title="Pros Only" targetTime={20}/>

      
      
      </div>
    </>
  );
}

export default App;