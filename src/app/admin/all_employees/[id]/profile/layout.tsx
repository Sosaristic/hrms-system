import TopBar from "./TopBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <TopBar />
      {children}
    </section>
  );
}
