import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { LoginMutation } from '../../graphql/gql/graphql'

export interface userStore {
	user: LoginMutation
	addUser: (data: LoginMutation) => void
}

export const useUserStore = create<userStore>()(
	devtools(
		set => ({
			user: {} as LoginMutation,

			addUser: (data: LoginMutation) => set({ user: data }),
		})
		// {
		// 	version: 1,
		// 	name: 'User',
		// 	storage: createJSONStorage(() => localStorage),
		// }
	)
)
