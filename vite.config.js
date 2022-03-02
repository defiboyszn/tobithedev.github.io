import { defineConfig } from 'vite'
import MDvite from 'vite-plugin-markdown'


export default defineConfig({
  plugins: [
    MDvite({
      mode: ["html"],
    }),
  ]
});