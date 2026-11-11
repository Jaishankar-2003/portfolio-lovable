import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/theme-provider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="engineering-card max-w-md rounded-2xl p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Error 404
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="engineering-card max-w-md rounded-2xl p-8 text-center">
        <h1 className="font-display text-xl font-semibold">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something unexpected occurred. Try refreshing or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="min-h-11 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center rounded-xl border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const THEME_INIT = `
(function(){try{var t=localStorage.getItem('sjs_theme_palette');var d=t?t==='dark':false;var e=document.documentElement;if(d){e.classList.add('dark');}else{e.classList.remove('dark');}var m=document.querySelector('meta[name="color-scheme"]');if(m)m.setAttribute('content',d?'dark':'light');}catch(e){document.documentElement.classList.remove('dark');}})();
`;

const SEO_TITLE =
  "Sri Jaya Shankaran R — Junior DevOps & Cloud Engineer | AWS SAA | Hardware & IT Systems";
const SEO_DESC =
  "Portfolio of Sri Jaya Shankaran R — Junior DevOps / Cloud Engineer, AWS Certified Solutions Architect, and certified laptop chip-level diagnostics technician with 1+ year of SDET automation experience.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "color-scheme", content: "light dark" },
        { title: SEO_TITLE },
        { name: "description", content: SEO_DESC },
        { name: "author", content: "Sri Jaya Shankaran R" },
        { name: "theme-color", content: "#F8FAFC" },
        { property: "og:title", content: SEO_TITLE },
        { property: "og:description", content: SEO_DESC },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://jaishankar.vercel.app/" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SEO_TITLE },
        { name: "twitter:description", content: SEO_DESC },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
        },
      ],
      scripts: [{ children: THEME_INIT }],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <Outlet />
        </MotionConfig>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
