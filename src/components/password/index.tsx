import { FaRegCopy } from "react-icons/fa";
import * as S from "./styles";
import { useState } from "react";

interface PasswordProps {
  password: string;
}

export function Password(props: PasswordProps) {
  const [showSnack, setShowSnack] = useState(false);

  const copyPassword = () => {
    navigator.clipboard.writeText(props.password);
    setShowSnack(true);
  };

  return (
    <S.Container>
      <S.Content>
        <span>{props.password}</span>
        <S.ContainerButton>
          <S.Button onClick={copyPassword}>
            {showSnack && <S.Snackbar>password copied</S.Snackbar>}
            <FaRegCopy />
          </S.Button>
        </S.ContainerButton>
      </S.Content>
    </S.Container>
  );
}
