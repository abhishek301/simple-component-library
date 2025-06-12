# 🧩 Simple Library

A modular and flexible **React component library** built with **TypeScript**, **Tailwind CSS**, and **Storybook**. Designed for reuse, customization, and scalability across React projects.

## 📦 Features

- 🧱 **Atomic design pattern** - Atoms, Molecules, Organisms
- 🚀 **TypeScript-first** – Fully typed and developer-friendly
- 🎨 **Tailwind CSS** – Utility-first styling out-of-the-box
- 📚 **Storybook** – Preview and document components interactively
- ⚙️ **Rollup** – Optimized build output with tree-shaking
- 🧪 **Jest + Testing Library** – Unit testing support
- 💅 **ESLint + Prettier** – Code quality enforced

---

## 🔧 Installation

First, install the library (once published to npm):

```bash
npm install @simple-library/react
# or
yarn add @simple-library/react
```

Since this library uses `react` and `react-dom` as `peerDependencies`, you must have them installed in your project:

```bash
npm install react react-dom
```

---

## 🚀 Usage

```tsx
import { Button, Icon } from '@simple-library/react';
import { User } from 'react-feather';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
      <Icon icon={User} size={24} />
    </div>
  );
}
```

> ✅ **Icons are passed as React components** to ensure tree-shaking. You can use any icon library like `react-feather`, `lucide-react`, or `heroicons`.


---

## 🛠 Scripts

| Command              | Description                        |
|----------------------|------------------------------------|
| `npm run build`      | Build the component library        |
| `npm run storybook`  | Start Storybook                    |
| `npm run test`       | Run tests                          |
| `npm run lint`       | Lint the code                      |
| `npm run type-check` | Run TypeScript checks              |

---

## 🧪 Testing

```bash
npm run test
```

---

## 📚 Storybook

Run locally:

```bash
npm run storybook
```

Build static version:

```bash
npm run build-storybook
```

---

## 📂 Project Structure

```
├── src/
│   └── components/                     # Component source code
│   |   ├── atoms/
│   |   |   └── Button 
│   |   |       ├── Button.stories.tsx  # Storybook stories
│   |   |       ├── types.ts            # type definitions
│   |   |       └── index.ts            # Button component
│   |   ├── Molecules/            
│   |   └── Organisms/            
│   └── index.ts                        # Library entry point
├── dist/                               # Compiled output
├── .storybook/                         # Storybook config
├── postcss.config.cjs
├── tailwind.config.js
└── rollup.config.js
```

---

## 📦 Build Output

- CommonJS: `dist/index.js`
- ESModule: `dist/index.esm.js`
- Types: `dist/index.d.ts`

---

## 🧰 Tech Stack

- **React 18+**
- **TypeScript**
- **TailwindCSS**
- **Rollup**
- **Storybook 7**
- **Jest + React Testing Library**
- **Husky + Lint-Staged**

---

## 📄 License

MIT © [Abhishek Choudhary](https://github.com/abhishek301)

---

## ✨ Contributing

PRs, issues, and feedback are welcome!
