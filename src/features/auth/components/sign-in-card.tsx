import { useState } from "react";
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

import { useAuthActions } from "@convex-dev/auth/react";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const { signIn } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);
    signIn("password", { email, password, flow: "signIn" })
      .catch(() => {
        setError("Invalid email or password");
      })
      .finally(() => {
        setPending(false);
      });
  };

  const onProviderSignIn = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <Card className="w-full h-full p-6 text-xl font-bold">
      <CardHeader title="Login to continue" className="px-0 pt-0" />
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
        <form onSubmit={onPasswordSignIn} className="space-y-2.5">
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
            onClick={() => onProviderSignIn("google")}
            variant="outlined"
            size="large"
            className="w-full relative text-black border-white hover:bg-neutral-300"
          >
            <Google className="size-5 absolute top-2.1 left-2.5 " />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => onProviderSignIn("github")}
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
          Don&apos;t have an account? {/* we used (&apos;) instead of (')*/}{" "}
          <Typography
            onClick={() => setState("signUp")}
            className="text-sky-700 hover:underline cursor-pointer inline-block"
            component="span"
          >
            Sign up
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};
