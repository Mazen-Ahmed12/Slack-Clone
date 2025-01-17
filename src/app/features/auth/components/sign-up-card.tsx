import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  OutlinedInput,
  Typography,
  CardActions,
} from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { SignInFlow } from "../types";
import { useState } from "react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-full h-full p-6 text-xl font-bold">
      <CardHeader title="Sign up to continue" className="px-0 pt-0" />
      <CardContent className="space-y-5">
        <Typography>Use your email or another service to continue</Typography>
        <form className="space-y-2.5">
          <OutlinedInput
            disabled={false}
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder="Email"
            type="email"
            required
            fullWidth
          />
          <OutlinedInput
            disabled={false}
            value={password}
            onChange={(e) => {setConfirmPassword(e.target.value)}}
            placeholder="password"
            type="password"
            required
            fullWidth
          />
          <OutlinedInput
            disabled={false}
            value={confirmPassword}
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder="Confirm Password"
            type="password"
            required
            fullWidth
          />
          <Button
            type="submit"
            className="w-full bg-slate-900 text-white hover:bg-gray-800 normal-case"
            size="large"
            disabled={false}
          >
            continue
          </Button>
        </form>
        <Divider variant="middle" />
        <CardActions className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant="outlined"
            size="large"
            className="w-full relative text-black border-white hover:bg-neutral-300"
          >
            <Google className="size-5 absolute top-2.1 left-2.5 " />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant="outlined"
            size="large"
            className="w-full relative !ml-0 text-black border-white hover:bg-neutral-300"
          >
            <GitHub className="size-5 absolute top-2 left-2.5" />
            Continue with githup
          </Button>
        </CardActions>
        <Typography
          className="text-s text-muted-foreground inline-block"
          component="span"
        >
          Already have an account? 
          <Typography
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer inline-block"
            component="span"
          >
            sign In
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};
