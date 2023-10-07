"use client";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/admin/dashboard");
  }, [router]);
}
