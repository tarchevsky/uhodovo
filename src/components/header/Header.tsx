import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={cn(styles.header, 'relative z-10 w-full py-4 cont')}>
			<nav className='w-full h-full'>
				<ul
					tabIndex={0}
					className='menu flex-nowrap gap-5 menu-horizontal font-bold text-base-100 uppercase'
				>
					<li className={cn(styles.item, 'block text-center')}>
						<Link className='px-[10px] btn btn-ghost' href='#take'>
							Взять с собой
						</Link>
					</li>
					<li className={cn(styles.item, 'block text-center')}>
						<Link className='px-[10px] btn btn-ghost' href='#organization'>
							Оргвопросы
						</Link>
					</li>
					<li className={cn(styles.item, 'block text-center')}>
						<Link className='px-[10px] btn btn-ghost' href='#reports'>
							Фотоотчеты
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
