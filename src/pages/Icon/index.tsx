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
                    <ZCard style={{ width: 240 }}>
                        <PaperPlane size={ 80 } />
                    </ZCard>
                    <ZCard style={{ width: '100%', marginLeft: 10 }}>
                        <pre>
                            <HighLight code={
                                `import { ZIcon } from 'ZUI';`
                            } language="javascript" />
                            <HighLight code={
                                `const { PaperPlane } = ZIcon;`
                            } language="javascript" />
                            <HighLight code={
                                `<PaperPlane size={ 25 } />`
                            } language="javascript" />
                        </pre>
                    </ZCard>
                </ZBlock.Flex>
                <ZCard style={{ marginTop: 10 }}>
                    <h3>Props</h3>
                    <p>size? number</p>
                    <p>图标的大小, 类型为 number </p>
                </ZCard>
            </div>
        </div>
    )
}
