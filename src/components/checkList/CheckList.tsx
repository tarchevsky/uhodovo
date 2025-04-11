import Checkbox from '@/components/checkbox/Checkbox'
import cn from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './CheckList.module.scss'

const CheckList = () => {
	const [resetKey, setResetKey] = useState(0)
	const [checkedCount, setCheckedCount] = useState(0)

	// При монтировании компонента подсчитываем количество отмеченных чекбоксов
	useEffect(() => {
		const count = Object.keys(localStorage).filter(
			key => key.startsWith('checkbox_') && localStorage.getItem(key) === 'true'
		).length
		setCheckedCount(count)
	}, [])

	const handleReset = () => {
		// Очищаем все checkbox_ ключи из localStorage
		Object.keys(localStorage).forEach(key => {
			if (key.startsWith('checkbox_')) {
				localStorage.removeItem(key)
			}
		})
		setResetKey(prev => prev + 1)
		setCheckedCount(0)
	}

	const handleCheckboxChange = (isChecked: boolean) => {
		setCheckedCount(prev => (isChecked ? prev + 1 : prev - 1))
	}

	return (
		<>
			<h3 className='text-center font-extrabold text-3xl uppercase my-14'>
				Взять с собой
			</h3>
			{checkedCount > 0 && (
				<div className='text-center mb-5'>
					<button
						onClick={handleReset}
						className='btn btn-outline btn-secondary'
					>
						Сбросить все пункты
					</button>
				</div>
			)}
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
						<Checkbox
							label='палатка'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='спальник'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='коврик, матрас-пенка'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='надувная подушка'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='чашка, миска, ложка, вилка'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='походный стульчик'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
					</div>

					<div>
						<Checkbox
							label='фонарики'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='пауэрбанки, батарейки'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='головной убор от солнца'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='дождевик'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='солнце-защитный крем'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='зубная щетка, паста'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
					</div>

					<div>
						<Checkbox
							label='аптечка, туалетная бумага'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='вода (6-8 л на человека)'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='запас еды, чайные пакетики'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='купальник, полотенце, плед'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='шлепки и закрытая обувь'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='теплая одежда на вечер'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
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
						<Checkbox
							label='газовая горелка или баллоны'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='стол, топор, лопата'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='кастрюля, котелок, чайник'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='одноразовый мангал'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='угли, розжиг'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='тент, паракорд'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
					</div>

					<div>
						<Checkbox
							label='умывальник, мусорные мешки'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='средство для мытья посуды'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='нож, разделочная доска'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='спички, зажигалка, лопата'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='влажные салфетки'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='репелленты  от насекомых'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
					</div>

					<div>
						<Checkbox
							label='колонка музыкальная'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='гамак'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='мяч, бадминтон или игра'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='арбуз, шашлык, макароны'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='тушенка, вафли, хлеб'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
						<Checkbox
							label='суповой набор, мюсли'
							resetKey={resetKey}
							onStateChange={handleCheckboxChange}
						/>
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
