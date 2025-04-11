import cn from 'clsx'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={cn(styles.header, 'relative z-10 w-full py-4 cont')}>
			<nav className='w-full h-full'>
				<ul
					tabIndex={0}
					className='menu p-0 xl:p-6 flex-nowrap gap-2 xl:gap-5 menu-horizontal font-bold text-base-100 uppercase text-[10px] md:text-sm'
				>
					<li className={cn(styles.item, 'block text-center')}>
						<Link className='px-0 xl:px-[10px] btn btn-ghost' href='/#take'>
							Взять с собой
						</Link>
					</li>
					<li className={cn(styles.item, 'block text-center')}>
						<Link
							className='px-0 xl:px-[10px] btn btn-ghost'
							href='/#organization'
						>
							Оргвопросы
						</Link>
					</li>
					<li className={cn(styles.item, 'block text-center')}>
						<Link className='px-0 xl:px-[10px] btn btn-ghost' href='/reports'>
							Фотоотчеты
						</Link>
					</li>
					<li className={cn(styles.item, 'block text-center')}>
						<Link
							className='px-0 xl:px-[10px] btn btn-ghost'
							href='uhodovo-longread.vercel.app'
						>
							Как выбрать сап
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
