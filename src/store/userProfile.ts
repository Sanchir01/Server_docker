'use client'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { LoginMutation } from '../../graphql/gql/graphql'

export interface userStore {
	user: LoginMutation
	addUser: (data: LoginMutation) => void
}

export const useUserStore = create<userStore>()(
	devtools(
		persist(
			set => ({
				user: {} as LoginMutation,
				addUser: (data: LoginMutation) => set({ user: data }),
			}),
			{
				name: 'food-storage',
				storage: createJSONStorage(() => localStorage),
			}
		)
	)
)
