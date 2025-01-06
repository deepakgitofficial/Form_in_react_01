// import React,{ createContext, useContext } from "react";

// export const DataContext = createContext('initial value');

// // custom hook create context
// // export const useCustomContext = () => {
// //     const mycontext = useContext(DataContext);
// //     return mycontext;
// //   }


// export const DataProvider = ({children}) => { 
//     // console.log(children,'children context')
//     const ContextCard1 = "ContextCard1: content ";

//     return (
//       <DataContext.Provider value={{ContextCard1}}>
//         {children}
//       </DataContext.Provider>
//     )
//   }