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

export default ModalDropdown