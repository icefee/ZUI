import { ReactElement, useState, useCallback } from 'react';
import ZBlock from '../ZBlock';
import ZIcon from '../ZIcon';
import classNames from 'classnames';
import './style.css';
import { MenuProps, MenuItem, OnSelect } from '../types';

function MenuGroup(props: { defaultSelected: string, onSelect: OnSelect, menuItem: MenuItem}): ReactElement {
    const {
        onSelect,
        menuItem,
        defaultSelected
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
            else if (name) {
                onSelect && onSelect(name);
            }
        },
        [items, open, name, onSelect],
    )
    return (
        <li>
            <span className={classNames('menu-item', { active: defaultSelected === name }) } onClick={ handleMenuSelect }>
                <ZBlock.Flex justifyContent="space-between" alignItems="center">
                    <ZBlock.Flex alignItems="center">
                        {icon}
                        <span>{label}</span>
                    </ZBlock.Flex>
                    {
                        items && <ZIcon.ArrowDown size={16} className={ classNames('icon', {flip: open}) }/>
                    }
                </ZBlock.Flex>
            </span>
            {
                items ? (
                    <ul className={classNames({ open })}>
                        {
                            items.map(
                                (item: MenuItem, key: number) => <MenuGroup key={key} onSelect={props.onSelect} menuItem={item} defaultSelected={defaultSelected} />
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
        onSelect,
        className,
        style,
        defaultSelected
    } = props;
    const [state, setState] = useState({
        selected: defaultSelected
    })
    const handleSelect = useCallback(
        (name: string) => {
            setState({
                selected: name
            })
            onSelect && onSelect(name);
        },
        [onSelect],
    )
    return (
        <div className={classNames(className, 'z-menu', { collapsed })} style={style}>
            <ul>
                {
                    items.map(
                        (item: MenuItem, key: number) => <MenuGroup key={key} onSelect={handleSelect} menuItem={item} defaultSelected={state.selected} />
                    )
                }
            </ul>
        </div>
    )
}