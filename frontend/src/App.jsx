import { router } from "./router"
import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"

function App() {

  return (
    <>
<AuthProvider>
    <RouterProvider router={router}/>
</AuthProvider>
    </>
  )
}

export default App
