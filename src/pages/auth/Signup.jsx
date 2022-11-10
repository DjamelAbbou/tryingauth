import { useState } from "react";

export default function signUp() {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const user = { username, password };
  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        className="text-white border border-red p-4 flex justify-center items-center cursor-pointer"
        onClick={() => {
          fetch("/api/auth-users", {
            method: "POST",
            body: JSON.stringify(user),
          });
        }}
      >
        Sign up
      </div>
    </div>
  );
}
