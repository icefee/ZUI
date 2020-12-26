import { ReactElement } from 'react';
import { ZBlock, ZIcon } from '../../packages';
import './style.css';
const { ArrowDown, AlertCircle, Grid, PaperPlane, Book } = ZIcon;

const Center = (props: any): ReactElement => {
    const { children, ...rest } = props;
    return (
        <ZBlock.Flex justifyContent="center" alignItems="center" flexDirection="column" {...rest}>
            { props.children}
        </ZBlock.Flex>
    )
}

export default function Icon(): ReactElement {
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
                    <Center className="grid-cell">
                        <AlertCircle size={40} />
                        <span>AlertCircle</span>
                    </Center>
                    <Center className="grid-cell">
                        <Grid size={40} />
                        <span>Grid</span>
                    </Center>
                    <Center className="grid-cell">
                        <PaperPlane size={40} />
                        <span>PaperPlane</span>
                    </Center>
                    <Center className="grid-cell">
                        <Book size={40} />
                        <span>Book</span>
                    </Center>
                </div>
            </div>
        </div>
    )
}
