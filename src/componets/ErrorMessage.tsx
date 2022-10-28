interface ErrorMessageProps  {
  error: string
}

const ErrorMessage = ({error}: ErrorMessageProps) => {
  return (
    <div>
      <p className='text-center text-red-600 mb-2'>{error}</p>
    </div>
  )
}

export default ErrorMessage