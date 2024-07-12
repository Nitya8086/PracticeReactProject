import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Navbar from "./components/Navbar";
import { IoMdSearch } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FaCirclePlus } from "react-icons/fa6";
import ContactCards from "./components/ContactCards";
import AddUpdate from "./components/AddUpdate";
import { db } from "./config/firebase";
import useDisclosed from "./hooks/useDisclosed";
import NotFoundContatct from "./components/NotFoundContatct";
const App = () => {

  const [contacts, setContact] = useState([]);
  
  const {isOpen,onOpen,onClose}=useDisclosed();

  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        const contactSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef,(contactSnapshot)=>{
          const contactList = contactSnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactList);
          return contactList;
        })
       
      } catch (error) {}
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filteredContacts);

      return filteredContacts;
    });
  };
  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex  gap-2">
        <div className="flex relative items-center ml-1 flex-grow">
          <IoMdSearch className="text-white text-3xl absolute" />
          <input
           onClick={ filterContacts}
            type="text"
            className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9"
          />
        </div>

        <FaCirclePlus  onClick={onOpen} className="text-5xl text-white cursor-pointer" />
      </div>
      <div className="mt-4 gap-3  flex flex-col">
        {contacts.length<=0?(
          <NotFoundContatct />)
          :(contacts.map((contact) => 
        <ContactCards key ={contact.id} contact={contact}/>)
        )}
      </div>
    </div>

   <AddUpdate onClose={onClose} isOpen={isOpen}/>
   <ToastContainer position="bottom-center"/>
       
    </>
  );
};

export default App;
