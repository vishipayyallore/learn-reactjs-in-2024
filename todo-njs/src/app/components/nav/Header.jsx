import React from 'react'
import Link from 'next/link';
// import '@/styles/globals.css'

export default function Header() {
    return (
        <div className='flex justify-between p-5 text-white gap-5 items-center h-6 bg-gradient-to-r from-blue-600 to-blue-900'>
            <Link className="text-2xl font-bold" href='/'>Todo Application</Link>

            <div className='flex gap-5'>
                <Link href='/todo'>Todo Items</Link>
            </div>
        </div>
    );
};
