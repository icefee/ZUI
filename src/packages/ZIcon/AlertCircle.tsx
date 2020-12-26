import { ReactElement } from 'react';
import { IconProps } from './type';
import WithStyle from './WithStyle';

function AlertCircle(props: IconProps): ReactElement {
    const {
        size = 24,
        ...rest
    } = props;
    return (
        <i {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="inherit">
                <g>
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                    <circle cx="12" cy="16" r="1"></circle>
                    <path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"></path>
                </g>
            </svg>
        </i>
    )
}

export default WithStyle(AlertCircle);
