import { useState } from "react";
import { Link } from "react-router-dom";

export const SignInBox = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const submitClick = () => {
    console.log(id, pw);
  };
  return (
    <div className="modal-body">
      <label htmlFor="id" className="block text-gray-700 mb-2">
        ID
      </label>
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
        id="id"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 mb-4"
      />

      <label htmlFor="pw" className="block text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        id="pw"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 mb-4"
      />

      <div className="flex justify-between mb-4">
        <Link to="/SignUp" className="">
          ID/PW 찾기
        </Link>
      </div>

      <div>
        <Link to="/SignUp" className="">
          회원가입
        </Link>
        <button onClick={submitClick} className="">
          로그인
        </button>
      </div>
    </div>
  );
};
