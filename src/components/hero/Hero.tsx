import { HeroProps } from '@/types'
import Image from 'next/image'
import cn from 'clsx'
import styles from './Hero.module.scss'

const Hero = ({ title, buttonText, alt, subtitle, src }: HeroProps) => {
	return (
		<main className='hero absolute top-0 left-0 w-full h-[100svh] place-items-stretch'>
			<div className='relative hero-content max-w-full h-[100svh] p-0'>
				<Image
					src={src}
					alt={alt}
					width={1900}
					height={900}
					priority
					className='w-full h-full object-cover'
				/>
				<div className='absolute bottom-28 left-1/2 -translate-x-1/2 text-center'>
					{subtitle ? (
						<p
							className={cn(
								styles.p,
								'relative z-10 text-base-100 text-left p-2 pb-5 mb-8'
							)}
							dangerouslySetInnerHTML={{ __html: subtitle }}
						/>
					) : null}
					<h1
						className={cn(
							styles.h1,
							'absolute z-10 text-8xl text-base-100 uppercase font-light'
						)}
					>
						{title}
					</h1>
					{buttonText ? (
						<button className='btn btn-primary btn-lg mt-3'>
							{buttonText}
						</button>
					) : null}
				</div>
			</div>
		</main>
	)
}

export default Hero
