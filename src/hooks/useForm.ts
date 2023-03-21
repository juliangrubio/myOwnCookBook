import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSelectChipChange = (e: SelectChangeEvent<string[]>) => {
    setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
    };

    const resetForm = () => {
        setFormData({ ...initState })
    }

    return {
        ...formData,
        formData,

        onInputChange,
        onSelectChipChange,
        resetForm,
    }

}
