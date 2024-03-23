import React from "react";
import {useNavigate} from 'react-router-dom'
import {Card,Input,Typography,Button} from '@material-tailwind/react'
import { useState } from "react";

function Login() {
  const navigate = useNavigate()

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login to your Account
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth>
            Log In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a
              onClick={() => {
                navigate("/signup");
              }}
              className="font-medium text-gray-900"
            >
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Login;
