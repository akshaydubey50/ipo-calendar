import React from 'react'
import { useIPOModuleContext } from '../context/useIPOModuleContext';
import IPODetails from '../components/IPODetails';
import IPOList from '../components/IPOList';

export default function MainScreen() {
    const { ipoHook } = useIPOModuleContext();
    const { isDetailShowed } = ipoHook
    return (
        <>
                <div className="max-w-7xl mx-auto lg:p-8 ">
                    {isDetailShowed ? <IPODetails /> : <IPOList />}
                </div>
        </>
    )
}
