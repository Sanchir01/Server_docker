import Container from '@/Providers/Container/Container'
import { getClient } from '@/apollo/clietn'
import styles from '@/styles/desctop/Header.module.scss'
import Link from 'next/link'
import { GetAllCategoriesDocument } from '../../../../graphql/gql/graphql'
import Header_right from './Header_right'
import Menu from './Menu'

export async function Header() {
	const client = getClient()
	const { data, loading } = await client.query({
		query: GetAllCategoriesDocument,
	})
	return (
		<header
			className={`${styles.header} absolute text-black text-xl font-medium`}
		>
			<Container>
				<div className={styles.header__wrapper}>
					<div className={styles.header__left}>
						{loading ? <>Loading</> : <Menu title='Каталог' catalog={data} />}
						<div className=''>
							<Link href='/about'>О Нас</Link>
						</div>
						<div className=''>
							<Link href='/contacts'>Контакты</Link>
						</div>
					</div>
					<div className={styles.header__logo}>
						<Link className={styles.header__logo__link} href='/'>
							sandjma
						</Link>
					</div>
					<Header_right />
				</div>
			</Container>
		</header>
	)
}

export default Header
