import preprocess from "svelte-preprocess";
import * as nSass from "postcss-scss" 
const config = {
  preprocess: [
    preprocess({
      postcss: {
        parser: nSass,
        syntax: "postcss-scss"
      },
      scss: true,

    }),
  ],
};

export default config;
