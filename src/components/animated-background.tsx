import { Cloud, Container, Server, Boxes } from "lucide-react";

// Subtle animated background: gradient blobs + floating cloud/docker/k8s glyphs + grid
export function AnimatedBackground() {
  const glyphs = [
    { Icon: Cloud, x: "8%", y: "18%", delay: "0s", size: 44 },
    { Icon: Container, x: "78%", y: "22%", delay: "1.5s", size: 40 },
    { Icon: Boxes, x: "18%", y: "68%", delay: "3s", size: 46 },
    { Icon: Server, x: "72%", y: "72%", delay: "4.2s", size: 42 },
    { Icon: Cloud, x: "50%", y: "10%", delay: "2s", size: 32 },
    { Icon: Container, x: "45%", y: "80%", delay: "5s", size: 34 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 h-[460px] w-[460px] rounded-full bg-secondary/25 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-12s]" />
      {glyphs.map((g, i) => (
        <g.Icon
          key={i}
          className="absolute text-foreground/10 animate-float-slow"
          style={{ left: g.x, top: g.y, width: g.size, height: g.size, animationDelay: g.delay }}
        />
      ))}
    </div>
  );
}
