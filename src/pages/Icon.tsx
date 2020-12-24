import { ReactElement } from 'react';
import { ZBlock, ZIcon } from '../packages';
const { ArrowDown } = ZIcon;

const Center = (props: any) : ReactElement => {
    const { children, ...rest } = props;
    return (
        <ZBlock.Flex justifyContent="center" alignItems="center" flexDirection="column" { ...rest }>
            { props.children }
        </ZBlock.Flex>
    )
}

export default function Icon() : ReactElement {
    return (
        <div className="icon">
            <div className="header">
                <span>图标</span>
            </div>
            <div className="content">
                <div className="grid-view">
                    <Center className="grid-cell">
                        <ArrowDown size={40} />
                        <span>ArrowDown</span>
                    </Center>
                </div>
            </div>
        </div>
    )
}
