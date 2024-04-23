import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignUpForm from "./sign-upForm";
import { Button } from "../../../components/ui/button";

export default function SignUp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>SignUp</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          <SignUpForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
