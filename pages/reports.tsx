import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import FadeIn from '@/components/fadeIn/FadeIn'

const Reports: NextPage = () => {
	return (
		<>
			<Meta title='Фотоотчеты' metaDesc='Описание страницы' />
			<FadeIn className='cont'>
				<h1>Скоро здесь будут Фотоотчеты</h1>
			</FadeIn>
		</>
	)
}

export default Reports
