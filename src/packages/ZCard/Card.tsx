import { CSSProperties, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import './style.css';

interface CardProps {
    children?: ReactNode,
    className?: string,
    style?: CSSProperties
}

export default function Card (props: CardProps) : ReactElement {
    const {
        children,
        className,
        style
    } = props;
    return (
        <div className={ classNames('z-card', className) } style={ style }>
            { children }
        </div>
    )
}
