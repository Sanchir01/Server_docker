import { getClient } from '@/apollo/clietn'
import styles from '@/styles/desctop/Dashboard.module.scss'
import { GetAllProductsDashboardDocument } from '../../../../graphql/gql/graphql'
import DashboardSlider from '../dashboardSlider/DashboardSlider'

const Dashboard = async () => {
	const { data: newsProduct, loading } = await getClient().query({
		query: GetAllProductsDashboardDocument,
		variables: {
			getAllProductInput: { newProduct: true, page: '1', perPage: '8' },
		},
	})
	console.log(newsProduct.getAllProducts.length)
	return (
		<section className={styles.dashboard}>
			{loading ? (
				'Loading'
			) : (
				<DashboardSlider items={newsProduct} title='new' />
			)}
		</section>
	)
}

export default Dashboard
