import { useEffect, useRef } from "react";

const CITIES = [
  { name: "Dubai", rx: 0.42, ry: 0.62, main: true },
  { name: "Abu Dhabi", rx: 0.28, ry: 0.78, main: true },
  { name: "Sharjah", rx: 0.6, ry: 0.44, main: false },
  { name: "Ajman", rx: 0.55, ry: 0.36, main: false },
  { name: "Umm Al Quwain", rx: 0.72, ry: 0.28, main: false },
  { name: "Ras Al Khaimah", rx: 0.82, ry: 0.18, main: false },
  { name: "Fujairah", rx: 0.88, ry: 0.5, main: false },
];

const CONNECTIONS = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
];

const BG = "#000000";

// Mobile-friendly city positions — compressed into centre so nothing clips
const CITIES_MOBILE = [
  { name: "Dubai", rx: 0.35, ry: 0.6, main: true },
  { name: "Abu Dhabi", rx: 0.2, ry: 0.75, main: true },
  { name: "Sharjah", rx: 0.55, ry: 0.45, main: false },
  { name: "Ajman", rx: 0.48, ry: 0.35, main: false },
  { name: "Umm Al Quwain", rx: 0.65, ry: 0.26, main: false },
  { name: "Ras Al Khaimah", rx: 0.75, ry: 0.16, main: false },
  { name: "Fujairah", rx: 0.82, ry: 0.48, main: false },
];

export default function UAENetworkMap() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.35 + 0.05,
      speed: Math.random() * 0.00015 + 0.00004,
      dir: Math.random() * Math.PI * 2,
    }));

    const beams = CONNECTIONS.map(([a, b]) => ({
      a,
      b,
      t: Math.random(),
      speed: 0.0018 + Math.random() * 0.003,
    }));

    function resize() {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    // Switch city coords based on canvas aspect ratio
    function cities() {
      return W() / H() < 1.1 ? CITIES_MOBILE : CITIES;
    }

    const cx = (c) => c.rx * W();
    const cy = (c) => c.ry * H();

    function arcMid(a, b) {
      const C = cities();
      const x1 = cx(C[a]),
        y1 = cy(C[a]);
      const x2 = cx(C[b]),
        y2 = cy(C[b]);
      return {
        x1,
        y1,
        x2,
        y2,
        mx: (x1 + x2) / 2,
        my: (y1 + y2) / 2 - Math.hypot(x2 - x1, y2 - y1) * 0.35,
      };
    }

    function pointOnCurve(t, x1, y1, mx, my, x2, y2) {
      const it = 1 - t;
      return {
        x: it * it * x1 + 2 * it * t * mx + t * t * x2,
        y: it * it * y1 + 2 * it * t * my + t * t * y2,
      };
    }

    function draw() {
      const w = W(),
        h = H();
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);

      // particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,40,40,${p.a})`;
        ctx.fill();
        p.x += Math.cos(p.dir) * p.speed;
        p.y += Math.sin(p.dir) * p.speed;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
      });

      // static arcs
      CONNECTIONS.forEach(([a, b]) => {
        const { x1, y1, mx, my, x2, y2 } = arcMid(a, b);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(mx, my, x2, y2);
        ctx.strokeStyle = "rgba(180,30,30,0.2)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // animated beams
      beams.forEach((beam) => {
        const { x1, y1, mx, my, x2, y2 } = arcMid(beam.a, beam.b);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(mx, my, x2, y2);
        ctx.strokeStyle = "rgba(220,60,60,0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const p = pointOnCurve(beam.t, x1, y1, mx, my, x2, y2);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12);
        grad.addColorStop(0, "rgba(255,180,180,0.9)");
        grad.addColorStop(0.4, "rgba(220,60,60,0.5)");
        grad.addColorStop(1, "rgba(200,40,40,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,220,220,0.95)";
        ctx.fill();

        beam.t += beam.speed;
        if (beam.t > 1) beam.t = 0;
      });

      // city nodes
      const C = cities();
      // Responsive font & dot size
      const isMobile = w < 480;
      const isTablet = w < 768;

      C.forEach((city) => {
        const x = cx(city),
          y = cy(city);
        const r = city.main
          ? isMobile
            ? 6
            : isTablet
              ? 7
              : 8
          : isMobile
            ? 3
            : isTablet
              ? 4
              : 5;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, r * 6);
        glow.addColorStop(
          0,
          city.main ? "rgba(255,80,80,0.55)" : "rgba(220,60,60,0.35)",
        );
        glow.addColorStop(1, "rgba(200,40,40,0)");
        ctx.beginPath();
        ctx.arc(x, y, r * 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = city.main ? "#ff6060" : "#cc3030";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, r + 3, 0, Math.PI * 2);
        ctx.strokeStyle = city.main
          ? "rgba(255,100,100,0.5)"
          : "rgba(200,60,60,0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Responsive label font
        const fontSize = city.main
          ? isMobile
            ? 11
            : isTablet
              ? 12
              : 14
          : isMobile
            ? 9
            : isTablet
              ? 10
              : 12;
        const fontWeight = city.main ? "600" : "400";
        ctx.font = `${fontWeight} ${fontSize}px sans-serif`;
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.textAlign = "center";

        // On mobile, shift labels that would clip off the right edge
        const labelX = Math.min(x, w - 50);
        ctx.fillText(city.name, labelX, y - r - 6);
      });

      // Edge fades
      const ft = ctx.createLinearGradient(0, 0, 0, h * 0.22);
      ft.addColorStop(0, BG);
      ft.addColorStop(1, BG + "00");
      ctx.fillStyle = ft;
      ctx.fillRect(0, 0, w, h * 0.22);

      const fb = ctx.createLinearGradient(0, h * 0.78, 0, h);
      fb.addColorStop(0, BG + "00");
      fb.addColorStop(1, BG);
      ctx.fillStyle = fb;
      ctx.fillRect(0, h * 0.78, w, h * 0.22);

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 320,
        overflow: "hidden",
        background: BG,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
