import { ReactElement, ReactNode, useState, useCallback } from 'react';
import ZBlock from '../ZBlock';
import { ArrowDown } from '../ZIcon';
import classNames from 'classnames';
import './Menu.css';

interface MenuItem {
    label: ReactNode,
    icon: ReactNode,
    name?: string,
    isOpen?: boolean,
    items?: MenuItem[] | undefined
}

type OnSelect = ((event: string) => void) | undefined;

interface MenuProps {
    collapsed: boolean,
    items: MenuItem[],
    onSelect?: OnSelect
}

function MenuGroup(props: { onSelect: OnSelect, menuItem: MenuItem}): ReactElement {
    const {
        onSelect,
        menuItem
    } = props;
    const {
        isOpen = true,
        icon,
        label,
        name,
        items
    } = menuItem;
    const [open, setOpen] = useState(isOpen);
    const handleMenuSelect = useCallback(
        () => {
            if (items) {
                setOpen(!open)
            }
            else {
                name && onSelect && onSelect(name)
            }
        },
        [items, open, name, onSelect],
    )
    return (
        <li>
            <span className="menu-item" onClick={ handleMenuSelect }>
                <ZBlock.Flex justifyContent="space-between" alignItems="center">
                    <ZBlock.Flex>
                        {icon}
                        <span>{label}</span>
                    </ZBlock.Flex>
                    {
                        items && <ArrowDown size={16} className={ classNames('icon', {flip: open}) }/>
                    }
                </ZBlock.Flex>
            </span>
            {
                items ? (
                    <ul className={classNames({ open })}>
                        {
                            items.map(
                                (item: MenuItem, key: number) => <MenuGroup key={key} onSelect={props.onSelect} menuItem={item} />
                            )
                        }
                    </ul>
                ) : null
            }
        </li>
    )
}

export default function Menu(props: MenuProps): ReactElement {
    const {
        collapsed,
        items,
        onSelect
    } = props;
    return (
        <div className={classNames('z-menu', { collapsed })}>
            <ul>
                {
                    items.map(
                        (item: MenuItem, key: number) => <MenuGroup key={key} onSelect={onSelect} menuItem={item} />
                    )
                }
            </ul>
        </div>
    )
}