import { ReactElement } from 'react';
import { IconProps } from './type';
import WithStyle from './WithStyle';

function PaperPlane(props: IconProps): ReactElement {
    const {
        size = 24,
        ...rest
    } = props;
    return (
        <i {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="inherit">
                <g>
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"></path>
                </g>
            </svg>
        </i>
    )
}

export default WithStyle(PaperPlane);
