import { AppProduct } from "./components/AppProduct/AppProduct"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { ComponentForm } from "./components/ComponentForm/ComponentForm"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { MiPrimerComponente } from "./components/MiPrimerComponente/MiPrimerComponente"

export const App = () => {

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
        {/* <MiPrimerComponente text={"Texto desde propiedades"} color="red" fontSize={3}/>
        <ComponentCounter />
        <ComponentUseEffect /> */}
        {/* <ComponentForm /> */}
        <AppProduct />
    </div>
  )
}
