import Image from 'next/image'

const SimpleGallery = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16'>
			<Image
				src='/main-gallery-1.png'
				alt='Галерея на главной 1'
				width={360}
				height={412}
				className='w-full'
			/>
			<Image
				src='/main-gallery-2.png'
				alt='Галерея на главной 2'
				width={360}
				height={412}
				className='w-full'
			/>
			<Image
				src='/main-gallery-3.png'
				alt='Галерея на главной 3'
				width={360}
				height={412}
				className='w-full'
			/>
			<Image
				src='/main-gallery-4.png'
				alt='Галерея на главной 4'
				width={360}
				height={412}
				className='w-full'
			/>
		</div>
	)
}

export default SimpleGallery
