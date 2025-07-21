import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import toast, { Toaster } from 'react-hot-toast';
import { router } from './route/router';
import api from './api/axiosInstance';

const App = () => {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </Provider>
  );
};

export default App;
