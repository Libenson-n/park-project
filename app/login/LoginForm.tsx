"use client";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth/";
import { auth } from "@/firebase/firebase";
import CardWrapper from "@/components/CardWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/app/schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      const res = await signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
    // router.push("/");
  };

  return (
    <CardWrapper
      label={"Log in to your account"}
      title={"Log In"}
      backButtonHref={"/register"}
      backButtonLabel={"Don't have an account yet? Register here."}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="janedoe@email.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-600"
          >
            Log In
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
