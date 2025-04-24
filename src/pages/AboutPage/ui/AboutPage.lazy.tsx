import { lazy } from 'react';

export const AboutPageLazy = lazy(() => new Promise(resolve => setTimeout(resolve, 500)).then(() => import('./AboutPage')));