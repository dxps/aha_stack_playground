// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Tell Astro that we have some dynamic state on the server (it's not all static).
    output: "server"
});
