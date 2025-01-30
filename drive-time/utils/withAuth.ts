"use client";

import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

// Define the type correctly
const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
      const checkAuth = async () => {
        const { data: userSession } = await supabase.auth.getUser();
        if (!userSession?.user) {
          router.push("/");
        } else {
          setUser(userSession.user);
        }
        setLoading(false);
      };

      checkAuth();
    }, [router]);



  };
};

export default withAuth;
