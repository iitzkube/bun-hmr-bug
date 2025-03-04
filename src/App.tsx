import { useState } from 'react';
import './index.css';

export function App() {
  const [result, setResult] = useState<any>({});
  async function onClick() {
    const res = await fetch('/api/data/test', { method: 'POST' });
    const data = await res.json();
    setResult(data);
  }
  return (
    <div className="mx-auto p-8 text-center relative z-10 flex flex-col">
      <button onClick={onClick}>Update SQLite Database</button>
      <br />
      <i>Updating the database file triggeres a CSS bundle reload.</i>
      <i>See the dev server stdout and the HMR WebSocket messages</i>
      <br />
      <pre>{JSON.stringify(result)}</pre>
    </div>
  );
}

export default App;
