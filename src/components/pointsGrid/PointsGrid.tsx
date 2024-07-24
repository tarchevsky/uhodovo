const PointsGrid = () => {
	return (
		<div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-24 mb-16'>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					1.
				</div>
				<p>
					Приезжаем на причал, оставляем машины, выгружаем вещи и относим их на
					пристань. Кто раньше приехал, тот первый едет на оcтров.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					2.
				</div>
				<p>
					Пересаживаемся в катер и отправляемся на пляж. Катер вмещает примерно
					4-5 человек и их вещи. Перемещение платное.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					3.
				</div>
				<p>
					По прибытии на остров выбираем место, разбиваем лагерь, размечаем
					территорию, устанавливаем палатки, тент, готовим место для костра.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					4.
				</div>
				<p>
					Мы будем готовить еду на костре и горелках. В течение дня будут
					организованы активности: купание, рыбалка, игры, дискотека.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					5.
				</div>
				<p>
					Туалетные “комнаты” размещены в лесной зоне, метрах в 50-100 от пляжа.
					Представляют собой основательную яму, окруженную досками. Есть ширма.
				</p>
			</div>
			<div className='relative'>
				<div className='absolute -z-10 h-full w-full -left-4 -top-4 text-6xl font-extrabold text-neutral-200'>
					6.
				</div>
				<p>
					В последний день после обеда собираем лагерь, убираем за собой
					территорию и по группам отправляемся обратно в город все на том же
					катере.
				</p>
			</div>
		</div>
	)
}

export default PointsGrid
