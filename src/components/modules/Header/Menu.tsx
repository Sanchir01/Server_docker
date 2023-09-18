import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '@/components/ui/MenuBar'
import styles from '@/styles/desctop/Header.module.scss'
import { IPropsMenu } from '@/types/HeaderMenu.interface'
import Link from 'next/link'
import { FC } from 'react'

const Menu: FC<IPropsMenu> = ({ title, catalog }) => {
	return (
		<Menubar className={`${styles.menu} `}>
			<MenubarMenu>
				<MenubarTrigger className='hover:bg-white cursor-pointer hover:text-black text-xl'>
					{title}
				</MenubarTrigger>
				<MenubarContent>
					{catalog.getAllCategories.map(item => (
						<MenubarItem key={item.id}>
							<Link href={`/catalog/${item.slug}`}>{item.name}</Link>
						</MenubarItem>
					))}
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

export default Menu
