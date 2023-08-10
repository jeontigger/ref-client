import { useEffect, useState } from "react";
import { DropDownCalendar } from "../calendar/DropDownCalendar";
import { Link } from "react-router-dom";

/**
 * 회원가입 입력상자 컴포넌트
 * @returns
 */
export const SignUpBox = () => {
  const [idValue, setIdValue] = useState("");
  const [isFilledId, SetIsFilledId] = useState(false);
  useEffect(() => {
    setCheckIdDuplicate(false);
  }, [idValue]);

  const [checkIdDuplicate, setCheckIdDuplicate] = useState(false);
  const [isNotDuplicate, setIsNotDuplicate] = useState(false);

  /**
   * 아이디 중복 체크 버튼 클릭시 호출하는 함수
   */
  const checkDuplicate = () => {
    setCheckIdDuplicate(true);

    // TO DO 아이디 중복 체크하는 로직
    if (idValue == "aaa") {
      setIsNotDuplicate(false);
      console.log(idValue, "duplicate");
    } else {
      setIsNotDuplicate(true);
      console.log(idValue, "not duplicate");
    }
  };

  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [isFilledPw, SetIsFilledPw] = useState(false);
  const [isFilledCpw, SetIsFilledCpw] = useState(false);
  const [pwValid, setpwValid] = useState(false);
  const [confirmPwMessage, setConfirmPwMessage] =
    useState("비밀번호를 입력해주세요");

  useEffect(() => {
    if (pw == cpw) {
      setpwValid(true);
      setConfirmPwMessage("비밀번호가 일치합니다.");
    } else {
      setpwValid(false);
      setConfirmPwMessage("비밀번호가 일치하지않습니다.");
    }
    if (!isFilledPw || !isFilledCpw) {
      setpwValid(false);
      setConfirmPwMessage("비밀번호를 입력해주세요.");
    }
  }, [pw, cpw]);

  const [nameValue, setNameValue] = useState("");
  const [isFilledName, setIsFilledName] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [isFilledEmail, setIsFilledEmail] = useState(false);
  const [emailValid, setEmailValid] = useState("이메일을 입력해 주세요.");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      setEmailValid("이메일 합격.");
      setIsEmailValid(true);
    } else {
      setEmailValid("이메일이 형식이 아닙니다.");
      setIsEmailValid(false);
    }
  }, [emailValue]);

  const [invalidReasonText, setInvalidReasonText] = useState("");

  /**
   * input의 value를 바로 State에 입력하고 isFilled 부울 변수들에 적용시키는 함수
   * @param e
   * @param handleValueFunction  값 설정 함수
   * @param handleFilledFunction 값 여부 확인 함수
   */
  const handleValueFilled = (
    e: any,
    handleValueFunction: Function,
    handleFilledFunction: Function
  ) => {
    const value = e.target.value;
    handleValueFunction(value);
    if (value == "") {
      handleFilledFunction(false);
    } else {
      handleFilledFunction(true);
    }
  };

  /**
   * 유효여부를 체크하여 최하단에 출력할 메시지를 담는 함수
   * @param b 유효한지 체크하는 부울변수
   * @param s 유효하지 않을경우 최하단에 출력할 메시지
   * @returns 유효하면 0, 유효하지 않으면 1 반환
   */
  const checkValidAndFilled = (b: boolean, s: any) => {
    if (b) {
      return 0;
    } else {
      setInvalidReasonText(s);
      return 1;
    }
  };

  /**
   * 제출전 유효 검사 함수
   * @returns
   */
  const isAllValid = () => {
    let isNotValid = 0;
    isNotValid += checkValidAndFilled(
      isFilledName,
      "이름을 입력하셔야 합니다."
    );
    isNotValid += checkValidAndFilled(pwValid, "비밀번호가 일치하지 않습니다.");
    isNotValid += checkValidAndFilled(
      isFilledPw && isFilledCpw,
      "비밀번호를 입력해야 합니다."
    );
    isNotValid += checkValidAndFilled(
      isNotDuplicate,
      "ID가 중복검사가 필요합니다."
    );
    isNotValid += checkValidAndFilled(
      checkIdDuplicate,
      "ID가 중복검사가 필요합니다."
    );
    isNotValid += checkValidAndFilled(isFilledId, "ID를 입력해야 합니다.");

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
    if (!isFilledEmail) {
      setInvalidReasonText("이메일을 입력해 주세요.");
      return false;
    }
    if (!isEmailValid) {
      setInvalidReasonText("이메일이 유효하지 않습니다.");
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

    formData["id"] = idValue;
    formData["password"] = pw;
    formData["name"] = nameValue;
    formData["email"] = emailValue;

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
        <div>
          <label htmlFor="id">ID: </label>
          <input
            type="text"
            id="id"
            placeholder="아이디"
            required
            onChange={(event) =>
              handleValueFilled(event, setIdValue, SetIsFilledId)
            }
          />
          <button onClick={checkDuplicate}>중복확인</button>
        </div>
        <div>
          <label htmlFor="pw">비밀번호: </label>
          <input
            type="password"
            id="pw"
            placeholder="비밀번호"
            onChange={(event) => handleValueFilled(event, setPw, SetIsFilledPw)}
            required
          />
        </div>
        <div>
          <label htmlFor="cpw">비밀번호확인: </label>
          <input
            type="password"
            id="cpw"
            placeholder="비밀번호 확인"
            onChange={(event) =>
              handleValueFilled(event, setCpw, SetIsFilledCpw)
            }
            required
          />
        </div>

        <div>{confirmPwMessage}</div>
        <div>
          <label htmlFor="name">성명: </label>
          <input
            type="text"
            id="name"
            placeholder="성명"
            required
            onChange={(event) =>
              handleValueFilled(event, setNameValue, setIsFilledName)
            }
          />
        </div>
        <div>
          <label>생년월일: </label>
          <DropDownCalendar />
        </div>
        <div>
          <label htmlFor="email">이메일: </label>
          <input
            type="text"
            id="email"
            placeholder="이메일"
            onChange={(event) =>
              handleValueFilled(event, setEmailValue, setIsFilledEmail)
            }
            required
          />
        </div>
        <div>{emailValid}</div>
        <div>{invalidReasonText}</div>
        <div>
          <Link to="/">취소</Link>
          <button onClick={submitClick}>등록</button>
        </div>
      </form>
    </>
  );
};
