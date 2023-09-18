import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: {
//       key: "/Users/seop/localhost-key.pem",
//       cert: "/Users/seop/localhost.pem",
//     },
//   },
// });
