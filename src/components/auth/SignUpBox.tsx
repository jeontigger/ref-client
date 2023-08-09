import { useRef } from "react";
import { DropDownCalendar } from "../calendar/DropDownCalendar";

/**
 * 회원가입 입력상자 컴포넌트
 * @returns
 */
export const SignUpBox = () => {
  // const [name, setFirstName] = useState('이름');

  /**
   * ID 인풋 박스 Ref 변수
   */
  const idRef = useRef<HTMLInputElement>(null);
  /**
   * ID 중복 검사 부울 변수
   */
  let idValidBool: boolean = false;
  /**
   * ID 중복 체크하기위해 ID 인풋 박스의 Ref변수를 가져와 출력하는 함수.
   * 추후 ref변수로 ID를 중복데이터와 검사해야 함
   * @param e 리랜더링을 멈추기 위한 기법으로 잠시 사용
   */
  const IDDuplicateCheck = (e: any) => {
    console.log(idRef.current?.value);
    idValidBool = true;
    e.preventDefault();
  };

  /**
   * 비밀번호 박스 useref
   */
  const pwRef = useRef<HTMLInputElement>(null);
  /**
   * 비밀번호 확인 박스 useref
   */
  const pwCompareRef = useRef<HTMLInputElement>(null);
  /**
   * 비밀번호 일치 여부 출력 텍스트 useref
   */
  const CompareTextRef = useRef<HTMLSpanElement>(null);
  /**
   * 비밀번호 유효 여부 부울 변수
   */
  let passwordValidBoolean: boolean = false;
  /**
   * 비밀번호 일치 여부 출력 함수. password 박스와 passwordcheck 박스 모두 적용시켜야 함
   */
  const passwordConfirm = () => {
    if (pwRef.current?.value === pwCompareRef.current?.value) {
      if (CompareTextRef.current) {
        CompareTextRef.current.textContent = "비밀번호가 일치합니다!";
      }
      passwordValidBoolean = true;
    } else {
      if (CompareTextRef.current) {
        CompareTextRef.current.textContent = "비밀번호가 일치하지 않습니다!";
      }
      passwordValidBoolean = false;
    }
  };

  /**
   * 이메일 주소 체크를 위한 텍스트 박스 ref 변수
   */
  const emailValidTextRef = useRef<HTMLSpanElement>(null);
  /**
   * 이메일 유효 여부 부울 변수
   */
  let emailValidBoolean: boolean = false;
  /**
   * 이메일 주소 체크를 위한 함수
   */
  const validateEmail = (e: any) => {
    const email = e.target.value;
    // 이메일 주소 체크를 위한 정규표현식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 입력된 이메일 주소가 정규표현식에 부합하는지 확인
    if (emailRegex.test(email)) {
      if (emailValidTextRef.current) {
        emailValidTextRef.current.textContent = "이메일 형식이 일치합니다.";
        emailValidBoolean = true;
      }
    } else {
      if (emailValidTextRef.current) {
        emailValidTextRef.current.textContent =
          "이메일 형식이 일치하지 않습니다.";
        emailValidBoolean = false;
      }
    }
  };
  const isAllValid = () => {
    if (!idValidBool) return false;
    if (!passwordValidBoolean) return false;
    if (!emailValidBoolean) return false;
    return true;
  };
  /**
   * 데이터 제출을 위한 사용자 정의 타입
   */
  interface FormData {
    [key: string]: any;
  }
  /**
   * 미구현 상태의 제출 버튼 함수.
   * @param e 리랜더링을 멈추기 위한 기법으로 잠시 사용
   */
  const submitClick = (e: any) => {
    const inputFields = document.querySelectorAll("input");
    const formData: FormData = {};
    if (!isAllValid()) {
      console.log("not form");
      return false;
    }
    for (let i = 0; i < inputFields.length; i++) {
      const inputField = inputFields[i] as HTMLInputElement;
      formData[inputField.name] = inputField.value;
    }
    console.log(formData);
    e.preventDefault();
    return true;
  };

  /**
   * 미구현 상태의 취소 버튼 클릭 함수
   * @param e 리랜더링을 멈추기 위한 기법으로 잠시 사용
   */
  const cancelClick = (e: any) => {
    window.location.href = "/";
    e.preventDefault();
  };

  return (
    <>
      <form>
        <label>ID: </label>
        <input
          type="text"
          ref={idRef}
          placeholder="아이디"
          name="id"
          required
        />
        <button type="submit" onClick={IDDuplicateCheck}>
          중복확인
        </button>
        <br />
        <label>비밀번호: </label>
        <input
          type="password"
          ref={pwRef}
          placeholder="비밀번호"
          name="password"
          onChange={passwordConfirm}
          required
        />
        <br />
        <label>비밀번호확인: </label>
        <input
          type="password"
          ref={pwCompareRef}
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          onChange={passwordConfirm}
          required
        />
        <br />
        <span ref={CompareTextRef}>비밀번호를 입력해주세요</span>
        <br />
        <label>성명: </label>
        <input type="text" placeholder="성명" id="name" required />
        <br />
        <label>생년월일: </label>
        <DropDownCalendar />
        <br />
        <label>이메일: </label>
        <input
          type="text"
          placeholder="이메일"
          name="email"
          onChange={validateEmail}
          required
        />
        <br />
        <span ref={emailValidTextRef}>이메일을 입력하세요</span> <br />
        <button type="submit" onClick={cancelClick}>
          취소
        </button>
        <button type="submit" onClick={submitClick}>
          등록
        </button>
      </form>
    </>
  );
};
