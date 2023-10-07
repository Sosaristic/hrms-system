import { ReactNode } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

type LayoutProp = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
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
