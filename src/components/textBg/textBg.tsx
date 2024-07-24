import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'
import styles from './TextBg.module.scss'
import cn from 'clsx'

const TextBg = () => {
	return (
		<FadeIn
			className={cn(
				styles.textbg,
				'relative h-[300px] xl:h-[100svh] w-full grid gap-5 items-end xl:items-start'
			)}
		>
			<Image
				src='/boats.png'
				alt='Отдых у костра'
				width={900}
				height={538}
				className='absolute top-0 left-0 w-full h-full object-cover'
			/>
			<div
				className={cn(
					styles.text,
					'relative z-10 w-full xl:h-[40svh] p-4 xl:p-16 border-2 border-base-100 text-base-100 text-[14px] md:text-xl'
				)}
			>
				<p className={cn('hidden xl:block')}>
					Природный остров Уходово расположен в Тверской области и назван в
					честь ранее существовавшей одноимённой деревни. Она была полностью
					затоплена в тридцатые годы XX века, когда велось строительство
					протяжённого канала Москва-Волга.
				</p>
				<p className={cn('hidden xl:block')}>
					В настоящее время на красивых волжских берегах в акватории
					Иваньковского водохранилища располагаются базы отдыха. А еще туристам
					предлагается активный отдых в палатках.{' '}
				</p>
				<p>
					“Сосны, песок, Московское море, грибы, ягоды. Мимо проходят живописные
					суда. Закат сильный, очень художественный”
				</p>
			</div>
		</FadeIn>
	)
}

export default TextBg
