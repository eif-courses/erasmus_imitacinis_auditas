/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {PhotoIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
// @ts-ignore
import Datepicker from "react-tailwindcss-datepicker";
import Editor from "~/components/Editor";

export default function TaskDetails() {


    const [valueCalendar, setCalendarValue] = useState({
        startDate: new Date(),
        endDate: new Date()
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
    return (
        <form>

            <div className="ml-5 mr-5">
                <div className="col-span-full">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                        Title
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={"Interview Company CEO"}
                            autoComplete="given-name"
                            className="block w-full px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


                <div className="col-span-full mt-2">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium leading-6 text-gray-900">
                        Deadline
                    </label>
                    <div
                        className="block w-full px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <Datepicker
                            value={valueCalendar}
                            onChange={handleCalendarValueChange}
                        />
                    </div>
                </div>


                <div>


                    <div className="col-span-full">
                        <label htmlFor="about" className="block py-2 text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>

                        <Editor/>
                    </div>


                </div>
                <div className="">


                    <div className="mt-2">
                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Visibility</legend>
                            <div className="mt-2">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="taskvisibility"
                                            name="taskvisibility"
                                            type="checkbox"
                                            checked={true}
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="taskvisibility" className="font-medium text-gray-900">
                                            Task is public
                                        </label>

                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="mt-2 mb-5 mr-5 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
