# Why Zap.ts

## A Single File to Define Your Entire App

`Zap.ts` is the beating heart of a ZapLang project. Unlike traditional full-stack architectures that scatter intent across dozens of files, ZapLang consolidates all logic, structure, and flow into a single, type-safe, declarative file.

Instead of juggling…

| Concern           | Traditional Stack                     | ZapLang (Zap.ts)                   |
| ----------------- | ------------------------------------- | ---------------------------------- |
| DB Schema         | Prisma schema, SQL, Drizzle TS files  | `db` block inside `Zap.ts`         |
| API Routes        | Express, tRPC, Next.js API files      | `api` block inside `Zap.ts`        |
| State Transitions | Redux, Zustand, Finite State Machines | `transitions` block in `Zap.ts`    |
| Access Control    | Middleware, guards, role-checks       | `policies` block in `Zap.ts`       |
| UI Behavior       | React logic, conditional rendering    | Declarative metadata from `Zap.ts` |

With Zap.ts, there is no divergence, no sync issues, and no outdated specs. There is only **one truth**, and that truth is declarative.

---

## Not Just a Config — a DSL with TypeScript Superpowers

Zap.ts is written in TypeScript, but reads like a domain-specific language. It lets you describe what your app _is_, not how it runs.

Instead of imperative plumbing, Zap.ts encourages semantic structure:

```ts
export default defineZap({
  db: {
    tasks: {
      id: "string",
      title: "string",
      status: "enum(draft, submitted, approved)",
    },
  },
  transitions: {
    submitTask: {
      from: "draft",
      to: "submitted",
      guard: "user == record.owner",
    },
  },
});
```

This is not just configuration. This is **application DNA**.

---

## Comparison with Popular Approaches

| Tool                              | Pros                                                | Cons                                                      |
| --------------------------------- | --------------------------------------------------- | --------------------------------------------------------- |
| **Next.js + tRPC + Zod + Prisma** | Flexible, full control                              | Scattered logic, boilerplate explosion, context switching |
| **Rails**                         | Convention, productivity                            | Weak type system, not TS-native                           |
| **Firebase**                      | Fast prototyping                                    | No structure, hard to scale, limited logic control        |
| **Low-code tools**                | Accessible                                          | Black-boxed, hard to customize or version-control         |
| **Zap.ts**                        | Single source, type-safe, declarative, scaffoldable | Requires new mindset — but pays off fast                  |

---

## Developer Experience: From Vision to Product

With Zap.ts, the flow looks like this:

1. **You define the app’s model, transitions, and rules** in a single file
2. **ZapLang generates** your DB schema, API routes, and React UI
3. **You focus on product logic, not integration glue**

No more syncing backend and frontend. No more duplicating state logic. Just **pure intent**, rendered into real software.

---

## Why Zap.ts?

Because applications shouldn’t be 10 folders wide and 100 files deep.

Because developers deserve to **design apps like systems**, not like piles of instructions.

Because the future is not full-stack — it’s **structure-first**.

Welcome to ZapLang. Welcome to Zap.ts.
