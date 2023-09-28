'use client'
import { IDashboardSliderContent } from '@/types/DasboardSlider'
import Image from 'next/image'
import { FC } from 'react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const DashboardSlider: FC<IDashboardSliderContent> = ({ items, title }) => {
	return (
		<div className='px-5'>
			<h2 className='mb-10'>{title}</h2>
			<Swiper slidesPerView={3.5} navigation={true} modules={[Navigation]}>
				{items.getAllProducts.products.map(item => (
					<SwiperSlide key={item.id}>
						<div className='flex flex-col gap-2 '>
							<div className='h-[600px] w-[400px]'>
								<Image
									className='h-full w-full'
									src={item.images[0]}
									width={400}
									height={500}
									alt={item.name}
								/>
							</div>
							<div className=''>{item.name}</div>
							<span>{item.price} P</span>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default DashboardSlider
