import { Outlet, ScrollRestoration } from 'react-router';
import Nav from './Nav';

export default function Root() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100%' }}>
      <ScrollRestoration />
      <Nav />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Outlet />
      </main>
    </div>
  );
}
