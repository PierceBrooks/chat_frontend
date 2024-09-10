import React from 'react';
import './User1Layout.css';
import './UserPage.css';
import ChatHistory from './ChatHistory';
import Link from 'next/link'
export default function UserLayout() {
  return (

    <div className="user-layout">
      <div className="user-left">
        <p>User 1</p>
      </div>
      <div className="chat-container">
        <div>
        <Link class="Message" href={'/MessageInput/'}> Message Input  </Link>
        <Link class="Message" href={'//'}> Home  </Link>
         <input type="text" Placeholder = "Enter UserName"/>
</div>
      </div>
      <div className="user-right">
        <p>User 2</p>
      </div>
    </div>
  );
}