import { HeaderButtons, HeaderContainer } from "./style";

import { TimerIcon ,ScrollIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <HeaderContainer>
      <img src="/src/assets/Logo.svg" alt="logo da aplicação" />
      <HeaderButtons>
        <a href="">
          <TimerIcon  size={24} />
        </a>
        <a href="">
         <ScrollIcon  size={24} />
        </a>
      </HeaderButtons>
    </HeaderContainer>
  );
}