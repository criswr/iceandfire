import { ReactNode } from "react"
import Header from "../parts/Header"
import Footer from "../parts/Footer"


interface IMainProps {
    title: string,
    children: ReactNode
}

const MainContainer = ( {title, children}: IMainProps ) => {
  return (
    <div className="h-screen flex flex-col">
        <Header />
        <div className="container mx-auto flex-1">
            <h1 className="text-5xl font-bold my-3">{title}</h1>
            <main>{children}</main>
        </div>
        <Footer />
    </div>
  )
}

export default MainContainer