import { ReactNode } from "react";
import SideBar from "./SideBar";
type LayoutProp = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
  return (
    <main className="flex max-h-screen min-h-screen">
      <SideBar />
      <section className="w-10/12">{children}</section>
    </main>
  );
}
