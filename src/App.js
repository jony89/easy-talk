import logo from './logo.png';
import './App.css';

const languages = [{
  name: "English",
  logo: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
  room: "https://easytalk.daily.co/English"
}, {
  name: "Spanish",
  logo: "https://cdn.countryflags.com/thumbs/spain/flag-square-500.png",
  room: "https://easytalk.daily.co/Spanish"
}]

function App() {
  const onChangeLanguage = (lang) => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="EasyTalk" />
        <p>
          with EasyTalk you can now study any language any time.
        </p>
        <h2>Choose Language</h2>
        <div className="flags">
          {languages.map(lang => {
            return <div key={lang.name  } className="language-flag" onClick={() => onChangeLanguage(lang.name)}>
              <h3>{lang.name}</h3>
              <img src={lang.logo} alt={lang.name} />
            </div>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
