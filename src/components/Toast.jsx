
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const notify = () => {
    const [checkReadOrUnreadNotification, setcheckReadOrUnreadNotification] = useState(true);

    const selectButtonColor = (e) => {
        const currentButtonColorId = e.target.id;
        // the previous modal is removed
        toast.remove();

        const map = {
            'blue': 'bg-blue-400',
            'pink': 'bg-pink-400',
            'yellow': 'bg-yellow-500',
            'green': 'bg-green-500',
        }

        const backgroundButtonColor = map[currentButtonColorId] ?? 'bg-white';

        toast.custom(
            (t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-[368px] w-full max-h-[98px] bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    data-testid={`testing_${currentButtonColorId}`}>
                    <div className={`flex-1 w-0 p-4 rounded-l-lg ${backgroundButtonColor}`}>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className={checkReadOrUnreadNotification ? 'text-sm font-medium text-gray-900' : 'text-sm font-medium text-gray-500'}>
                                    Dianne left a comment <span className="text-xs text-gray-500">Just Now</span>
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Can you review this MR?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.remove()}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ))
        { checkReadOrUnreadNotification === true ? setcheckReadOrUnreadNotification(false) : setcheckReadOrUnreadNotification(true) }
    };

    return (
        <div className='flex items-center justify-center m-auto space-x-4'>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" id="blue" data-testid="blue" onClick={e => selectButtonColor(e)}>
                Blue
            </button>
            <button className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full" id="pink" data-testid="pink" onClick={e => selectButtonColor(e)}>
                Pink
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full" id="yellow" data-testid="yellow" onClick={e => selectButtonColor(e)}>
                Yellow
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" id="green" data-testid="green" onClick={e => selectButtonColor(e)}>
                Green
            </button>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                gutter={1}
                toastOptions={{
                    // Define default options
                    duration: 6000,
                }}
            />
        </div>
    )
}