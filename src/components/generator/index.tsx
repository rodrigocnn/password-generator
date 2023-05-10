import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { TbRectangleVertical } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai"

import { letters } from "../constants/letters";
import { Password } from "./../password/index";
import * as S from "./styles";

export function Generator() {
  const [numberOfCaracter, setNumberOfCaracter] = useState(0);
  const [password, setPassword] = useState<string>("P4$5WOrD!");
  const listPasswordRequired = ["Lowercase", "Uppercase", "Numbers", "Symbols"]
  const [checked, setChecked] = useState<string[]>(["Uppercase"]);
  const [showValidation, setShowValidation] = useState(false)

  const randomPassword = (event: any) => {
    event.preventDefault();
    randLetter();
  };

  const mountPasswordRequired = (type: string) => {
    switch (type) {
      case "Lowercase":
        return letters.lowerCase[
          Math.floor(Math.random() * letters.lowerCase.length)
        ];
      case "Uppercase":
        return letters.upperCase[
          Math.floor(Math.random() * letters.upperCase.length)
        ];
      case "Numbers":
        return letters.numbers[
          Math.floor(Math.random() * letters.numbers.length)
        ];
      case "Symbols":
        return letters.symbols[
          Math.floor(Math.random() * letters.symbols.length)
        ];
      default:
        return "";
    }
  };

  function randLetter() {
    if(numberOfCaracter < 6){
      setShowValidation(true)
      return
    }

    let PasswordChoised = "";

    checked.forEach((value)=>{
      PasswordChoised += mountPasswordRequired(value);
    })

    if (numberOfCaracter > checked.length) {
      const amountRemaining = numberOfCaracter - checked.length;
      for (let index = 0; index < amountRemaining; index++) {
        PasswordChoised += mountPasswordRequired("Uppercase");
      }
    }

    setPassword(PasswordChoised);
  }

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };



  return (
    <>
      {showValidation  &&
      <S.Validation>The Password  Length should at least 6
        <button onClick={()=>setShowValidation(false)}><AiOutlineCloseCircle/></button>
      </S.Validation>
      }

      <Password password={password} />

      <S.Container>
        <S.CaracterLenght>
          <S.CaracterText>Password Length</S.CaracterText>
          <S.CaracterNumber> {numberOfCaracter}</S.CaracterNumber>
        </S.CaracterLenght>

        <Slider
          onChange={(nextValues) => { setNumberOfCaracter(Number(nextValues))}}
          min={0}
          max={15}
          defaultValue={0}
          step={1}
        />
        <S.Form>

        {listPasswordRequired.map((item, index) => (
             <S.FormGroup>
                <input
                  value={item}
                  key={index}
                  onChange={handleCheck}
                  type="checkbox"
                  id="uppercase"
                  name="upper"


                />
                <label htmlFor="uppercase">Include {item} Letters</label>
           </S.FormGroup>
      ))}


          <S.FormGroup>
            <S.Strength>
              Strength
              <S.StrengthIcons>
                  {checked.map((item, index) => (
                    <TbRectangleVertical color="#a4ffaf"/>
                  ))}
              </S.StrengthIcons>
            </S.Strength>
          </S.FormGroup>

          <S.Button onClick={randomPassword}>Generate</S.Button>
        </S.Form>
      </S.Container>
      '
    </>
  );
}
