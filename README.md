# React Single Page Application (SPA) Template for Microsoft Power Pages

## Overview

This template is designed to streamline the development of React-based SPAs for Microsoft Power Pages. It integrates modern tools and libraries to provide a robust development experience, enabling developers to build scalable, type-safe, and performant applications.

### Key Technologies

- **React**: A declarative JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast development server and build tool.
- **TanStack Router**: A type-safe, declarative routing library.
- **TanStack Query**: A powerful library for managing server state and caching.
- **PrimeReact**: A rich set of UI components for rapid development.
- **Zod**: A schema validation library for defining and validating data structures.
- **ESLint**: A tool for enforcing code quality and consistency.

---

## Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

---

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-repo/powerpages-react-spa.git
cd powerpages-react-spa
```

### Step 2: Install Dependencies

```bash
pnpm install
```

### Step 3: Start the Development Server

```bash
pnpm dev
```

### Step 4: Build the Application for Production

```bash
pnpm build
```

### Step 5: Preview the Production Build

```bash
pnpm preview
```

---

## Core Concepts and Usage

### React + TypeScript

React is used for building user interfaces, while TypeScript adds type safety to the codebase. Use TypeScript interfaces and types to define props, state, and API responses. Example:

```typescript
interface UserProps {
  id: number;
  name: string;
}

const UserComponent: React.FC<UserProps> = ({ id, name }) => <div>{name}</div>;
```

---

### Vite

Vite provides a fast development server with hot module replacement (HMR) for rapid iteration. Customize the configuration in `vite.config.ts`:

```typescript
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@components": "/src/components",
    },
  },
});
```

---

### TanStack Router

TanStack Router enables declarative routing with type safety. Define routes in `src/routes`:

```typescript
// src/routes/example.ts
import { createRoute } from "@tanstack/react-router";

export const exampleRoute = createRoute({
  path: "/example",
  component: ExampleComponent,
});
```

---

### TanStack Query

TanStack Query simplifies server state management and caching. Use `useQuery` for data fetching:

```typescript
import { useQuery } from "@tanstack/react-query";

const { data, isLoading } = useQuery(["fetchData"], fetchDataFunction);
```

---

### PrimeReact

PrimeReact provides pre-built UI components. Example usage:

```typescript
import { Button } from "primereact/button";

<Button label="Click Me" onClick={handleClick} />;
```

---

### Zod

Zod is used for schema validation. Example:

```typescript
import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
});
```

---

### ESLint

ESLint enforces code quality and consistency. Run linting with:

```bash
pnpm lint
```

---

## Advanced Usage

### Adding Global Providers

Modify `src/main.tsx` to include global providers:

```typescript
// src/main.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

---

### Extending API Utilities

Add custom API utilities in `src/lib/api`:

```typescript
// src/lib/api/customApi.ts
export const fetchCustomData = async () => {
  const response = await fetch("/api/custom-endpoint");
  return response.json();
};
```

---

## Troubleshooting

### Common Issues

#### Dependency Errors

Ensure `pnpm` is installed globally:

```bash
npm install -g pnpm
```

#### Port Conflicts

Change the default port in `vite.config.ts`:

```typescript
server: {
  port: 3001,
},
```

#### Missing Environment Variables

Create a `.env` file and define required variables:

```env
VITE_API_URL=https://api.example.com
```

---

## Customization

- Update `vite.config.ts` for aliases or build settings.
- Modify `src/main.tsx` to add global providers or middleware.
- Extend `src/lib` for additional utilities or API integrations.

---

## License

This template is closed-source and proprietary.
