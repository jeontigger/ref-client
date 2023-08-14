import { useState } from "react";
import { Link } from "react-router-dom";

export const SignInBox = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const submitClick = () => {
    console.log(id, pw);
  };
  return (
    <>
      <h2>로그인</h2>
      <label htmlFor="id">ID</label>
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
        id="id"
      />
      <br />
      <label htmlFor="pw">password</label>
      <input
        type="password"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        id="pw"
      />
      <br />
      <Link to="/SignUp">id찾기</Link>
      <Link to="/SignUp">pw찾기</Link>
      <br />
      <Link to="/SignUp">회원가입</Link>
      <button onClick={submitClick}>로그인</button>
    </>
  );
};
