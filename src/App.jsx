import React from 'react'
import { router } from './route/router'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </Provider>
  )
}

export default App