import { useRef } from "react";

const Login = () => {
  const userName = useRef();
  const password = useRef();
  return (
    <div>
      <form>
        <input
          className="form-control"
          ref={userName}
          type="text"
          name="userName"
          placeholder="User Name"
        />
        <input
          type="password"
          ref={password}
          className="form-control"
          name="password"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
