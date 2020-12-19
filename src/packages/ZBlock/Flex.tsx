import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import './Flex.css';

interface FlexProps {
    key?: string | number,
    children: ReactNode,
    className?: string,
    flexDirection?: 'row' | 'column',
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between',
    alignItems?: 'flex-start' | 'center' | 'flex-end'
}

export default function Flex(props: FlexProps): ReactElement {
    const {
        className,
        children,
        flexDirection = 'row',
        justifyContent = 'flex-start',
        alignItems = 'flex-start'
    } = props;
    return (
        <div className={classNames(className, 'block-flex')} style={{ flexDirection, justifyContent, alignItems }}>
            { children}
        </div>
    )
}
