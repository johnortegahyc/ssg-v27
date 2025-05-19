import { dirname, isAbsolute, parse, resolve, join } from "node:path";

const config = {
  build: {
    outDir: "dist",
  },
};
const route = "/about";

const cwd = process.cwd();
const root = config.root || cwd;
const outDir = config.build.outDir || "dist";
console.log("root", root); // root是项目目录

console.log("\r");

const out26 = isAbsolute(outDir) ? outDir : join(root, outDir); // v26 line 41
console.log("v26 out", out26);
const filename26 = join(route.replace(/^\//g, ""), "index.html"); // v26 line 208
console.log("v26 filename", filename26);
console.log("v26 dirname", dirname(filename26)); // v26 line 211
console.log("v26 mikdir", join(out26, dirname(filename26))); // v26 line 211

console.log("\r");

const out27 = isAbsolute(outDir) ? outDir : resolve(root, outDir); // v27 line 41
console.log("v27 out", out27);
const filename27 = resolve(route.replace(/^\//g, ""), "index.html"); // v27 line 200
console.log("v27 filename", filename27);
console.log("v27 dirname", dirname(filename27)); // v27 line 203
console.log("v27 mikdir", resolve(out27, dirname(filename27))); // v27 line 203
