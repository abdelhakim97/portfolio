import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ الصعود لأعلى الصفحة فوراً عند تغيير الـ route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // أو "smooth" إذا أردت أنيميشن
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;