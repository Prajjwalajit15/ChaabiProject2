// src/routes/index.tsx (or root.tsx)
import { json, LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  // Fetch any data you need here (for now, just return a placeholder)
  return json({ message: 'Hello, world!' });
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Root Page</h1>
    </div>
  );
}
