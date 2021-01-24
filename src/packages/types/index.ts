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

export type OnSelect = ((event: string) => void) | undefined;

export interface MenuProps extends BaseProps {
    collapsed: boolean,
    items: MenuItem[],
    defaultSelected: string,
    onSelect?: OnSelect
}

export interface MenuItem extends BaseProps {
    label: ReactNode,
    icon?: ReactNode,
    name?: string,
    isOpen?: boolean,
    items?: MenuItem[] | undefined
}
