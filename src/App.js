import logo from './logo.png';
import './App.css';
import { useState } from 'react';

const languages = [{
  name: "English",
  logo: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
  room: "https://easytalk.daily.co/English"
}, {
  name: "Spanish",
  logo: "https://cdn.countryflags.com/thumbs/spain/flag-square-500.png",
  room: "https://easytalk.daily.co/Spanish"
}]


const topics = ["Warzone", "WorldCup 2022", "Entrepreneurship", "Politics", "History", "Innovation"]

function App() {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState(languages[0]);
  const [topic, setTopic] = useState(topics[0]);

  const onChangeLanguage = (lang) => {
    setLang(lang);
    setStep(1);
  }

  const onTopicChange = (topic) => {
    window.open(lang.room, "_blank")
  }

  const startOverClick = () => {
    setStep(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="EasyTalk" class="app-logo" />
        <p>
          with EasyTalk you can now study any language any time.
        </p>
        {step === 0 && <h2>Choose Language</h2>}
        {step === 1 && <h2>Choose Topic</h2>}
        {step === 0 && <div className="flags">
          {languages.map(lang => {
            return <div key={lang.name} className="language-flag" onClick={() => onChangeLanguage(lang)}>
              <h3>{lang.name}</h3>
              <img src={lang.logo} alt={lang.name} />
            </div>
          })}
        </div>}
        {step === 1 && <div className="topics">
          {topics.map(topic => {
            return <div onClick={() => onTopicChange(topic)} className="topic">
              <span>{topic}</span>
            </div>
          })}
        </div>}
        {step !== 0 && <div>
          <button onClick={startOverClick} className='start-over-btn'>Start Over</button>
        </div>}
      </header>
    </div>
  );
}

export default App;
