import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./UI/HEADER/Presentation/Components/Header";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="*" element='ERROR 404' />
            </Routes>
        </BrowserRouter>
    )
}