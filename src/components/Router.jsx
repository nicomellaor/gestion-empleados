import {Route, Routes} from 'react-router-dom'
import Menu from '../pages/Menu.jsx'
import Insertar from '../pages/Insertar.jsx'
import Buscar from '../pages/Buscar.jsx'
import Editar from '../pages/Editar.jsx'
import Eliminar from '../pages/Eliminar.jsx'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Menu/>}/>
                <Route path='/insertar' element={<Insertar/>}/>
                <Route path='/buscar' element={<Buscar/>}/>
                <Route path='/editar'element={<Editar/>}/>
                <Route path='/eliminar' element={<Eliminar/>}/>
            </Routes>
        </>
    )
}

export default Router