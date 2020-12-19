import { ReactElement } from 'react';
import { IconProps } from './type';

export default function ArrowDown(props: IconProps): ReactElement {
    const {
        size = 24,
        ...rest
    } = props;
    return (
        <i {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="inherit">
                <g>
                    <g>
                        <rect width="24" height="24" opacity="0" />
                        <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" />
                    </g>
                </g>
            </svg>
        </i>
    )
}
