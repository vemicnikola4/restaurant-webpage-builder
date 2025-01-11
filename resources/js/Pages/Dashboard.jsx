import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center items-center h-fit ">
                <div className="mx-auto px-4 py-8 shadow-lg bg-white rounded-md w-2/4 w-full flex flex-col justify-center items-center ">
                    <div className="py-4">
                        <h1 className="text-xl md:text-4xl  text-center">
                            Create Your Web Page
                        </h1>
                    </div>
                    
                    <form className="w-full flex flex-col gap-2 items-center" action="">
                        <div className="py-4 w-full">
                            <input type="text" name="" id="" className="p-4 text-gray-700 border-0 border-b-2 border-b-gray-700 text-center focus:outline-none text-lg md:text-4xl focus:border-gray-500 focus:ring-1 focus:ring-gray-700 rounded-t-md focus:rounded-md w-full" placeholder='Type WebPage Title'/>
                        </div>
                        <div className="py-4 px-2 bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100 w-80">
                            CREATE
                        </div>
                        
                       
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
