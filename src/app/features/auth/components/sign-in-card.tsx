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
  
  interface SignInCardProps {
    setState: (state: SignInFlow) => void;
  }
  
  export const SignInCard = ({setState} :SignInCardProps) => {
    return (
      <Card className="w-full h-full p-8 text-xl font-bold">
        <CardHeader title="Login to continue" className="px-0 pt-0" />
        <CardContent className="space-y-5">
          <Typography>Use your email or another service to continue</Typography>
          <form className="space-y-2.5">
            <OutlinedInput
              disabled={false}
              value=""
              onChange={() => {}}
              placeholder="Email"
              type="email"
              required
              fullWidth
            />
            <OutlinedInput
              disabled={false}
              value=""
              onChange={() => {}}
              placeholder="password"
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
          <Typography className="text-s text-muted-foreground inline-block" component="span">
            Don&apos;t have an account? {/* we used (&apos;) instead of (')*/}{" "}
            <Typography onClick={()=>setState("signUp")} className="text-sky-700 hover:underline cursor-pointer inline-block" component="span">
              Sign up
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    );
  };
  