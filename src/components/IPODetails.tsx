import Timeline from './Timeline'
import { timelineSteps } from '../constant/index';
import { FileDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIPOModuleContext } from '../context/useIPOModuleContext';

export default function IPODetails() {
    const { ipoHook } = useIPOModuleContext();
    const { setCurrentItem, setIsDetailShowed, isDetailShowed, currentItem } = ipoHook;

    const goBack = () => {
        setCurrentItem(null);
        setIsDetailShowed(!isDetailShowed);
    };

    return (
        <div className="p-4">

            <div className="">
                <button className='lg:hidden flex items-center text-white mb-4   p-1 border-2 border-red-600 rounded-lg bg-red-600' onClick={goBack}>
                    <ChevronLeft size={20} /> <span>Go Back</span>
                </button>
            </div>
            <div className='hidden lg:flex items-center space-x-3 text-sm text-gray-400 mb-6'>
                <span onClick={goBack} className="cursor-pointer hover:text-gray-600">Home</span>
                <ChevronRight size={16} />
                <span>Market Watch</span>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center mb-6">
                <div className="flex items-center space-x-3">
                    <button className='hidden lg:block p-1 border-2 border-gray-300 rounded-lg' onClick={goBack}>
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center space-x-3">
                        <img
                            className='w-12 h-12 rounded-full object-cover'
                            src={currentItem?.logo}
                            alt={currentItem?.symbol}
                        />
                        <div>
                            <p className="font-medium">{currentItem?.symbol}</p>
                            <p className='text-sm text-gray-400'>{currentItem?.growwShortName}</p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-3">
                    <button className="p-2">
                        <FileDown size={24} className='text-gray-500' />
                    </button>
                    <button className='bg-black text-white px-6 py-2 rounded-lg w-full sm:w-auto'>
                        Apply Now
                    </button>
                </div>
            </div>

            <div className='lg:rounded-xl lg:border lg:border-gray-200 p-4 mb-6'>
                <h2 className='text-lg font-semibold mb-4'>IPO Details</h2>
                <div className='rounded-xl border border-gray-200 p-4'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <p className='text-sm text-gray-500'>Issue Size</p>
                            <p className='font-medium'>₹{"2,877 - 3,028"} Cr</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Price Range</p>
                            <p className='font-medium'>₹{currentItem?.minPrice} - {currentItem?.maxPrice}</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Min Amount</p>
                            <p className='font-medium'>₹50,000</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Lot Size</p>
                            <p className='font-medium'>150 shares</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Issue Dates</p>
                            <p className='font-medium'>12 Dec - 15 Dec 22</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Listed On</p>
                            <p className='font-medium'>15 Dec 22</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Listed Price</p>
                            <p className='font-medium'>₹150</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-500'>Listing Gains</p>
                            <p className='font-medium'>₹10 <span className='text-red-500'>(10.0%)</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:rounded-xl lg:border lg:border-gray-200 p-4 mb-6 bg'>
                <h2 className='text-lg font-semibold mb-4'>IPO Timeline</h2>
                <Timeline steps={timelineSteps} initialStep={5} />
            </div>

            <div className='lg:rounded-xl lg:border lg:border-gray-200 p-4 mb-6'>
                <h2 className='text-lg font-semibold mb-4'>About Company</h2>
                <div className="space-y-4 text-sm text-gray-600">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
    )
}