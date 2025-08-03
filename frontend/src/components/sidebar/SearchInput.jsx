import { IoSearchSharp } from 'react-icons/io5';

function SearchInput() {
  return (
    <div className='flex items-center'>
        <form>
            <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='h-6 w-6 outline-none' />
            </button>
        </form>
    </div>
  )
}

export default SearchInput
