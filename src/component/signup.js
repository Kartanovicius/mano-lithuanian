import react, { useState, useContext } from "react";
import themeContext from "../context/themeContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { theme, setTheme } = useContext(themeContext);

  function colorChange() {
    if (theme == "bg-black text-white") setTheme("bg-white text-black");
    else setTheme("bg-black text-white");
  }

  return (
    <div className={"flex flex-col justify-center items-center"}>
      <form method="POST" className={theme + " max-w-2xl p-10"}>
        <input
          aria-label="Enter your username"
          maxLength="20"
          type="text"
          placeholder="Username"
          className="text-sm text-gray-base px-2 py-2 w-full mb-5"
          onChange={({ target }) => setUsername(target.value)}
          value={username}
        />
        <input
          aria-label="Enter your email address"
          type="text"
          placeholder="Email address"
          className="text-sm text-gray-base px-2 py-2 w-full mb-5"
          onChange={({ target }) => setEmailAddress(target.value)}
          value={emailAddress}
        />
        <input
          aria-label="Enter your password"
          type="password"
          placeholder="Password"
          className="text-sm text-gray-base px-2 py-2 w-full mb-3"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <input
          aria-label="Enter your password"
          type="password"
          placeholder="Confirm password"
          className="text-sm text-gray-base px-2 py-2 w-full mb-3"
          onChange={({ target }) => setConfirmPassword(target.value)}
          value={confirmPassword}
        />
        <button
          type="submit"
          className={`bg-blue-medium hover:bg-blue-light w-full h-8 font-bold`}
        >
          Sign up
        </button>
        <p className={` my-4 w-full text-center`}>
          Already have account?{` `}
          <div to={"a"} className="font-bold text-blue-light">
            Login
          </div>
        </p>
      </form>
      <button
        onClick={colorChange}
        className={`bg-blue-medium hover:bg-blue-ligh w-full h-8 font-bold`}
      >
        Change Color
      </button>
    </div>
  );
}
