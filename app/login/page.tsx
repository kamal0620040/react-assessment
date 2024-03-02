"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useAuthContext from "../hooks/useAuthContext";

const LoginPage = () => {
  const [inputDetail, setInputDetail] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { dispatch } = useAuthContext();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    await axios({
      method: "post",
      url: "https://dummyjson.com/auth/login",
      data: JSON.stringify({
        username: inputDetail.username,
        password: inputDetail.password,
        // expiresInMins: 60, // optional
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          // setData(response.data);
          //   console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch({ type: "LOGIN", payload: response.data });
          setInputDetail({ username: "", password: "" });
          setIsSubmitting(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        setError(err.response.data.message);
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <form
      className="flex flex-col gap-6 justify-center items-center h-full"
      onSubmit={(e) => onSubmit(e)}
    >
      <div>
        <div>Username:</div>
        <input
          value={inputDetail.username}
          className=" bg-white border border-zinc-500 rounded-lg w-full outline-none text-gray-600 text-base mt-2 mb-1 px-4 py-2"
          placeholder="Username"
          onChange={(e) => {
            setInputDetail({ ...inputDetail, username: e.target.value });
          }}
        />
        <div className="mt-6">Password:</div>
        <input
          value={inputDetail.password}
          className=" bg-white border border-zinc-500 rounded-lg w-full outline-none text-gray-600 text-base mt-2 mb-4 px-4 py-2"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setInputDetail({ ...inputDetail, password: e.target.value });
          }}
        />
      </div>
      {error && <div className="mt-32 absolute text-red-400">{error}</div>}
      <button className="p-2 bg-zinc-600 text-white px-10 rounded-lg hover:scale-105">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
