import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx';

console.log(JSON.stringify({ root: document.getElementById('root') }));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
);
