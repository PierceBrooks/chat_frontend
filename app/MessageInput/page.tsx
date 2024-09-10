import React from 'react';
import './MessageInput.css';
import './User1Layout.css';
import './UserPage.css';
import { FiSend } from 'react-icons/fi';

import Link from 'next/link'
export default function MessageInput() {
  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        placeholder="Type your message..."
      />
      <button className="send-button">
        <FiSend size={20} /> {/* Include the send icon */}
      </button>
       <Link  class="BTN_HOME" href="//"> <button>HomePage    </button></Link>
              <Link  class="BTN_HOME" href="/UserPage/"> <button>User Page   </button></Link>
    </div>
  );
}