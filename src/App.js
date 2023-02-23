import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import profilePic from "./34p.jpg";
import {
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { createClient } from '@supabase/supabase-js'
import Icon from './Icon';


function App() {
  const supabase = createClient(process.env.REACT_APP_SUPABASE_PROJ_URL, process.env.REACT_APP_SUPABASE_PROJ_KEY)
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getLinks() {
      setLoading(true);
      try {
        const linksData = await supabase.from('links').select()
        setLinks(linksData.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
  
    getLinks()
  }, [])

  return (
    <div className="App">
      <div className="App-header container mx-auto">
        <img src={profilePic} className="profile-pic w-20 h-20 mb-4 rounded-full" alt="logo" />
        {
          loading ? 
            <p>Please wait while I get my links ready...</p>
            :
            <ul className='flex flex-col w-full'>
            {
              links && links.map((link, index) => (
                <li key={index} className='cursor-pointer m-2 py-3 px-10 border-black border-2 text-sm md:text-md text-slate-900'>
                  <a href={link.url} className='flex items-center' title={link.title} target="_blank" rel='noreferrer'>
                    <Icon iconName={link.icon} /><p className='ml-3'>{link.title}</p>
                  </a>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
