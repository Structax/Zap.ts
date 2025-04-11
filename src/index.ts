// zap-cli/index.ts

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";

const projectName = process.argv[2] || "my-zap-app";
const templateDir = path.resolve(__dirname, "template");
const targetDir = path.resolve(process.cwd(), projectName);

console.log(`[zap] 🛠 Creating new ZapLang app: ${projectName}\n`);

fs.copySync(templateDir, targetDir);
console.log(`[zap] ✅ Copied template files to ./${projectName}`);

process.chdir(targetDir);
console.log("[zap] 📦 Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("\n[zap] 🚀 Ready!");
console.log(`\nNext steps:`);
console.log(`  cd ${projectName}`);
console.log(`  npm zap generate all`);
console.log(`  npm run dev`);
