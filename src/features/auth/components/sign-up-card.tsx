import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  OutlinedInput,
  Typography,
  CardActions,
  Alert,
} from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { SignInFlow } from "../types";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuthActions();

  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setPending(true);
    signIn("password", { name, email, password, flow: "signUp" })
      .catch(() => {
        setError("Something went wrong");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const onProviderSignUp = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <Card className="w-full h-full p-6 text-xl font-bold">
      <CardHeader title="Sign up to continue" className="px-0 pt-0" />
      {!!error && (
        <Alert
          severity="error"
          className="!bg-destructive/15 p3 rounded-md flex items-center gap-x-2 text-sm !text-destructive mb-6"
        >
          <strong>{error}</strong>
        </Alert>
      )}
      <CardContent className="space-y-5">
        <Typography>Use your email or another service to continue</Typography>
        <form onSubmit={onPasswordSignUp} className="space-y-2.5">
          <OutlinedInput
            disabled={pending}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="full name"
            required
            fullWidth
          />
          <OutlinedInput
            disabled={pending}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            type="email"
            required
            fullWidth
          />
          <OutlinedInput
            disabled={pending}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            type="password"
            required
            fullWidth
          />
          <OutlinedInput
            disabled={pending}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm Password"
            type="password"
            required
            fullWidth
          />
          <Button
            type="submit"
            className="w-full bg-slate-900 text-white hover:bg-gray-800 normal-case"
            size="large"
            disabled={pending}
          >
            continue
          </Button>
        </form>
        <Divider variant="middle" />
        <CardActions className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
            onClick={() => onProviderSignUp("google")}
            variant="outlined"
            size="large"
            className="w-full relative text-black border-white hover:bg-neutral-300"
          >
            <Google className="size-5 absolute top-2.1 left-2.5 " />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => onProviderSignUp("github")}
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
