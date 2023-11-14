import './App.css';
import BasicTabs from './components/BasicTabs';

function App() {
  return (
    <div className="App">
      <nav>
        <BasicTabs />
      </nav>
      <footer className='footer'>
        <div className='footer-content'>
          {new Date().getFullYear()} MovieZone. All Rights Reserved.
          <br />
          Tel. 000-0000-0000. 대표자명: 이프로
        </div>
      </footer>
    </div>
  );
}

export default App;
