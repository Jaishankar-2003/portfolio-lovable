import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-provider-CqHKImdn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeCtx = (0, import_react.createContext)({
	theme: "dark",
	toggle: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const initial = (typeof window !== "undefined" && localStorage.getItem("theme")) ?? "dark";
		setTheme(initial);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.style.colorScheme = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: {
			theme,
			toggle: () => setTheme((t) => t === "dark" ? "light" : "dark")
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeCtx);
//#endregion
export { useTheme as n, ThemeProvider as t };
