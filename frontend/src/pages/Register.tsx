
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("/api/users/register", form);
    alert("회원가입 완료!");
  };

  return (
    <div>
      <h2>회원가입</h2>
      <input name="username" placeholder="아이디" onChange={handleChange} />
      <input name="password" type="password" placeholder="비밀번호" onChange={handleChange} />
      <input name="email" placeholder="이메일" onChange={handleChange} />
      <button onClick={handleSubmit}>가입하기</button>
    </div>
  );
};

export default Register;
