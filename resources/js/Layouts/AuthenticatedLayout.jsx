import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children, locale, setLocale, translate }) {

    const user = usePage().props.auth.user;


    const setLanguage = (value) => {
        setLocale(value);
        localStorage.setItem('locale', value);
    }

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="w-full bg-gray-100 pb-8">
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <img
                                    id="background"
                                    className="absolute -left-20 top-0 max-w-[877px]"
                                />
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex ">
                                {
                                    user.is_admin ?
                                        <NavLink
                                            href={route('admin.dashboard')}
                                            active={route().current('admin.dashboard')}
                                        >
                                            {locale == 'en' ? 'Admin Page' : "Admin stranica"}
                                        </NavLink>
                                        : null
                                }
                                {
                                    !user.is_admin ?
                                        <NavLink
                                            href={route('dashboard')}
                                            active={route().current('dashboard')}
                                        >
                                            {locale == 'en' ? 'Dashboard' : translate["Dashboard"]}
                                        </NavLink>

                                        :
                                        null
                                }
                                <div className="flex gap-2 justify-end items-center">
                                    <div className={"w-8 h-8 hover:cursor-pointer p-5 rounded-md shadow-md flex justify-center items-center  hover:bg-gray-100 hover:text-blue-500 hover:underline " + (locale == 'en' ? "bg-gray-300 text-white  " : null)} onClick={e => setLanguage('en')}>en</div>
                                    <div className={"w-8 h-8 hover:cursor-pointer p-5 rounded-md shadow-md flex justify-center items-center  hover:bg-gray-100 hover:text-blue-500 hover:underline " + (locale == 'sr' ? "bg-gray-300 text-white " : null)} onClick={e => setLanguage('sr')}>sr</div>
                                </div>


                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            {locale == 'en' ? 'Profile' : translate['Profile']}
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            {locale == 'en' ? 'Logout' : translate['Logout']}
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        {!user.is_admin ?
                            <ResponsiveNavLink
                                href={route('dashboard')}
                                active={route().current('dashboard')}
                            >
                                {locale == 'en' ? 'Dashboard' : translate["Dashboard"]}
                            </ResponsiveNavLink>
                            :
                            null
                        }
                        {
                            user.is_admin ?
                                <ResponsiveNavLink
                                    href={route('admin.dashboard')}
                                    active={route().current('admin.dashboard')}
                                >
                                    {locale == 'en' ? 'Admin Page' : "Admin stranica"}
                                </ResponsiveNavLink>
                                : null
                        }
                        <div className="flex gap-2 justify-start items-center p-1">
                            <div className={"w-8 h-8 hover:cursor-pointer p-5 rounded-md shadow-md flex justify-center items-center  hover:bg-gray-100 hover:text-blue-500 hover:underline " + (locale == 'en' ? "bg-gray-300 text-white  " : null)} onClick={e => setLanguage('en')}>en</div>
                            <div className={"w-8 h-8 hover:cursor-pointer p-5 rounded-md shadow-md flex justify-center items-center  hover:bg-gray-100 hover:text-blue-500 hover:underline " + (locale == 'sr' ? "bg-gray-300 text-white " : null)} onClick={e => setLanguage('sr')}>sr</div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                {locale == 'en' ? 'Profile' : translate["Profile"]}
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                {locale == 'en' ? 'Logout' : translate['Logout']}

                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>

                </header>
            )}

            <main >

                {children}
            </main>
        </div>
    );
}
