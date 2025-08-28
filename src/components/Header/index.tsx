import { NavLink } from "react-router-dom";
import { HeaderButtons, HeaderContainer } from "./style";

import { TimerIcon ,ScrollIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <HeaderContainer>
      <img src="/src/assets/Logo.svg" alt="logo da aplicação" />
      <HeaderButtons>
        <NavLink to='/' title="Timer">
          <TimerIcon  size={24} />
        </NavLink>
        <NavLink to='/history' title="Histórico">
         <ScrollIcon  size={24} />
        </NavLink>
      </HeaderButtons>
    </HeaderContainer>
  );
}