import { EnumTokens } from '@/service/auth.service'
import Cookies from 'js-cookie'
import { cookies } from 'next/headers'
import { FC } from 'react'
const Description: FC = async () => {
	const getApp = cookies().get(EnumTokens.REFRESH_TOKEN)
	const token = Cookies.get()
	console.log(token)

	return (
		<section>
			<div className=''>
				<span> 213123</span>{' '}
				<div className=''>
					- это стильная комфортная одежда для женщин и мужчин
				</div>
			</div>
		</section>
	)
}

export default Description
