import {type NextPage} from "next";
import Head from "next/head";
import {useSession} from "next-auth/react";
import {api, type RouterOutputs} from "~/utils/api";
import {useState} from "react";
import {useRouter} from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import bg from "../../locales/bg";
import de from "../../locales/de";
import it from "../../locales/it";
import lt from "../../locales/lt";
import UploadForm from "~/components/SingleFileUploadForm";
import Test from "react-dropzone/typings/tests/all";
import {Header} from "~/components/Header";
import Link from "next/link";


// https://www.youtube.com/watch?v=J1gzN1SAhyM


const Home: NextPage = () => {


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
            <Head>
                <title>Erasmus+ projektas</title>
                <meta name="description" content="Generated by create-t3-app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Summer styles are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                This year, our new summer collection will shelter you from the harsh elements of a world
                                that doesn't care
                                if you live or die.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div
                                        className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div
                                                    className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {!session?.user?.email ?
                                    (
                                        <Link
                                            href="/registration"
                                            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                        >
                                            Register to platform
                                        </Link>
                                    ) : null

                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;

//type Topic = RouterOutputs["topic"]["getAll"][0];

// const Content: React.FC = () => {
//   const { data: sessionData } = useSession();
//   const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
//   const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
//     undefined,
//     { enabled: sessionData?.user !== undefined,
//       onSuccess: (data) => {
//         setSelectedTopic(selectedTopic ?? data[0] ?? null);
//       }
//     }
//   );
//
//
//   const createTopic = api.topic.create.useMutation({
//     onSuccess: () => {
//       void refetchTopics();
//     },
//   });

//   return (
//     <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
//       <div className="px-2">
//         <ul className="menu rounded-box w-56 bg-base-100 p-2">
//           {topics?.map((topic) => (
//             <li key={topic.id}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelectedTopic(topic);
//                 }}
//               >
//                 {topic.title}
//               </a>
//             </li>
//           ))}
//
//         </ul>
//         <div className="divider"></div>
//         <div className="col-span-3">
//           <input
//             type="text"
//             placeholder="New Topic"
//             className="input-bordered input input-sm w-full"
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 createTopic.mutate({
//                   title: e.currentTarget.value
//                 });
//                 e.currentTarget.value = "";
//               }
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
