import React from 'react';
import { createRoot } from 'react-dom/client';

import Saudacao from './componentes/Saudacao'

const container = document.getElementById('root');
const root = createRoot(container);
root.render
(
    <div>
        <Saudacao tipo="Bom dia" nome="Bia"/>
    </div>
);
