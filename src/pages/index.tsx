import React from 'react';
import { Route, Routes as BaseRoutes } from 'react-router-dom';

import { routes } from '@routes';

const Pages = () => (
  <BaseRoutes>
    <Route path={routes.Home.path} element={routes.Home.component} />
    <Route path={routes.Chat.path} element={routes.Chat.component} />
    <Route path={routes.Login.path} element={routes.Login.component} />
    <Route path={routes.Profile.path} element={routes.Profile.component} />
    <Route path={routes.Calendar.path} element={routes.Calendar.component} />
    <Route path={routes.Register.path} element={routes.Register.component} />
    <Route path={routes.Settings.path} element={routes.Settings.component} />
    <Route path={routes.PasswordReset.path} element={routes.PasswordReset.component} />
    <Route path={routes.ReservationsPreview.path} element={routes.ReservationsPreview.component} />
    <Route path={routes.ReservationsDetails.path} element={routes.ReservationsDetails.component} />
  </BaseRoutes>
);

export default Pages;
