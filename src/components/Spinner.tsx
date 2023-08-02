import { Spinner } from 'flowbite-react';

const LoadingSpinner = () => {
  return (
    <div className='absolute w-full h-full flex justify-center items-center'>
        <Spinner color="info" size="xl" />
    </div>
  )
}

export default LoadingSpinner