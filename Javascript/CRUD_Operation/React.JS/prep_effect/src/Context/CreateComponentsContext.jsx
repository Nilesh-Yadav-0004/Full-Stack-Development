import { Children, createContext, useState } from 'react';

export const contextCreated = createContext(null);

export const CreateComponentsContext = ({ Children }) => {
    const [data, setData] = useState([]);
    return (
        <contextCreated.Provider value={{ data, setData }}>
            {Children}
        </contextCreated.Provider>
    );
};