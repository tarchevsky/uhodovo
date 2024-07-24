interface CheckboxProps {
	label: string
}

const Checkbox = ({ label }: CheckboxProps) => {
	return (
		<div className='form-control'>
			<label className='label cursor-pointer justify-start gap-5'>
				<input type='checkbox' className='checkbox' name={label} />
				<span className='label-text'>{label}</span>
			</label>
		</div>
	)
}

export default Checkbox
