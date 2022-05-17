import React from 'react'
import Link from "next/link"
import ReactDOM from 'react-dom';

const ModalDropdown = ({ isOpening, hide }) => isOpening ?
    ReactDOM.createPortal(
        <React.Fragment>
            <div className="fixed inset-0 min-w-full bg-black opacity-50" />
            <div className="fixed inset-0 z-50 w-full h-full overflow-hidden overflow-y-auto outline-0" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="z-100 bg-white relative border-3 p-12 max-w-md">
                    <div className="flex justify-end">
                        <button type="button" className="opacity-70 cursor-pointer font-extrabold text-3xl " data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className='text-center'>
                        <ul>
                            <li className='font-bold text-2xl py-6 border-b'>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className='font-bold text-2xl py-6 border-b'>

                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className='font-bold text-2xl py-6 border-b'>

                                <Link href="/service">
                                    Service
                                </Link>
                            </li>
                            <li className='font-bold text-2xl py-6 border-b'>

                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;

// (
//         <div tabindex="-1" aria-hidden={visibility} className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full'>
//             <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="crypto-modal">
//                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//             </button>  <ul>
//                 <li>
//                     <Link href="/">
//                         <span>Home</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/about">
//                         <span>About</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/service">
//                         <span>Service</span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/contact">
//                         <span>Contact</span>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     )

export default ModalDropdown