import React from 'react';

import {
  faCalendarAlt,
  faEnvelope,
  faCommentDots,
} from '@fortawesome/free-regular-svg-icons';

import {
  faCog,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import Home from '@pages/home';
import Chat from '@pages/chat';
import Profile from '@pages/profile';
import Register from '@pages/register';
import ResetPassword from '@pages/resetPassword';
import Settings from '@pages/settings';
import Login from '@pages/signin';
import Calendar from '@pages/calendar';
import ReservationsPreview from '@pages/Reservations/ReservationsPreview';
import ReservationsDetails from '@pages/Reservations/ReservationsDetails';

const routes = {
  // pages
  Home: {
    type: 'sidebar',
    name: 'Home',
    path: '/',
    icon: faDesktop,
    component: <Home />,
    children: [],
  },
  Register: {
    type: '',
    name: 'Register',
    path: '/register',
    icon: faDesktop,
    component: <Register />,
    children: [],
  },
  Login: {
    type: '',
    name: 'Login',
    path: '/signin',
    icon: faDesktop,
    component: <Login />,
    children: [],
  },
  ReservationsPreview: {
    type: 'sidebar',
    name: 'Reservations',
    path: '/reservations',
    icon: faEnvelope,
    component: <ReservationsPreview />,
    children: [],
  },
  ReservationsDetails: {
    type: '',
    icon: faEnvelope,
    name: 'InboxSingle',
    path: '/reservations/:id',
    component: <ReservationsDetails />,
    children: [],
  },
  Chat: {
    type: 'sidebar',
    name: 'Chat',
    path: '/chat',
    icon: faCommentDots,
    component: <Chat />,
    children: ['Profile'],
  },
  Settings: {
    type: '',
    name: 'Settings',
    path: '/settings',
    icon: faCog,
    component: <Settings />,
    children: [],
  },
  Profile: {
    type: '',
    name: 'Profile',
    path: '/profile',
    icon: faEnvelope,
    component: <Profile />,
    children: [],
  },
  PasswordReset: {
    type: '',
    name: 'PasswordReset',
    path: '/password-reset',
    icon: faEnvelope,
    component: <ResetPassword />,
    children: [],
  },
  Calendar: {
    type: 'sidebar',
    name: 'Calendar',
    path: '/calendar',
    icon: faCalendarAlt,
    component: <Calendar />,
    children: [],
  },

};

export default routes;
