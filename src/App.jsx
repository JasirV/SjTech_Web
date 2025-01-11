import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from 'react-hot-toast';
import { router } from './route/router';
import api from './api/axiosInstance';

const App = () => {
  // Perform the API call when the app is loaded
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/fake'); // Your API endpoint
        console.log(response.data); // Process the response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();  // Call the function to fetch data

    // Optional: Set an interval to repeat the API call every 14 seconds
    const intervalId = setInterval(fetchData, 14000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </Provider>
  );
};

export default App;
