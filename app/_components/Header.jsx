"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Authentication from "./Authentication";
import { AuthContext } from "../_context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div>
          {/* Fixed Image component with both width and height */}
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
        </div>
        <h2 className="text-2xl font-bold">Clip Craft</h2>
      </div>
      <div>
        {!user ? (
          <Authentication>
            <Button>Get Started</Button>
          </Authentication>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/dashboard"> 
              <Button>Dashboard</Button>
            </Link>
            {user?.photoURL && (
              <Image
                src={user.photoURL}
                alt="userImage"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;