import { ReactElement, useEffect } from 'react';
import { ZMenu, ZIcon } from '../packages';
import { useHistory } from 'react-router';
import * as eva from 'eva-icons';

interface SideProps {
    width?: number
}

export default function Side(props: SideProps): ReactElement {
    const {
        width = 200,
        ...rest
    } = props;
    const history = useHistory();

    const menus = [
        {
            label: '教程',
            icon: <ZIcon.Book size={20} />,
            items: [
                {
                    label: '快速开始',
                    icon: <ZIcon.PaperPlane size={ 20 } />,
                    name: '/'
                }
            ]
        },
        {
            label: '组件',
            icon: <ZIcon.Grid size={ 20 } />,
            items: [
                {
                    label: '按钮 Button',
                    icon: <i data-eva="layers-outline" />,
                    name: '/button'
                },
                {
                    label: '图标 Icon',
                    icon: <i data-eva="layers-outline" />,
                    name: '/icon'
                },
                {
                    label: '菜单 Menu',
                    icon: <i data-eva="layers-outline" />,
                    name: '/menu'
                },
            ]
        }
    ];

    useEffect(() => eva.replace(), [])

    const handleMenuSelect = (name: string) => {
        if (history.location.pathname !== name) {
            history.push(name);
        }
    }

    return (
        <div className="side-bar" style={{ width }} { ...rest }>
            <ZMenu items={menus} collapsed={false} defaultSelected={ history.location.pathname } onSelect={ handleMenuSelect } />
        </div>
    )
}
