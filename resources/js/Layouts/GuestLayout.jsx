import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-800 pt-6 p-6 md:p-0 justify-center sm:pt-0">
            

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg shadow-lg shadow-black">
                {children}
            </div>
        </div>
    );
}
