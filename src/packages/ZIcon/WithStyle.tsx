import { ReactElement } from 'react';
import classNames from 'classnames';
import { IconProps } from './type';
import './style.css';

export default function WithStyle(Component: any) : Function {
    return function(props: IconProps) : ReactElement {
        const {
            className,
            ...rest
        } = props;
        return (
            <Component className={classNames('z-icon', className)} {...rest} />
        )
    }
}
