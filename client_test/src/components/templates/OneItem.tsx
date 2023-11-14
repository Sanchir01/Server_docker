'use client'
import { IPropsProduct } from '@/types/Catalog.interface'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { GetAllProductsDashboardQuery } from '../../../graphql/gql/graphql'
import DashboardSlider from '../modules/Dashboard/dashboardSlider/DashboardSlider'
import ProductContent from '../modules/OnlyOneItem/ProductContent'
import ProductGallery from '../modules/OnlyOneItem/ProductGallery'

export interface IOneItem {
	similar: GetAllProductsDashboardQuery
	item: IPropsProduct
}

const OneItem: FC<IOneItem> = ({ similar, item }) => {
	return (
		<div className='mt-[200px] px-20 text-black'>
			<Link href={'/catalog'} className='flex gap-2'>
				<ArrowLeft />
				<p>В каталог</p>
			</Link>
			<div className='flex gap-20  mt-10'>
				<ProductGallery images={item.images} />
				<ProductContent item={item} />
			</div>
			<DashboardSlider
				items={similar.getAllProducts.products}
				title={'Похожие товары'}
			/>
		</div>
	)
}

export default OneItem
