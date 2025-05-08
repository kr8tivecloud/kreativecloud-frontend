import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

type NavigationType = "push" | "replace";

const useNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    if (isNavigatingRef.current) {
      NProgress.done();
      isNavigatingRef.current = false;
    }
  }, [pathname]);

  const navigate = useCallback(
    (url: string, type: NavigationType = "push") => {
      if (!isNavigatingRef.current) {
        isNavigatingRef.current = true;
        NProgress.start();
      }

      if (type === "replace") {
        router.replace(url);
      } else {
        router.push(url);
      }
    },
    [router]
  );

  return navigate;
};

export default useNavigate;
