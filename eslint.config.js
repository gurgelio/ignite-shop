import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import reactCompiler from "eslint-plugin-react-compiler";
import path from "node:path";
import { fileURLToPath } from "node:url";

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const array = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "react-compiler": reactCompiler,
    },
  },
];

export default array;
