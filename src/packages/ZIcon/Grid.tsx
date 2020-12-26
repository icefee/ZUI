import { ReactElement } from 'react';
import { IconProps } from './type';
import WithStyle from './WithStyle';

function Grid(props: IconProps): ReactElement {
    const {
        size = 24,
        ...rest
    } = props;
    return (
        <i {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="inherit">
                <g>
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 9V5h4v4z"></path>
                    <path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4 6V5h4v4z"></path>
                    <path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"></path>
                    <path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"></path>
                </g>
            </svg>
        </i>
    )
}

export default WithStyle(Grid)
