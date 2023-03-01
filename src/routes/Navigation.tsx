import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { MainLayout }                             from '../Layouts';
import { HomeScreen, SaveScreen, RecipesScreen }  from '../screens';

export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/*"       element={<Navigate to="/home" replace />} />

                        <Route path="/home"    element={<HomeScreen     />} />
                        <Route path="/saveone" element={<SaveScreen     />} />
                        <Route path="/recipes" element={<RecipesScreen  />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
