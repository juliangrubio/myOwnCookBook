import { ReactNode } from 'react'

import { Button } from '@mui/material';

interface Props {
    color: 'primary' | 'secondary' | 'third' | 'fourth',
    disabled?: boolean;
    onClick: () => void,
    children?: ReactNode,
}

export const ActionButton = ({ color, disabled = false, onClick, children }: Props) => {

    return (
        <Button
            sx={{
                m: 0.5,
                minWidth: 0,

                ...(color === 'primary' && {
                    color: 'primary.main',
                    backgroundColor: 'primary.light'
                }),
                ...(color === 'secondary' && {
                    color: 'secondary.main',
                    backgroundColor: 'secondary.light'
                }),
                ...(color === 'third' && {
                    color: 'third.main',
                    backgroundColor: 'third.light'
                }),
                ...(color === 'fourth' && {
                    color: 'fourth.main',
                    backgroundColor: 'fourth.light'
                }),

            }}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </Button>
    )
}

