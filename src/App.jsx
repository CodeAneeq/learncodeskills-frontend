import React from "react"
import { RouterProvider } from "react-router-dom"
import { instructorRoutes, privateRoutes, publicRoutes } from "./routes/Router"
import { useSelector } from "react-redux";

function App() {
const isLogin = useSelector(state=> state.user.isLogin);
  const user = useSelector(state => state.user.data);
  
  let route = publicRoutes;
  if (isLogin && user.role == 'instructor') {
    route = instructorRoutes
  } else if (isLogin && user.role == 'student') {
    route = privateRoutes
  } else {
    route = publicRoutes
  }
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
