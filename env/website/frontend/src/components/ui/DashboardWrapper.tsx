"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function DashboardWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [validUser, setValidUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      const token = Cookies.get("access");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/api/user/", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          setValidUser(true);
        } else {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [router]);

  if (loading) return <p className="text-center mt-20">Checking authentication...</p>;

  if (!validUser) return null; // Redirect in progress

  return <>{children}</>;
}
