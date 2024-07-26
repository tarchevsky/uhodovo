import { Html, Head, Main, NextScript } from 'next/document'
import { Metrika } from '@/components/metrika/Metrika'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
			<Metrika />
		</Html>
	)
}
