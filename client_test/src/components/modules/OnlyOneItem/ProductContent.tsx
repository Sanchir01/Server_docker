'use client'
import { ISize, cartStore } from '@/store/Cart.store'
import useCartStore from '@/store/Cart.storeTest'
import { IPropsProduct } from '@/types/Catalog.interface'
import { FC, useState } from 'react'

export interface IProductContent {
	__typename?: string | undefined
	id: number
	description: string
	images: string[]
	name: string
	price: number
	categoryId: number
	size: ISize
}

const ProductContent: FC<{ item: IPropsProduct }> = ({ item }) => {
	
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const [Size, setSize] = useState<ISize>({} as ISize)
	const cart = cartStore(state => state.cartArray)
	const toggleCart = useCartStore(state => state.toggleCartItem)
	const useCart = useCartStore(state => state.cart)
	const totalPrice = useCartStore(state => state.totalPrice)
	console.log(useCart, totalPrice)

	const toggleSizeActive = ({ size }: { size: ISize }) => {
		setActiveIndex(size.id), setSize(size)
	}

	const toggleCartButton = ({
		item,
		Size
	}: {
		item: IProductContent
		Size: ISize
	}) => {
		toggleCart({
			id: item.id,
			name: item.name,
			price: item.price,
			size: Size,
			quantity: 1
		})
	}

	const isExistCartItem = cart.find(cart => cart.id === item.id)
	return <></>
	// return (
	// 	<div className='flex flex-col gap-4'>
	// 		<h1 className='text-3xl font-semibold'>{item.name}</h1>
	// 		<p className='text-xl'>Тут на будущее сделал блок для вб айди</p>
	// 		<p className='text-xl'>Sandjma Store</p>
	// 		<p className='text-xl'>{item.price} Р</p>
	// 		<div className='flex gap-2'>
	// 			{SizeArray.map((size, i) => (
	// 				<Button
	// 					onClick={() => toggleSizeActive({ size: size })}
	// 					variant={size.id === activeIndex ? 'default' : 'outline'}
	// 					key={size.id}
	// 				>
	// 					{size.size}
	// 				</Button>
	// 			))}
	// 		</div>
	// 		<div className='flex gap-3 items-center'>
	// 			<Button onClick={() => toggleCartButton({ item: item, Size: Size })}>
	// 				{!!isExistCartItem ? 'Удалить из корзины' : 'Добавить в корзину'}
	// 			</Button>
	// 			<AddToFavoritesItem
	// 				id={item.id}
	// 				images={item.images}
	// 				name={item.name}
	// 				price={item.price}
	// 				size={item.size}
	// 			/>
	// 		</div>
	// 	</div>
	// )
}

export default ProductContent
