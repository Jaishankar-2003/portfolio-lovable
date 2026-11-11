import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-provider-BN-bmhdG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeCtx = (0, import_react.createContext)({
	theme: "dark",
	toggle: () => {}
});
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.classList.toggle("dark", theme === "dark");
	const meta = document.querySelector("meta[name=\"color-scheme\"]");
	if (meta) meta.setAttribute("content", theme);
}
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		try {
			const stored = localStorage.getItem("sjs_theme_palette");
			const initial = stored === "light" || stored === "dark" ? stored : "light";
			setTheme(initial);
			applyTheme(initial);
		} catch {
			applyTheme("light");
		}
		const onStorage = (e) => {
			if (e.key === "sjs_theme_palette" && (e.newValue === "light" || e.newValue === "dark")) {
				setTheme(e.newValue);
				applyTheme(e.newValue);
			}
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, []);
	const toggle = () => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			applyTheme(next);
			try {
				localStorage.setItem("sjs_theme_palette", next);
			} catch {}
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeCtx);
//#endregion
export { useTheme as n, ThemeProvider as t };
