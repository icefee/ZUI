import { ReactElement } from 'react';
import { ZBlock, ZCard, ZMenu, ZIcon } from '../../packages';

export default function Menu(): ReactElement {
    return (
        <div className="menu">
            <div className="header">
                <span>菜单 Menu</span>
            </div>
            <ZBlock.Flex>
                <ZCard style={{ width: 200, flexShrink: 0 }}>
                    <ZMenu
                    items={
                        [
                            {
                                label: '食物',
                                icon: <ZIcon.Layers />,
                                items: [
                                    {
                                        label: '水果',
                                        icon: <ZIcon.Layers />,
                                        items: [
                                            {
                                                label: '苹果',
                                                name: 'apple',
                                                icon: <ZIcon.Layers />,
                                            },
                                            {
                                                label: '梨',
                                                name: 'pear',
                                                icon: <ZIcon.Layers />,
                                            },
                                        ]
                                    },
                                    {
                                        label: '蔬菜',
                                        icon: <ZIcon.Layers />,
                                        items: [
                                            {
                                                label: '土豆',
                                                name: 'potato',
                                                icon: <ZIcon.Layers />,
                                            },
                                            {
                                                label: '西红柿',
                                                name: 'tomato',
                                                icon: <ZIcon.Layers />,
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                label: '家具',
                                icon: <ZIcon.Layers />,
                                items: [
                                    {
                                        label: '椅子',
                                        name: 'chear'
                                    },
                                    {
                                        label: '桌子',
                                        name: 'desk'
                                    }
                                ]
                            }
                        ]
                    }
                    collapsed={ false }
                    defaultSelected="apple"
                    onSelect={ undefined }
                    />
                </ZCard>
                <ZCard style={{ width: '100%', marginLeft: 10 }}></ZCard>
            </ZBlock.Flex>
        </div>
    )
}
