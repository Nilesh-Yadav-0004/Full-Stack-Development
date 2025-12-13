import { placeholder } from '@babel/types';
import './App.css';
import { Form } from './Components/form';
import { PropsOverview } from './Components/PropsOverview';
import { PropsValidations } from './Components/PropsValidations';

function App() {
    const field = [
        {
            name: 'userName',
            label: 'user name',
            type: 'text',
            isRequire: true,
            placeholder: 'enter your name',
        },
        {
            name: 'userEmail',
            label: 'user email',
            type: 'email',
            isRequire: true,
            placeholder: 'enter your email',
        },
        {
            name: 'userPhone',
            label: 'phone',
            type: 'tel',
            isRequire: true,
            placeholder: 'enter your phone',
        },
        {
            name: 'userPass',
            label: 'password',
            type: 'password',
            isRequire: true,
            placeholder: 'enter your password`',
        },
        
    ];

    return (
        
    )
}