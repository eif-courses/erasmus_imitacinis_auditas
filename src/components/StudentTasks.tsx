import axios from "axios";
import useSWR from "swr";

export default function StudentTasks() {


    const address = `https://randomuser.me/api/?results=6`;
    // @ts-ignore
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(address, fetcher);

    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;

    return (
        <>


            <table className="border-collapse w-full">
                <thead>
                <tr>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Company
                        name
                    </th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Country</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                        KnobHome
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                        German
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                        <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">Approved</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline">View</a>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Archive</a>
                    </td>
                </tr>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                        Squary
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                        Schweden
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                        <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                    </td>
                </tr>
                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                        ghome
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                        Switzerland
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                        <span className="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">inactive</span>
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span
                            className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                        <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                    </td>
                </tr>
                </tbody>
            </table>


        </>

    );
}
