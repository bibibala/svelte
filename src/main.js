import App from './App.svelte';
// import "carbon-components-svelte/css/white.css";
import "carbon-components-svelte/css/all.css"
let theme = "g10"; // "white" | "g10" | "g80" | "g90" | "g100"

let app = new App({
	target: document.body
});

export default app;