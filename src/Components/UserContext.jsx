import React, { createContext, useState } from 'react'
export const UserContext = createContext();
function UserContextProvider({children}) {
    const [searchValue,setSearchValue] = useState('');
    const [data,setData] = useState(null);
    const [results,setResults] = useState([]);
    const [wantedData,setWantedData] = useState({
      id: 1,
      name: "Michael Jackson",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
      intro: "Expertise in accounting and finance, specializing in financial statements and auditing.",
      rating: 4.8,
      reviewCount: 89,
      taskComplexity: "Basic to complex tasks",
      price: "€4,370",
      deliveryTime: "Delivers within 2 days",
      testimonial: {
        text: "Exceptional service in managing personal finances and deep understanding of financial markets.",
        author: "John Doe"
      }
    });
    console.log(wantedData);
  return (
    <UserContext.Provider value={{data,setData,searchValue,setSearchValue,results,setResults,wantedData,setWantedData}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider;