import PropTypes from 'prop-types';
import { useState } from 'react';

@param {formData}

export const Form = ({ formData, btnValue, funcValue }) => {
    const [formValue, setFormValue] = useState(() => {
        return formData.reduce((acc, curr) => {
            acc[curr.name] = '';
            return acc;
        }, {});
        });
        const handleChange = (e) => {
            const { name, value } = e.target;
            
        }
    })

}