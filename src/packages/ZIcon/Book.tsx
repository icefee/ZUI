import { ReactElement } from 'react';
import { IconProps } from './type';
import WithStyle from './WithStyle';

function Book(props: IconProps): ReactElement {
    const {
        size = 24,
        ...rest
    } = props;
    return (
        <i {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="inherit">
                <g>
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z"></path>
                </g>
            </svg>
        </i>
    )
}

export default WithStyle(Book)
