import { useState } from 'react';
import {EventItem, EventStateValue} from "../../core/models/events.ts";
import {EventService} from "../../core/services/event.service.ts";

const ModalFormEvents = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<EventItem>({
        libelle: '',
        date: '',
        duration: 0,
        state: '',
        description: ''
    });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        EventService.create(formData).then(r=>{
            console.log(r)
        }).finally(() => {
            alert("Evenement crée avec succès")
        })
        toggleModal();
    };

    return (
        <>
            {/* Toggle button */}
            <button
                onClick={toggleModal}
                type="button"
                className="cursor-pointer block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Nouveau
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    tabIndex={-1}
                    aria-hidden={!isModalOpen}
                    className="fixed inset-0 z-50 flex justify-center items-center w-full p-4 overflow-y-auto overflow-x-hidden bg-black/50"
                >
                    <div className="relative w-full max-w-md max-h-full">
                        {/* Modal ui-ux */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Ajouter un évènement
                                </h3>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                            <form onSubmit={handleSubmit} className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="libelle"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Libelle
                                        </label>
                                        <input
                                            type="text"
                                            name="libelle"
                                            id="libelle"
                                            value={formData.libelle}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Libelle"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="duration"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Duration
                                        </label>
                                        <input
                                            type="number"
                                            name="duration"
                                            id="duration"
                                            value={formData.duration}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="2.5 (2h30)"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="date"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Duration
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="state"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Etat
                                        </label>
                                        <select
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            {EventStateValue.map(opt => <option value={opt.key}>{opt.value}</option>)}
                                        </select>
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="description"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Product Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={4}
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write product description here"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="cursor-pointer text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="me-1 -ms-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    Ajouter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalFormEvents;