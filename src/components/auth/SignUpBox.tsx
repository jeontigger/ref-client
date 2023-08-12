import { useState } from "react";
import { Link } from "react-router-dom";
import {
  EmailBox,
  ErrorClass,
  IdBox,
  NameBox,
  PwBox,
} from "../inputBox/inputBox";

/**
 * 회원가입 입력상자 컴포넌트
 * @returns
 */
export const SignUpBox = () => {
  const err: ErrorClass = new ErrorClass();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [invalidReasonText, setInvalidReasonText] = useState("");

  /**
   * 제출전 유효 검사 함수
   * @returns
   */
  const isAllValid = () => {
    let isNotValid = 0;
    console.log(id);
    console.log(pw);
    console.log(name);
    console.log(email);
    if (isNotValid) {
      return false;
    }

    const calendarFields = document.querySelectorAll("select");
    if (calendarFields[0].value == "") {
      setInvalidReasonText("생년월일을 선택해주세요.");
    }
    if (calendarFields[1].value == "") {
      setInvalidReasonText("생년월일을 선택해주세요.");
      return false;
    }
    if (calendarFields[2].value == "") {
      setInvalidReasonText("생년월일을 선택해주세요.");
      return false;
    }

    setInvalidReasonText("제출이 완료되었습니다.");
    return true;
  };

  /**
   * 데이터 제출을 위한 사용자 정의 타입
   */
  interface FormData {
    [key: string]: any;
  }
  /**
   * 제출 버튼 함수.
   * @param e 리랜더링을 멈추기 위한 기법으로 잠시 사용
   */
  const submitClick = (e: any) => {
    const formData: FormData = {};
    if (!isAllValid()) {
      console.log("invalid form");
      return false;
    }

    fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    e.preventDefault();
    return true;
  };

  return (
    <>
      <form>
        <IdBox SetValue={setId} err={err} />
        <br />
        <PwBox SetValue={setPw} err={err} />
        <br />
        <NameBox SetValue={setName} err={err} />
        <br />

        <input type="date" name="dateOfBirth"></input>
        <br />
        <EmailBox SetValue={setEmail} err={err} />
        <div>{invalidReasonText}</div>
        <div>
          <Link to="/">취소</Link>
          <button onClick={submitClick}>등록</button>
        </div>
      </form>
    </>
  );
};
