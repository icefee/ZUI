import { CSSProperties, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import './Flex.css';

interface FlexProps {
    key?: string | number,
    children: ReactNode,
    className?: string,
    style?: CSSProperties,
    flexDirection?: 'row' | 'column',
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between' | 'stretch',
    alignItems?: 'flex-start' | 'center' | 'flex-end'
}

export default function Flex(props: FlexProps): ReactElement {
    const {
        className,
        children,
        flexDirection = 'row',
        justifyContent = 'flex-start',
        alignItems = 'flex-start',
        style,
        ...rest
    } = props;
    return (
        <div className={classNames(className, 'block-flex')} style={{ flexDirection, justifyContent, alignItems, ...style }} { ...rest }>
            { children}
        </div>
    )
}
