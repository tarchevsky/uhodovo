import { useEffect, useState } from 'react'

interface CheckboxProps {
	label: string
	resetKey?: number
	onStateChange?: (isChecked: boolean) => void
}

const Checkbox = ({ label, resetKey = 0, onStateChange }: CheckboxProps) => {
	const [isChecked, setIsChecked] = useState(() => {
		// Инициализируем состояние из localStorage при монтировании
		const savedValue = localStorage.getItem(`checkbox_${label}`)
		return savedValue ? JSON.parse(savedValue) : false
	})

	// При изменении resetKey сбрасываем состояние
	useEffect(() => {
		if (resetKey > 0) {
			setIsChecked(false)
		}
	}, [resetKey])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newChecked = e.target.checked
		setIsChecked(newChecked)
		if (newChecked) {
			localStorage.setItem(`checkbox_${label}`, JSON.stringify(newChecked))
		} else {
			localStorage.removeItem(`checkbox_${label}`)
		}
		onStateChange?.(newChecked)
	}

	return (
		<div className='form-control'>
			<label className='label cursor-pointer justify-start gap-5'>
				<input
					type='checkbox'
					className='checkbox'
					checked={isChecked}
					onChange={handleChange}
				/>
				<span className='label-text'>{label}</span>
			</label>
		</div>
	)
}

export default Checkbox
