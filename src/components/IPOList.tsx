import React, { useState } from 'react'
import { IpoDetails } from '../types'
import { LISTED_IPO } from '../constant'
import { formatDateRange } from '../lib/utils'
import { useIPOModuleContext } from '../context/useIPOModuleContext';

export default function IPOList() {
    const [ipoList] = useState<IpoDetails[]>(LISTED_IPO);
    const {ipoHook} = useIPOModuleContext();
    const { setCurrentItem, setIsDetailShowed, isDetailShowed } = ipoHook;

    const handleClick = (item: IpoDetails) => {
        setCurrentItem(item);
        setIsDetailShowed(!isDetailShowed);
    };
    return (
        <div className="p-4 ">
            <div className="hidden md:grid md:grid-cols-4 bg-gray-100 p-4 rounded-t-lg font-medium text-gray-700">
                <div className="col-span-1">
                    <p>Company / Issue date</p>
                </div>
                <div className="col-span-1">
                    <p>Issue Size</p>
                </div>
                <div className="col-span-1">
                    <p>Price range</p>
                </div>
                <div className="col-span-1">
                    <p>Min Invest/ qty</p>
                </div>
            </div>

            <div className="divide-y divide-gray-200">
                {ipoList?.map((item, index) => (
                    <div
                        onClick={() => handleClick(item)}
                        key={index}
                        className="block md:grid md:grid-cols-4 bg-white p-4 hover:bg-gray-50 rounded-xl mb-2 hover:cursor-pointer select-none"
                    >
                        <div className="col-span-1 mb-4 md:mb-0">
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src={item.logo}
                                        alt="ipo-logo"
                                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{item.symbol}</p>
                                    <p className="text-sm text-gray-500">{formatDateRange(item)}</p>
                                </div>
                            </div>
                        </div>

                        {/* IPO Details - Grid on mobile */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 md:col-span-3">
                            <div className="space-y-1">
                                <p className="text-sm text-gray-500 md:hidden">Issue Size</p>
                                <p className="text-gray-900">₹36000 Crores</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm text-gray-500 md:hidden">Price Range</p>
                                <p className="text-gray-900">₹50-60</p>
                            </div>

                            <div className="space-y-1 col-span-2 md:col-span-1">
                                <p className="text-sm text-gray-500 md:hidden">Min Investment</p>
                                <p className="text-gray-900">₹50,000</p>
                                <p className="text-sm text-gray-500">100 Shares/5 Lot</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}