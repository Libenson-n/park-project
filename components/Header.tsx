import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b-2 border-black/[0.2] bg-orange-400 px-5">
      <Image src="/images/logo.jpg" width={60} height={60} alt="logo" />
      <div className="flex gap-3">
        <Button className="bg-violet-600 hover:bg-violet-800">
          Create Post
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-800">Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
