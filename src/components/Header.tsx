import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/router";
import Nav from "~/components/nav";
import bg from "../../locales/bg";
import en from "../../locales/en";
import fr from "../../locales/fr";
import de from "../../locales/de";
import it from "../../locales/it";
import lt from "../../locales/lt";
import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
// @ts-ignore
export const Header = ({children}) => {
    const {data: sessionData} = useSession();

    const router = useRouter();
    const {locale} = router;
    const t =
        locale === 'bg' ? bg :
            locale === 'en' ? en :
                locale === 'fr' ? fr :
                    locale === 'de' ? de :
                        locale === 'it' ? it :
                            locale === 'lt' ? lt : en;


    const user = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
    const navigation = [
        {name: 'Home', href: '/', current: true, role: 'user'},
        {name: 'Home', href: '/', current: true, role: 'teacher'},
        {name: 'Students', href: '/students', current: false, role: 'teacher'},
        {name: 'Assignments', href: '/assignments', current: false, role: 'teacher'},
        {name: 'Assignments', href: '/assignments', current: false, role: 'user'},
        {name: 'Tasks', href: '/tasks', current: false, role: 'teacher'},
        {name: 'Profile', href: '/info', current: false, role: 'teacher'},
        {name: 'Profile', href: '/info', current: false, role: 'user'},
        {name: 'Manage', href: '#', current: false, role: 'user'},
    ]
    const userNavigation = [
        {name: 'Your Profile', href: '/info'},
        {name: 'Settings', href: '/manage'},
        {name: 'Sign out', href: '#'},
    ]




    // SIMPLE EXAMPLE TO MAKE A LINK PROTECTED
    // function ProtectedLink() {
    //     const {data: session} = useSession()
    //     return <Link href={session ? '/protected' : '/login?callbackUrl=/protected'} prefetch={!!session}};
    //         }




    // @ts-ignore
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({open}) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    item.role === sessionData?.user.role ? (<Link
                                                        prefetch={false}
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            router.pathname == item.href
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>): null
                                                ))}
                                                <Nav/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {/* Profile dropdown */}

                                            {sessionData?.user ?
                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <Menu.Button
                                                            className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                            <span className="sr-only">Open user menu</span>
                                                            <img className="h-8 w-8 rounded-full"
                                                                 src={sessionData?.user?.image ? sessionData.user.image : "profile.png"}
                                                                 alt=""/>
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            {userNavigation.map((item) => (
                                                                <Menu.Item key={item.name}>
                                                                    {({active}) => (
                                                                        <a
                                                                            href={item.href}
                                                                            onClick={() => item.name === 'Sign out' && signOut()}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100' : '',
                                                                                'block px-4 py-2 text-sm text-gray-700'
                                                                            )}
                                                                        >
                                                                            {item.name}
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                            ))}
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>

                                                : (
                                                    <button
                                                        type="submit"
                                                        onClick={() => signIn()}
                                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Sign In
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button
                                            className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (

                                        item.role === sessionData?.user.role ? ( <Link href={item.href} key={item.name}>
                                            <Disclosure.Button
                                                className={classNames(
                                                    router.pathname == item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        </Link>): null
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full"
                                                 src={sessionData?.user?.image ? sessionData.user.image : "profile.png"}
                                                 alt=""/>
                                        </div>
                                        <div className="ml-3">
                                            <div
                                                className="text-base font-medium leading-none text-white">{sessionData?.user?.name}</div>
                                            <div
                                                className="text-sm font-medium leading-none text-gray-400">{sessionData?.user?.email}</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                onClick={() => item.name === 'Sign out' && signOut()}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                        <Nav/>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{router.asPath.toUpperCase().substring(1) == "" ? "HOME" : router.asPath.toUpperCase().substring(1)}</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    );
};
