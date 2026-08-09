// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // The Otava preview runner proxies this dev server from another origin, so it
  // has to bind all interfaces and must not reject the proxy's Host header.
  // Vite blocks unknown hosts by default, and from the runner's side that looks
  // exactly like a site that failed to boot — allowedHosts is not optional here.
  server: { host: true },
  vite: {
    server: { allowedHosts: true },
  },
});
