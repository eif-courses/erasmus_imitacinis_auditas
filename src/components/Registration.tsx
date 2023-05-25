import axios from "axios";
import useSWR from "swr";

export default function Registration() {


    const address = `https://randomuser.me/api/?results=6`;
    // @ts-ignore
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(address, fetcher);

    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;

    return (
        <>

            <div className="max-w-2xl mx-auto bg-white p-7">

                <form>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company PENCode</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                        </div>

                    </div>

                    <div className="flex mb-4 overflow-hidden select-none">

                        <label className="flex radio p-2 cursor-pointer">
                            <input className="my-auto transform scale-125" type="radio" name="sfg"/>
                            <div className="title px-2">I'm teacher</div>
                        </label>

                        <label className="flex radio p-2 cursor-pointer">
                            <input className="my-auto transform scale-125" type="radio" name="sfg"/>
                            <div className="title px-2">I'm student</div>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-700">Submit</button>
                </form>

                <p className="mt-5">These input field components is part of a larger, open-source library of Tailwind CSS components. Learn
                    more by going to the official <a className="text-indigo-600 hover:underline"
                                                     href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite
                        Documentation</a>.
                </p>
            </div>
       </>
    );
}
