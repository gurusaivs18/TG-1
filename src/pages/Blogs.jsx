import { useEffect } from "react";
import "../css/Home.css";

export default function Blogs() {
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
      <h1>Blogs...........</h1>
      <h1>all the contents in blogs will appear here</h1>
    </div>
  );
}