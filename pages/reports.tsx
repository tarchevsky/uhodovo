import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import FadeIn from '@/components/fadeIn/FadeIn'
import InfiniteMasonry from '@/components/infiniteMasonry/InfiniteMasonry'
import { images } from '@/components/infiniteMasonry/images'

const Reports: NextPage = () => {
	return (
		<>
			<Meta title='Фотоотчеты' metaDesc='Описание страницы' />
			<FadeIn className='cont'>
				<h1>Скоро здесь будут Фотоотчеты</h1>
			</FadeIn>
			<FadeIn className='cont'>
				<InfiniteMasonry images={images} />
			</FadeIn>
		</>
	)
}

export default Reports
