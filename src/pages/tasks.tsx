import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import {PaperClipIcon} from "@heroicons/react/20/solid";
import TaskUploader from "~/components/UploadTasks";
import Users from "~/components/Company";
import Registration from "~/components/Registration";
import Details from "~/components/Details";
import Profile from "~/components/Profile";
import Uploadthing from "~/pages/api/uploadthing";
import StudentTasks from "~/components/StudentTasks";


// https://www.youtube.com/watch?v=J1gzN1SAhyM
const Tasks: NextPage = () => {
  const { data: session } = useSession();
  // console.log(session?.user);
  // console.log(session?.user.role);
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<p>tokenas: {session?.user.username}</p>*/}
      {/*{*/}
      {/*  (session && session.user.role === 'ADMIN')*/}
      {/*    ? <h1>TU ESI ADMINAS</h1>*/}
      {/*    : <h1>TU ESI USERIS</h1>*/}
      {/*}*/}

      <div>
<StudentTasks/>
    <TaskUploader/>
      </div>
    </>
  );
};
export default Tasks;
