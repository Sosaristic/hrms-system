import { ReactNode } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jwt-decode";

type LayoutProp = {
  children: ReactNode;
};

interface AccessTokenProps {
  userId: string;
  role: string;
  iat: Date;
  exp: Date;
}

export default function Layout({ children }: LayoutProp) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  if (accessToken) {
    try {
      const decodedToken: AccessTokenProps = jwt(accessToken);
      if (decodedToken && decodedToken.role === "ADMIN") {
        console.log("user allowed");
      } else {
        redirect("/login");
      }
    } catch (error) {
      // Handle invalid JWT token
      redirect("/login");
    }
  } else {
    // Handle missing access token
    redirect("/login");
  }

  return (
    <main className="flex max-h-screen min-h-screen">
      <SideBar screen="desktop" />
      <section className="w-full flex-1 md:w-8/12">
        <TopBar />
        {children}
      </section>
    </main>
  );
}
