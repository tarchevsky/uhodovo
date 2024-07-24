import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='hidden xl:block footer relative h-[40svh]'>
			<Image
				src='/grass.png'
				alt='Вид на луг'
				width={1442}
				height={289}
				className='absolute top-0 left-0 w-full h-full object-cover'
			/>
		</footer>
	)
}

export default Footer
