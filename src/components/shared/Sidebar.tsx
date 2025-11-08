// components/Sidebar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, PlusCircle, LogOut, LogIn } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session, status } = useSession();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-black text-white">
      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Home className="h-4 w-4" /> Home
        </Link>
        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" /> Create Blog
        </Link>
      </nav>

      <div className="p-4 border-t border-gray-500 space-y-4">
        {status === "authenticated" && session?.user ? (
          <>
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                {session.user.image ? (
                  <AvatarImage
                    src={session.user.image}
                    alt={session.user.name || ""}
                  />
                ) : (
                  <AvatarFallback>
                    {session.user.name?.[0] || "U"}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <div className="text-sm font-semibold">{session.user.name}</div>
                {session.user.email && (
                  <div className="text-xs text-gray-300">
                    {session.user.email}
                  </div>
                )}
              </div>
            </div>
            <Button
              variant="destructive"
              className="w-full justify-start gap-2"
              onClick={() => signOut()}
            >
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </>
        ) : (
          <Button
            variant="default"
            className="w-full justify-start gap-2"
            onClick={() => signIn()}
          >
            <LogIn className="h-4 w-4" /> Login
          </Button>
        )}
      </div>
    </aside>
  );
}
