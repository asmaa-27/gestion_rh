import { router } from "./router"
import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"

function App() {

  return (
    <>
<RouterProvider router={router}>
    <AuthProvider />
</RouterProvider>
    </>
  )
}

export default App
