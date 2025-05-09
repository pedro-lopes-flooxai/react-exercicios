import React from 'react';
import { createRoot } from 'react-dom/client';

import BomDia from './componentes/Bomdia'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BomDia nome="Guilherme" ></BomDia>);
