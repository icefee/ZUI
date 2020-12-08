import React, { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';

interface ButtonProps {
    children: string | ReactNode,
    type?: 'default' | 'primary' | 'danger' | 'success',
    size?: 'sm' | 'md' | 'lg',
    onClick?: ((event: MouseEvent) => void) | undefined
}

export default function Button(props: ButtonProps) {
    const { type = 'default', size = 'md', children, onClick } = props;
    return (
        <button className={classNames('z-button', type, size)} onClick={ onClick }>
            { children }
        </button>
    )
}
