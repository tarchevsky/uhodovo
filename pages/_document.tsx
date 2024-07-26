import { Html, Head, Main, NextScript } from 'next/document'
import { Metrika } from '@/components/metrika/Metrika'
import { Suspense } from 'react'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Suspense>
					<Metrika />
				</Suspense>
			</body>
		</Html>
	)
}
