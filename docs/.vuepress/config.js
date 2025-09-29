import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  base: "/static-site-web-app-assignment/",
  title: "VuePress",
  description: "My first VuePress Site",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: [
      { text: "Home", link: "/" },
      { text: "Technologies I've Worked With", link: "/techs/" },
      { text: "About Me", link: "/about/" },
      { text: "Projects", link: "/projects/" },
    ],
  }),

  bundler: viteBundler(),
});
