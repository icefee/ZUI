import { ReactElement } from 'react';
import classNames from 'classnames';
import './style.css';
import { CardProps } from '../types'

export default function Card(props: CardProps) : ReactElement {
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
