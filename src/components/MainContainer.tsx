import { ReactNode, useContext } from "react"
import Header from "../parts/Header"
import Footer from "../parts/Footer"
import { BookContext } from "../store/BookContext"
import Spinner from "./Spinner"


interface IMainProps {
    title: string,
    children: ReactNode
}

const MainContainer = ( {title, children}: IMainProps ) => {
    const {loading} = useContext(BookContext)

    return (
    <div className="h-screen flex flex-col">
        <Header />
        <div className="container mx-auto flex-1">
            <h1 className="text-5xl font-bold my-3">{title}</h1>
            { !loading && <main>{children}</main> }
        </div>
        { loading && <Spinner />}
        <Footer />
    </div>
  )
}

export default MainContainer