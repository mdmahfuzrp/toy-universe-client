import { Link } from 'react-router-dom';
import img from '../../assets/404.gif'
import { FaArrowLeft } from 'react-icons/fa';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center py-5'>
            <h1 className='text-5xl font-semibold text-slate-500 text-center'>Oops,<br />Maybe You Lost !</h1>
            <img className='w-4/5 md:w-3/5 lg:w-2/5'  src={img} alt="" />
            <Link className='flex items-center btn btn-outline hover:btn-error -mt-10'><span><FaArrowLeft/></span>Go Home</Link>
        </div>
    );
};

export default ErrorPage;