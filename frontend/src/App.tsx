import { Routes } from "./routes/Routes"
import {Navigation} from "./components/navigation/Navigation"
import "./shared/global/Global.css"
import { UserProvider } from "./shared/provider/UserProvider"
import { StarWarsProvider } from "./shared/provider/StarWarsProvider"


export const App = () => {
  return (
    <StarWarsProvider>
      <UserProvider>
        <Routes>
            <Navigation />
        </Routes>
      </UserProvider>
    </StarWarsProvider>
  )
}