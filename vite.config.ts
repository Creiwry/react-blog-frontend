import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'
import('vite-plugin-pwa')

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["AppImages/windows11/SmallTile.scale-125.png"],
  manifest: 
  {
    "name": "Hello World",
    "short_name": "Hello",
    "icons": [
      {
        "src": "AppImages/windows11/SmallTile.scale-100.png",
        "sizes": "71x71"
      },
      {
        "src": "AppImages/windows11/SmallTile.scale-125.png",
        "sizes": "89x89"
      },
      {
        "src": "AppImages/windows11/SmallTile.scale-150.png",
        "sizes": "107x107"
      },
      {
        "src": "AppImages/windows11/SmallTile.scale-200.png",
        "sizes": "142x142"
      },
      {
        "src": "AppImages/windows11/SmallTile.scale-400.png",
        "sizes": "284x284"
      },
      {
        "src": "AppImages/windows11/Square150x150Logo.scale-100.png",
        "sizes": "150x150"
      },
    ],
    "lang": "en",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "white",
    "theme_color": "white"
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})
