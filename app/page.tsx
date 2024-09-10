import Image from "next/image";
import Link from 'next/Link'
import './page.css';
export default function Home() {
  return (
   <div>
   <h1>Welcome to the Chat Page</h1>
    <Link class="Message" href={'/UserPage/'}> User Page  </Link>
    <Link class="Message" href={'/MessageInput/'}> Message Input  </Link>
   </div>
  );
}
