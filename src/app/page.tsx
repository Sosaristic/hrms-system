import { redirect } from "next/navigation";

export default function Home() {
  redirect("/admin");
  return (
    <div className="min-h-screen w-5 px-2 py-4 text-xl font-bold text-orange-500 antialiased">
      This is the home page
    </div>
  );
}
