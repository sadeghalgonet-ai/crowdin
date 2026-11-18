import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  return (
    <>
      <select
        className="language-selector"
        aria-label="Change language"
        value={i18n.resolvedLanguage ?? i18n.language}
        onChange={(event) => void i18n.changeLanguage(event.target.value)}
      >
        <option value="en">English</option>
        <option value="fa">فارسی</option>
        <option value="fr">Français</option>
      </select>

        <h1>{t("dashboard")}</h1>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>



       <h1>{t("dashboard")}</h1>
       <h1>{t("login")}</h1>
       <h1>{t("logout")}</h1>
       <h1>{t("welcome")}</h1>
    </>
  )
}

export default App
