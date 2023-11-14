import { create } from 'zustand'

export interface ISize {
	__typename?: 'Size' | undefined
	id: number
	name: string
}

export interface ICartStoreToggle {
	id: number
	name: string
	price: number
	size: ISize
	quantity: number
}

interface CartStore {
	cart: ICartStoreToggle[]
	totalPrice: number // Общая цена товаров в корзине
	toggleCartItem: (item: ICartStoreToggle) => void
}

const useCartStore = create<CartStore>(set => ({
	cart: [],
	totalPrice: 0, // Инициализируем общую цену нулем
	toggleCartItem: item =>
		set(state => {
			const index = state.cart.findIndex(
				cartItem => cartItem.id === item.id && cartItem.size.id === item.size.id
			)

			if (index === -1) {
				state.cart.push(item)
				state.totalPrice += item.price // Добавляем цену нового товара к общей цене
			} else {
				state.cart.splice(index, 1)
				state.totalPrice -= item.price // Вычитаем цену удаленного товара из общей цены
			}

			return { cart: [...state.cart], totalPrice: state.totalPrice }
		})
}))

export default useCartStore
