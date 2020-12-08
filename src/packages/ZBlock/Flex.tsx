import React, { ReactNode } from 'react';

interface FlexProps {
    children: ReactNode,
    flexDirection?: 'row' | 'column',
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between',
    alignItems?: 'flex-start' | 'center' | 'flex-end'
}

export default function(props: FlexProps) {
    const { children, flexDirection = 'row', justifyContent = 'flex-start', alignItems = 'flex-start' } = props;
    return (
        <div className="block-flex" style={{ flexDirection, justifyContent, alignItems }}>
            { children }
        </div>
    )
}
