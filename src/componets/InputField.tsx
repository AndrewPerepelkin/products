interface IputFieldProps {
  id: string
  type?: string
  label: string
  name: string
  className: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({id, type, label, name, className, placeholder, value, onChange}: IputFieldProps) => {
  return (
    <>
      <label htmlFor={name} className='capitalize font-bold justify-start'>{label}:</label>
      <input
      id={id}
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
    </>
    
  )
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField