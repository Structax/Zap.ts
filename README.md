# Zap.ts

🚀 **CLI tool to start a Zap.ts project in 3 seconds**

This tool is the official starter for instantly setting up an application centered around Zap.ts. It provides a seamless introduction to ZapLang.

---

## 📦 Installation & Initialization

```bash
npx create-zapts-app my-zap-app
cd my-zap-app
npm install
npm run zap generate all
npm run dev
```

Then, access the following in your browser:

```
http://localhost:3000
```

It includes a UI that can automatically navigate to `/applications/1`.

---

## 🔧 Generated Structure

```
my-zap-app/
├── Zap.ts
├── cli/
├── lib/
├── components/
├── pages/
│   ├── index.tsx
│   └── applications/[id].tsx
├── drizzle/schema/
├── .drizzle.config.ts
├── tsconfig.json
├── package.json
```

---

## 💡 What is Zap.ts?

Zap.ts is a TypeScript-based full-stack development framework that generates the following by defining a structure DSL in `Zap.ts`:

- ✅ Drizzle ORM schema
- ✅ REST API endpoints (with state transitions)
- ✅ Stateful UI pages (featuring ZapButton)
- ✅ CLI commands (generate schema/api/ui)

---

## 🧪 Try It Out

```bash
npm run dev
```

- Modify `Zap.ts` and re-run `npx zap generate all` to see instant updates

---

## 🛠 For Developers

- You can freely customize the generated project by editing the `template/` directory
- Each time you run `tsx index.ts <project-name>`, the contents of `template/` are copied

---

## 📤 Publishing & Distribution

This CLI can be published to GitHub/npm:

```json
"bin": {
    "create-zap-app": "index.ts"
},
"type": "module"
```

By simply running `npm publish`, you can make `npx create-zap-app` available.

---

## License

MIT

---

## Author

## Author: ZapBuilder (My-GPT — trained on the vision of a thousand-year genius 👑)

## Learn More

- [🧠 ZapLang Philosophy](./docs/philosophy.md)
- [📘 Full Documentation](https://your-zap-docs.com)
- [🎬 Demo Video](https://your-demo-video.com)
