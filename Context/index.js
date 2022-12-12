import React,{createContext, useContext, useState} from 'react'

// const ProviderContext = createContext(null);

// export const useAppProvider = useContext(ProvideContext);

const ProvideContext = ({children}) => {
    const [favorites,setFavorite] = useState([]);
    const handleSave = id => {
    setFavorite([...favorites,id]);
};
//   return (
//     <ProviderContext.Provider value={{handleSave,favorites}}>
//       {children}
//     </ProviderContext.Provider>
//   )
}

export default ProvideContext
