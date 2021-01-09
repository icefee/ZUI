import { CSSProperties, ReactNode } from 'react';

interface BaseProps {
    className?: string,
    style?: CSSProperties
}

export interface CardProps extends BaseProps {
    children?: ReactNode
}

export interface IconProps extends BaseProps {
    size?: number
}
