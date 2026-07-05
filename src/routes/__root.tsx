import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/theme-provider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass max-w-md rounded-3xl p-10 text-center">
        <h1 className="font-display text-7xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl gradient-bg px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_-6px_var(--primary)]"
        >
          Go home
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
      <div className="glass max-w-md rounded-3xl p-10 text-center">
        <h1 className="font-display text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-xl gradient-bg px-4 py-2 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-xl border border-border px-4 py-2 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

const THEME_INIT = `
(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;var e=document.documentElement;if(d)e.classList.add('dark');e.style.colorScheme=d?'dark':'light';}catch(e){document.documentElement.classList.add('dark');}})();
`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sri Jaya Shankaran R — QA Automation & Cloud Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sri Jaya Shankaran R — QA Automation Engineer, AWS Certified Solutions Architect, and DevOps enthusiast building reliable, scalable software systems.",
      },
      { name: "author", content: "Sri Jaya Shankaran R" },
      { name: "theme-color", content: "#0B0F19" },
      { property: "og:title", content: "Sri Jaya Shankaran R — QA Automation & Cloud Engineer" },
      { property: "og:description", content: "Portfolio of Sri Jaya Shankaran R — QA Automation Engineer, AWS Certified Solutions Architect, and DevOps enthusiast building reliable, scalable software systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sri Jaya Shankaran R — QA Automation & Cloud Engineer" },
      { name: "twitter:description", content: "Portfolio of Sri Jaya Shankaran R — QA Automation Engineer, AWS Certified Solutions Architect, and DevOps enthusiast building reliable, scalable software systems." },
      { name: "description", content: "Portfolio of Sri Jaya Shankaran R — QA Automation Engineer, AWS Certified Solutions Architect, and DevOps enthusiast building reliable, scalable software systems." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d79af352-5d55-4664-b2b9-6f3500001835/id-preview-4c4b1abb--afad1217-6e69-4caf-b95c-c84e822f9272.lovable.app-1783259455228.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d79af352-5d55-4664-b2b9-6f3500001835/id-preview-4c4b1abb--afad1217-6e69-4caf-b95c-c84e822f9272.lovable.app-1783259455228.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [{ children: THEME_INIT }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
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
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
