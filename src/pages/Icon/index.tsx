import { ReactElement } from 'react';
import { ZBlock, ZIcon, ZCard } from '../../packages';
import './style.css';
import HighLight from '../../units/HighLight';

const { ArrowDown, AlertCircle, Grid, PaperPlane, Book, Layers } = ZIcon;

const Center = (props: any): ReactElement => {
    const { children, ...rest } = props;
    return (
        <ZCard {...rest}>
            <ZBlock.Flex justifyContent="center" alignItems="center" flexDirection="column">
                {props.children}
            </ZBlock.Flex>
        </ZCard>
    )
}

export default function Icon(): ReactElement {
    return (
        <div className="icon">
            <div className="header">
                <span>图标 Icon</span>
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
                    <Center className="grid-cell">
                        <Layers size={40} />
                        <span>Layers</span>
                    </Center>
                </div>
                <ZBlock.Flex justifyContent="center" style={{ marginTop: 10 }}>
                    <ZCard>
                        <PaperPlane size={ 80 } />
                    </ZCard>
                    <ZCard style={{ width: '100%', marginLeft: 10 }}>
                        <HighLight>
                            &lt;PaperPlane /&gt;
                        </HighLight>
                    </ZCard>
                </ZBlock.Flex>
                <ZCard style={{ marginTop: 10 }}>
                    <span>Props</span>
                </ZCard>
            </div>
        </div>
    )
}
