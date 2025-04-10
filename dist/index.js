"use strict";
// zap-cli/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const projectName = process.argv[2] || "my-zap-app";
const templateDir = path_1.default.resolve(__dirname, "template");
const targetDir = path_1.default.resolve(process.cwd(), projectName);
console.log(`[zap] 🛠 Creating new ZapLang app: ${projectName}\n`);
fs_extra_1.default.copySync(templateDir, targetDir);
console.log(`[zap] ✅ Copied template files to ./${projectName}`);
process.chdir(targetDir);
console.log("[zap] 📦 Installing dependencies...");
(0, child_process_1.execSync)("npm install", { stdio: "inherit" });
console.log("\n[zap] 🚀 Ready!");
console.log(`\nNext steps:`);
console.log(`  cd ${projectName}`);
console.log(`  npm zap generate all`);
console.log(`  npm run dev`);
