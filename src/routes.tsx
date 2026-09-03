import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import Root from './components/Root';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudyPage from './pages/CaseStudyPage';

const AasaraCaseStudy = lazy(() => import('./pages/case-studies/AasaraCaseStudy'));
const AbraajCaseStudy = lazy(() => import('./pages/case-studies/AbraajCaseStudy'));
const AstenmedsCaseStudy = lazy(() => import('./pages/case-studies/AstenmedsCaseStudy'));
const MobilePosCaseStudy = lazy(() => import('./pages/case-studies/MobilePosCaseStudy'));
const ArmadaCashCaseStudy = lazy(() => import('./pages/case-studies/ArmadaCashCaseStudy'));

function CaseStudyLoader({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '14px', color: 'rgba(17,15,13,0.45)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Loading…</p>
      </div>
    }>
      {children}
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      {
        path: 'case-study/armada-cash',
        element: <CaseStudyLoader><ArmadaCashCaseStudy /></CaseStudyLoader>,
      },
      {
        path: 'case-study/aasara',
        element: <CaseStudyLoader><AasaraCaseStudy /></CaseStudyLoader>,
      },
      {
        path: 'case-study/abraaj',
        element: <CaseStudyLoader><AbraajCaseStudy /></CaseStudyLoader>,
      },
      {
        path: 'case-study/astenmeds',
        element: <CaseStudyLoader><AstenmedsCaseStudy /></CaseStudyLoader>,
      },
      {
        path: 'case-study/mobile-pos',
        element: <CaseStudyLoader><MobilePosCaseStudy /></CaseStudyLoader>,
      },
      { path: 'case-study/:slug', Component: CaseStudyPage },
    ],
  },
]);
