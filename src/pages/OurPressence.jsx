import { useEffect } from "react";
import "../css/Home.css";

export default function OurPresence() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section reveal-left">
      OurPresence
    </div>
  );
}