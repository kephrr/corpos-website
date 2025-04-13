import React, { useState } from 'react';
import {Text} from "lucide-react";
import Badge from "./badge.tsx";
import {TicketItem} from "../../core/models/tickets.ts";
import ModalContinue from "../ui-ux/modal-continue.tsx";

interface DetailPropos {
    details: TicketItem,
}

const ModalDetailsTickets:React.FC<DetailPropos> = ({ details }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Modal toggle button */}
            <button
                onClick={toggleModal}
                type="button"
                className="cursor-pointer block text-white hover:bg-gray-100
                focus:ring-4 focus:outline-none font-medium
                rounded-2xl text-sm p-1 text-center
                dark:hover:bg-gray-100 dark:focus:ring-blue-800"
            >
                <Text color="#787878" />
            </button>

            {/* Main modal */}
            {isModalOpen && (
                <div
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex justify-center items-center w-full p-4 overflow-y-auto overflow-x-hidden bg-black/50"
                >
                    <div className="relative w-full max-w-2xl max-h-full">
                        {/* Modal ui-ux */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {details.name}
                                </h3>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="text-start p-4 md:p-5 space-y-4">
                                <div className="py-0.1">
                                    <Badge color={details.stateIndex} content={details.state}></Badge>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-500">
                                    {details?.email}
                                </p>
                                <small className="text-base text-gray-600 dark:text-gray-500">
                                    {details?.telephone}
                                </small> <br/>
                                <small className="text-base text-gray-600 dark:text-gray-500">
                                    {details?.event}
                                </small> <br/>
                                <small className="text-base text-gray-600 dark:text-gray-500">
                                    {details?.orderingDate}
                                </small>
                            </div>
                            {/* Modal footer*/}
                            <div
                                className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <ModalContinue
                                    title="Supprimer"
                                    message="Are you sure you want to delete this product?"
                                    onConfirm={closeModal}
                                />
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="cursor-pointer py-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Invalider
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default ModalDetailsTickets;