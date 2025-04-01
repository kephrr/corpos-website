export default function Dashboard() {
    return <div className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 min-h-24 rounded-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                <p>Total des réservations</p>
                <p className="text-2xl font-semibold">39</p>
            </div>
            <div className="p-4 min-h-24 rounded-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                <p>Total mensuel</p>
                <p className="text-2xl font-semibold">19
                    <small className="font-regular text-sm text-green-500">+10%</small>
                </p>
            </div>
            <div className="p-4 min-h-24 rounded-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                <p>Evènements futurs</p>
                <p className="text-2xl font-semibold">4</p>
            </div>
        </div>
    </div>
        }