import { NextPage } from 'next'
import Hero from '@/components/hero/Hero'
import Meta from '@/components/meta/Meta'
import Image from 'next/image'
import CheckList from '@/components/checkList/CheckList'
import PointsGrid from '@/components/pointsGrid/PointsGrid'
import FadeIn from '@/components/fadeIn/FadeIn'
import TextBg from '@/components/textBg/textBg'
import Vibe from '@/components/vibe/Vibe'
import ColoredGrid from '@/components/coloredGrid/ColoredGrid'
import SimpleGallery from '@/components/simpleGallery/SimpleGallery'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<Hero
				src='/main-1.png'
				alt='Альт картинки'
				title='Уходово'
				subtitle='Мы рады приветствовать вас на официальном сайте нашего похода с палатками на остров Уходово! <br /><br />Этот сайт создан для того, чтобы вы могли узнать все необходимые детали о нашем путешествии, подготовиться к нему и после поездки насладиться фотовоспоминаниями. Присоединяйтесь к нам для незабываемого приключения в кругу друзей!'
			/>
			<div className='relative z-10 m-auto mt-[90.4svh] xl:mt-[82svh] xl:w-[900px] xl:h-[538px]'>
				<Image
					src='/main-2.png'
					alt='Отдых у костра'
					width={900}
					height={538}
					className='m-auto w-full h-full object-cover'
				/>
				<div className='pl-0 md:pl-[82px] xl:pl-0 xl:absolute xl:-bottom-48 xl:-right-10 flex flex-col w-full xl:w-[490px] xl:-translate-y-1/2'>
					<div className='p-4 w-full font-bold bg-primary uppercase text-lg text-base-100'>
						Иваньковское водохранилище
					</div>
					<div className='xl:self-end p-4 bg-secondary xl:w-[80%] text-base-100'>
						<div>27-28 июля 2024</div>
						<div>
							Место встречи:
							<br />
							<br />
							Дубна, пристань “Большая Волга”. Рядом удобная стихийная парковка,
							где мы оставим машины. Для ориентира - справа будет виден памятник
							Ленину. <br />
							<br />
							Сбор с 08:00 до 9.00 утра
						</div>
					</div>
				</div>
			</div>
			<SimpleGallery />
			<FadeIn className='cont'>
				<PointsGrid />
			</FadeIn>
			<Vibe />
			<TextBg />
			<CheckList />
			<ColoredGrid />
		</>
	)
}

export default HomePage
