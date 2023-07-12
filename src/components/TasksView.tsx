import axios from "axios";
import useSWR from "swr";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import bg from "../../locales/bg";
import en from "../../locales/en";
import fr from "../../locales/fr";
import de from "../../locales/de";
import it from "../../locales/it";
import lt from "../../locales/lt";
import Link from "next/link";
import React, {useRef, useState} from "react";
//import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'
// @ts-ignore
import parse from 'html-react-parser';
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// HOW TO USE QUIL https://www.simplenextjs.com/posts/react-quill

// CSS Modules, react-datepicker-cssmodules.css//
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Editor from "~/components/Editor";


export default function TasksView() {

    const [isVisible, setIsVisible] = useState(false)


    const isVisibleToggle = () => {
        setIsVisible(!isVisible);
    }

    const [startDate, setStartDate] = useState(new Date());


    const address = `https://randomuser.me/api/?results=6`;
    // @ts-ignore
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const {data, error} = useSWR(address, fetcher);

    const [toggle, setToggle] = useState(true)
    const [valueCalendar, setCalendarValue] = useState({
        startDate: new Date(),
        endDate: null
    });
    // @ts-ignore
    const handleCalendarValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setCalendarValue(newValue);
    }


    const [value, setValue] = useState('');
    const handleValueChange = (newValue: string) => {
        //console.log("newValue:", newValue);
        setValue(newValue);
    }

    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
    const router = useRouter();
    const {data: session} = useSession();
    const {locale} = router;
    const t =
        locale === 'bg' ? bg :
            locale === 'en' ? en :
                locale === 'fr' ? fr :
                    locale === 'de' ? de :
                        locale === 'it' ? it :
                            locale === 'lt' ? lt : en;
    return (
        <>


            <div className="flex flex-col justify-center h-full">

                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        {!session?.user?.email ?
                            (
                                <input type="text" placeholder="Search student by name"/>

                            ) : null

                        }
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Description</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Deadline</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Actions</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td className="p-2">
                                        <h2 className="font-bold">Task 1. Interview company CEO</h2>
                                        Lists are a part of everyday life.
                                            To-do lists determine what to get done. Navigational routes provide turn-by-turn lists of directions. Recipes provide lists of ingredients and lists of instructions. With a list for nearly everything, it’s easy to understand why they are also popular online.

                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">2024-07-22</div>

                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        <div
                                            className="relative bg-white p-2">
                                            <div className="mx-auto flex w-full max-w-md flex-row justify-around">

                                                <Link href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                         className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                                                    </svg>
                                                    Upload
                                                </Link>

                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-2">
                                        <h2 className="font-bold">Task 2. Write a Summary</h2>
                                        Lists are a part of everyday life.
                                        To-do lists determine what to get done. Navigational routes provide turn-by-turn lists of directions. Recipes provide lists of ingredients and lists of instructions. With a list for nearly everything, it’s easy to understand why they are also popular online.

                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">2024-07-22</div>

                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        <div
                                            className="relative bg-white p-2">
                                            <div className="mx-auto flex w-full max-w-md flex-row justify-around">

                                                <Link href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                         className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                                                    </svg>
                                                    Upload
                                                </Link>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}
