import FadeIn from '@/components/fadeIn/FadeIn'
import cn from 'clsx'
import styles from './Vibe.module.scss'
import Image from 'next/image'

const Vibe = () => {
	return (
		<>
			<FadeIn className='mb-16'>
				<aside className={cn(styles.vibe, 'flex flex-col xl:flex-row gap-14')}>
					<div
						className={cn(
							styles.grid,
							'grid gap-10 pl-0 md:pl-[82px] 2xl:pl-[120px]'
						)}
					>
						<div className='font-black text-4xl p-4 pb-0 uppercase'>
							Шашлыки на <br />
							природе в походе <br />- это искусство, <br />
							объединяющее <br />
							сердца
						</div>
						<div className='flex flex-col w-full xl:w-[490px]'>
							<div className='p-4 w-full font-bold bg-primary uppercase text-lg text-base-100'>
								Жизнь под открытым небом
							</div>
							<div className='xl:self-end p-4 bg-secondary xl:w-[80%] text-base-100'>
								Общие приключения и испытания на свежем воздухе скрепляют дружбу
								на всю жизнь
							</div>
						</div>
					</div>
					<div className={cn(styles.grid, 'grid gap-10 w-full h-full')}>
						<div>
							<Image
								src='/shore.png'
								alt='Вид на солнечный берег'
								width={882}
								height={262}
								className='w-full h-full object-cover'
							/>
						</div>
						<p className='px-[20px] sm:px-[45px] md:px-[82px] xl:px-0'>
							Кто-то может захотеть расположить палатку у воды, чтобы
							наслаждаться пляжем и видом на озеро, а кто-то предпочтет
							уединение и прохладу среди деревьев в лесу. Важно, чтобы каждая
							мини-группа нашла для себя комфортное место, но при этом
							учитывала, что рядом будут находиться наши же ребята. Давайте
							постараемся распределиться так, чтобы всем было удобно и приятно.
							Это поможет нам сохранить ощущение единства и дружной компании,
							несмотря на то, что мы будем разбросаны по разным уголкам пляжа.
						</p>
					</div>
				</aside>
			</FadeIn>
		</>
	)
}

export default Vibe
