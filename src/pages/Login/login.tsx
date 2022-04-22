import React from "react";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
const Login = (props: any) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            defaultValue=""
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            defaultValue=""
          />
        </div>
        <div>
            <Button button ="Login"></Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
