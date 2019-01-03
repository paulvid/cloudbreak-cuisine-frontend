import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


const Library = React.lazy(() => import('./views/Library/Library'));
const LibraryItem = React.lazy(() => import('./views/Library/LibraryItem'));
const Generator = React.lazy(() => import('./views/Generator/Generator'));

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Recipes = React.lazy(() => import('./views/Recipes/Recipes'));
const AddRecipe = React.lazy(() => import('./views/Recipes/AddRecipe'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/generator', name: 'Generator', component: Generator },
  { path: '/recipes', exact: true,  name: 'Recipes', component: Recipes },
  { path: '/addrecipe', exact: true,  name: 'Add Recipe', component: AddRecipe },
   { path: '/users', exact: true,  name: 'Users', component: Users },
   { path: '/users/:id', exact: true, name: 'User Details', component: User },

  { path: '/library', exact: true, name: 'Library', component: Library },
  { path: '/library/:id', exact: true, name: 'Bundle Details', component: LibraryItem },
];

export default routes;
