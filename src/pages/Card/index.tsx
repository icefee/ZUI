import { ReactElement } from 'react';
import { ZCard, ZBlock } from '../../packages';

export default function Card () : ReactElement {
    return (
        <div className="card">
            <div className="header">
                <span>卡片 Card</span>
            </div>
            <ZBlock.Flex>
                <ZCard>
                    <span>这是一个卡片</span>
                </ZCard>
                <ZCard style={{ backgroundColor: 'purple', color: 'white' }}>
                    <span>这是一个样式卡片</span>
                </ZCard>
            </ZBlock.Flex>
        </div>
    )
}
