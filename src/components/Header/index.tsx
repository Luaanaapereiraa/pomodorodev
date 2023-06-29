import { NavLink } from 'react-router-dom'
import { HeaderContainer } from '../../components/Header/styles'
import { Scroll, Timer } from 'phosphor-react'
import logoPomodoroDev from '../../assets/pomodoro.png'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoPomodoroDev} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
