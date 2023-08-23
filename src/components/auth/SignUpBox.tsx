import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarBox,
  EmailBox,
  ErrorClass,
  IdBox,
  NameBox,
  PwBox,
} from "../inputBox/inputBox";

// 임시 api url
const [apiUrl, setApiUrl] = useState("");

/**
 * 회원가입 입력상자 컴포넌트
 * @returns
 */
export const SignUpBox = () => {
  // const err: ErrorClass = new ErrorClass();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBrith] = useState("");
  const [invalidReasonText, setInvalidReasonText] = useState("");

  const [err, setErr] = useState(new ErrorClass());

  /**
   * 제출 버튼 함수.
   * @param e 리랜더링을 멈추기 위한 기법으로 잠시 사용
   */
  const submitClick = (e: any) => {
    setApiUrl("https://server-ref.kro.kr/v1/test");
    console.log(err);
    if (!err.isValid()) {
      setInvalidReasonText(err.getMessage());
      return false;
    }

    const SingUpData = {
      id: id,
      pw: pw,
      name: name,
      email: email,
      birth: birth,
    };

    // 추후 api url 변경 필요
    fetch(apiUrl, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SingUpData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json;
        } else {
          throw new Error("회원가입에 실패했습니다.");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
    return true;
  };

  return (
    <>
      <form>
        <IdBox SetValue={setId} error={[err, setErr]} />
        <br />
        <PwBox SetValue={setPw} error={[err, setErr]} />
        <br />
        <NameBox SetValue={setName} error={[err, setErr]} />
        <br />
        <CalendarBox SetValue={setBrith} error={[err, setErr]} />
        <br />
        <EmailBox SetValue={setEmail} error={[err, setErr]} />
        <div>{invalidReasonText}</div>
        <div>
          <Link to="/">취소</Link>
          <button onClick={submitClick}>등록</button>
        </div>
      </form>
    </>
  );
};
