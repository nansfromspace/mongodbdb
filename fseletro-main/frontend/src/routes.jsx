import { Routes, Route } from 'react-router-dom';

import HomePage from './views/index';
import Lojas from './views/nossaslojas';
import Contato from './views/contato';
import Produtos from './views/produtos';

const MainRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/nossaslojas" element={<Lojas/>}/>
            <Route path="contato" element={<Contato />}/>
            <Route path="/produtos" element={<Produtos/>}/>
        </Routes>
    )
}

export default MainRoute;