import Container from '@/Providers/Container/Container'
import logo from '@/assets/header/logo.png'
import styles from '@/styles/desctop/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Header_right from './Header_right'

export function Header() {
	return (
		<header className={`${styles.header} absolute text-xl font-medium z-[2]`}>
			<Container>
				<div className={styles.header__wrapper}>
					<div className={styles.header__left}>
						<Link href='/catalog'>Каталог</Link>

						<Link href='/about'>О Нас</Link>

						<Link href='/contacts'>Контакты</Link>
					</div>
					<div className={styles.header__logo}>
						<Link className={styles.header__logo__link} href='/'>
							<Image
								className=' object-cover'
								src={logo}
								width={200}
								height={100}
								alt='logo'
							/>
						</Link>
					</div>
					<Header_right />
				</div>
			</Container>
		</header>
	)
}

export default Header
