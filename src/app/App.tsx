import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, NotFounPage, ProfilePage } from '@/pages';

import { Layout } from './components/Layout/Layout';
import { ROUTES } from './configs/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={ROUTES.PROFILE} element={<Layout />}>
          <Route index element={<ProfilePage />} />
        </Route>
        <Route path={ROUTES.NOTFOUND} element={<NotFounPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
