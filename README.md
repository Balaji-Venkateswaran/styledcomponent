# 💅 Styled Components

**Styled Components** is a popular library for styling React and Next.js applications using **CSS-in-JS**.  
It lets you write actual CSS code inside your JavaScript or TypeScript files, keeping your styles scoped, modular, and dynamic.

---

## ✨ Why use Styled Components

✅ **Scoped CSS** — no class name collisions  
✅ **Dynamic styling** using props  
✅ **Supports themes** (light/dark modes made easy)  
✅ **No separate CSS files** — styles live with components  
✅ **Great for React & Next.js** with SSR (Server-Side Rendering) support  
✅ **Reusable & clean codebase**

---



## 🧩 Key Topics & Definitions

| # | 🧠 Topic | 📘 Definition / Explanation |
|---|-----------|-----------------------------|
| **1** | **What is Styled-Components?** | A CSS-in-JS library for React that lets you write actual CSS inside JavaScript files. It creates isolated, scoped CSS for each component automatically. |
| **2** | **Tagged Template Literals** | The back-tick syntax (``styled.div`...``) that allows writing multiline CSS inside JS using ES6 template literals. |
| **3** | **Basic Usage** | You create a styled component using `styled.elementName` (e.g. `styled.button`) and use it like a React component. |
| **4** | **Props-Based Styling** | You can use component props to dynamically change styles — e.g. `background: ${({primary}) => primary ? 'blue' : 'gray'}` |
| **5** | **Nesting** | You can nest selectors inside a styled component similar to SCSS.<br>`div { span { color: red; } }` |
| **6** | **Pseudo-Selectors** | CSS pseudo-classes like `:hover`, `:focus`, `:active`, `:first-child`, etc. can be written directly inside styled-components. |
| **7** | **Extending Styles** | You can base a new styled component on an existing one to reuse styles.<br>`const NewButton = styled(OldButton)` |
| **8** | **Styling Any Component** | Styled-Components can wrap custom React components or built-in HTML elements — it passes a `className` automatically. |
| **9** | **Theming with ThemeProvider** | Provides a central theme object (colors, spacing, fonts) accessible to all components via `props.theme`. Enables light/dark mode. |
| **10** | **Global Styles** | Used to apply CSS rules globally (like resets or body styles) using `createGlobalStyle` from styled-components. |
| **11** | **Animations** | You can define CSS animations using `keyframes` and apply them via the `animation` property. |
| **12** | **Mixins & Helper Functions** | Reusable CSS snippets (functions returning CSS) that can be imported and reused across components. |
| **13** | **Responsive Design** | You can write media queries directly inside styled components — e.g. `@media (max-width: 768px) { ... }`. |
| **14** | **Advanced Patterns** | Combining multiple techniques like props, mixins, polymorphism, and media queries for reusable, theme-aware components. |
| **15** | **Polymorphic `as` Prop** | Lets you render the same styled component as a different HTML tag — e.g. `<Button as="a" href="/">Link</Button>`. |
| **16** | **Attribute Helper `.attrs()`** | Adds static or dynamic attributes to a styled component — e.g. `styled.input.attrs({ type: 'text' })`. |
| **17** | **Composition** | Building complex UIs by combining smaller styled components instead of long CSS files. |
| **18** | **Scoped CSS** | Styles are automatically scoped — they won’t leak to other components because class names are uniquely hashed. |
| **19** | **Server-Side Rendering (SSR)** | Styled-Components works seamlessly with Next.js to extract CSS on the server, preventing style flicker during load. |
| **20** | **CSS Variables & Props** | You can pass custom CSS variables or computed props to styled components for advanced theming or transitions. |

---

## ⚙️ Installation

```bash
npm install styled-components
npm install --save-dev @types/styled-components


```


