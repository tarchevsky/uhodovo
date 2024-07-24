import cn from 'clsx'
import styles from './CheckList.module.scss'
import Checkbox from '@/components/checkbox/Checkbox'
import Image from 'next/image'

const CheckList = () => {
	return (
		<>
			<h3 className='text-center font-extrabold text-3xl uppercase my-14'>
				Взять с собой
			</h3>
			<form
				id='take'
				className={cn(
					styles.checklist,
					'grid gap-5 mb-10 px-[20px] sm:px-[45px] lg:px-0'
				)}
			>
				<div
					className={cn(styles.required, 'lg:border-r-2 lg:border-gray-900')}
				>
					<div className='md:w-[200px] text-center'>Обязательно</div>
				</div>
				<div
					className={cn(
						styles.requiredboxes,
						'grid sm:grid-cols-3 grid-cols-1'
					)}
				>
					<div>
						<Checkbox label='газовая горелка или баллоны' />
						<Checkbox label='стол' />
						<Checkbox label='кастрюля, котелок, чайник' />
						<Checkbox label='одноразовый мангал' />
						<Checkbox label='угли, розжиг' />
						<Checkbox label='тент, паракорд' />
					</div>

					<div>
						<Checkbox label='умывальник, мусорные мешки' />
						<Checkbox label='средство для мытья посуды' />
						<Checkbox label='нож, разделочная доска' />
						<Checkbox label='спички, зажигалка, лопата' />
						<Checkbox label='влажные салфетки' />
						<Checkbox label='репелленты  от насекомых' />
					</div>

					<div>
						<Checkbox label='репелленты  от насекомых' />
						<Checkbox label='гамак' />
						<Checkbox label='мяч, бадминтон или игра' />
						<Checkbox label='арбуз, шашлык, макароны' />
						<Checkbox label='тушенка, вафли, хлеб' />
						<Checkbox label='суповой набор, мюсли' />
					</div>
				</div>
				<div
					className={cn(
						styles.zone,
						'md:w-[200px] justify-self-center text-center lg:border-r-2 lg:border-gray-900'
					)}
				>
					В общей зоне
				</div>
				<div
					className={cn(
						styles.zoneboxes,
						'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1'
					)}
				>
					<div>
						<Checkbox label='газовая горелка или баллоны' />
						<Checkbox label='стол' />
						<Checkbox label='кастрюля, котелок, чайник' />
						<Checkbox label='одноразовый мангал' />
						<Checkbox label='угли, розжиг' />
						<Checkbox label='тент, паракорд' />
					</div>

					<div>
						<Checkbox label='умывальник, мусорные мешки' />
						<Checkbox label='средство для мытья посуды' />
						<Checkbox label='нож, разделочная доска' />
						<Checkbox label='спички, зажигалка, лопата' />
						<Checkbox label='влажные салфетки' />
						<Checkbox label='репелленты  от насекомых' />
					</div>

					<div>
						<Checkbox label='репелленты  от насекомых' />
						<Checkbox label='гамак' />
						<Checkbox label='мяч, бадминтон или игра' />
						<Checkbox label='арбуз, шашлык, макароны' />
						<Checkbox label='тушенка, вафли, хлеб' />
						<Checkbox label='суповой набор, мюсли' />
					</div>
				</div>
				<div className={cn(styles.pic)}>
					<Image
						src='/archie.png'
						alt='Арчи, обитатель острова Уходово'
						width={807}
						height={557}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className={cn(styles.text)}>
					Во время нашего похода-кемпинга с палатками нас будет довольно много,
					поэтому важно заранее распределить вещи из общего списка между
					участниками. Чтобы нагрузка была равномерной, предлагаем разбиться на
					микрогруппы внутри коллектива, и каждая группа возьмет на себя
					ответственность за определенные предметы. Например, можно взять один
					мангал на группу из 6-8 человек.
					<br />
					<br />
					Наш список вещей является примерным и может быть дополнен в
					зависимости от личных предпочтений и потребностей. Главное, чтобы
					каждый чувствовал себя комфортно и был готов к любым неожиданностям.
					Поэтому не стесняйтесь добавлять в список те вещи, которые, по вашему
					мнению, могут пригодиться и сделать наш поход еще приятнее.
				</div>
			</form>
		</>
	)
}

export default CheckList
