export const CircularLoader = () => {
    return (
        <div className="relative inline-flex justify-center items-center">
            {/* Cercle de fond */}
            <div className="w-7.5 h-7.5 rounded-full border-4 border-gray-200"></div>

            {/* Arc animé */}
            <div className="absolute w-7.5 h-7.5 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
        </div>
    );
};