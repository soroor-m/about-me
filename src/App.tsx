import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BookshelfPage, ContactPage, CVPage, HobbiesPage, HomePage, NavBarPage, NotFoundPage} from "./pages";
import styles from "./App.module.scss";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBarPage/>
                <div className={styles.app}>
                    <Routes>
                        <Route path="/" element={<NavBarPage/>}/>
                        <Route index element={<HomePage/>}/>
                        <Route path="cv" element={<CVPage/>}/>
                        <Route path="bookshelf" element={<BookshelfPage/>}/>
                        <Route path="hobbies" element={<HobbiesPage/>}/>
                        <Route path="contact" element={<ContactPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
