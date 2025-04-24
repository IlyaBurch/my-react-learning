import { resolve } from 'path';
import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise(resolve => setTimeout(resolve, 500)).then(() => import('./MainPage')));
