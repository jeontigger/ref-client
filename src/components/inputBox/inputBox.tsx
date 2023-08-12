import { useEffect, useState } from "react";

export class ErrorClass {
  constructor() {
    this.isIdEmpty = true;
    this.isNeedchkDuplicate = true;
    this.isDuplicate = true;
    this.isPwEmpty = true;
    this.isPwIncorrect = true;
    this.isNameEmpty = true;
    this.isEmailEmpty = true;
    this.isEmailIncorrect = true;
  }
  public isIdEmpty: boolean;
  public isNeedchkDuplicate: boolean;
  public isDuplicate: boolean;
  public isPwEmpty: boolean;
  public isPwIncorrect: boolean;
  public isNameEmpty: boolean;
  public isEmailEmpty: boolean;
  public isEmailIncorrect: boolean;

  public removeOrange() {
    if (this.isIdEmpty && this.isPwEmpty) {
      console.log("wow");
    }
    if (this.isNeedchkDuplicate && this.isDuplicate) {
    }
  }
}

interface Props {
  SetValue: Function;
  err: ErrorClass;
}

export const IdBox = ({ SetValue, err }: Props) => {
  // 서버쪽에서 중복 여부만 res받으면 없어질 코드
  const [id, setId] = useState("");

  const HandleId = (e: any) => {
    SetValue(e.target.value);
    setId(e.target.value);
    err.isNeedchkDuplicate = true;
    console.log(id);
  };

  const CheckDuplicate = () => {
    if (id == "aaa") {
      console.log(id, "duplicate");
      err.isDuplicate = true;
    } else {
      console.log(id, "not duplicate");
      err.isDuplicate = false;
    }
  };

  return (
    <>
      <label htmlFor="id">ID: </label>
      <input
        type="text"
        id="id"
        placeholder="아이디"
        required
        onChange={HandleId}
      />
      <button onClick={CheckDuplicate}>중복확인</button>
    </>
  );
};

export const PwBox = ({ SetValue, err }: Props) => {
  const [chkPw, setChkPw] = useState("");
  const [regPw, setRegPw] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const HandlePw = (e: any) => {
    SetValue(e.target.value);
    setRegPw(e.target.value);
  };

  const HandlechkPw = (e: any) => {
    setChkPw(e.target.value);
  };

  useEffect(() => {
    err.isPwEmpty = false;
    if (regPw == chkPw) {
      setPwMessage("비밀번호가 일치합니다.");
    } else {
      setPwMessage("비밀번호가 일치하지 않습니다.");
      err.isPwIncorrect = true;
    }

    if (regPw == "") {
      setPwMessage("비밀번호를 입력해주세요.");
      err.isPwEmpty = true;
    } else if (chkPw == "") {
      setPwMessage("비밀번호 확인을 입력해주세요.");
      err.isPwEmpty = true;
    }
  }, [regPw, chkPw]);

  return (
    <>
      <label htmlFor="pw">비밀번호: </label>
      <input
        type="password"
        id="pw"
        placeholder="비밀번호"
        onChange={HandlePw}
        required
      />
      <br />
      <label htmlFor="cpw">비밀번호확인: </label>
      <input
        type="password"
        id="cpw"
        placeholder="비밀번호 확인"
        onChange={HandlechkPw}
        required
      />
      <br />
      <>{pwMessage}</>
      <br />
    </>
  );
};

export const NameBox = ({ SetValue, err }: Props) => {
  const HandleName = (e: any) => {
    let name = e.target.value;
    SetValue(name);
    if (name == "") {
      err.isNameEmpty = true;
    } else {
      err.isNameEmpty = false;
    }
  };
  return (
    <>
      <label htmlFor="name">성명: </label>
      <input
        type="text"
        id="name"
        placeholder="성명"
        required
        onChange={HandleName}
      />
    </>
  );
};

export const EmailBox = ({ SetValue, err }: Props) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      setEmailMessage("이메일 합격.");
      err.isEmailIncorrect = false;
    } else {
      setEmailMessage("이메일이 형식이 아닙니다.");
      err.isEmailIncorrect = true;
    }
    if (emailValue == "") {
      err.isEmailEmpty = true;
      setEmailMessage("이메일을 입력해 주세요.");
    } else {
      err.isEmailEmpty = false;
    }
  }, [emailValue]);

  const HandleEmail = (e: any) => {
    const email = e.target.value;
    SetValue(email);
    setEmailValue(email);
  };

  return (
    <>
      <label htmlFor="email">이메일: </label>
      <input
        type="text"
        id="email"
        placeholder="이메일"
        onChange={HandleEmail}
        required
      />
      <br />
      <>{emailMessage}</>
    </>
  );
};
