"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the filter context type
type FilterType = {
  "Social Media Templates": boolean;
  "Acuity Scheduling Templates": boolean;
  "Logos/3D logos": boolean;
  "Canva Templates": boolean;
  "3D Mockups": boolean;
  "Party Banners-Flyers": boolean;
  "Shopify Themes": boolean;
};

type FilterContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  filters: FilterType;
  setFilters: Dispatch<SetStateAction<FilterType>>;
};

// Create the filter context with a default value
const FilterContext = createContext<FilterContextType>({
  open: false,
  setOpen: () => {},
  filters: {
    "Social Media Templates": true,
    "Acuity Scheduling Templates": true,
    "Logos/3D logos": false,
    "Canva Templates": false,
    "3D Mockups": true,
    "Party Banners-Flyers": false,
    "Shopify Themes": false,
  },
  setFilters: () => {},
});

// Create a custom hook to use the filter context
export const useFilter = () => useContext(FilterContext);

// Create the filter context provider component
type FilterProviderProps = {
  children: ReactNode;
};

export const FilterContextProvider: React.FC<FilterProviderProps> = ({
  children,
}) => {
  // State to manage checkbox values
  const [filters, setFilters] = useState<FilterType>({
    "Social Media Templates": true,
    "Acuity Scheduling Templates": true,
    "Logos/3D logos": false,
    "Canva Templates": false,
    "3D Mockups": true,
    "Party Banners-Flyers": false,
    "Shopify Themes": false,
  });
  const [open, setOpen] = useState(false);

  return (
    <FilterContext.Provider value={{ filters, setFilters, open, setOpen }}>
      {children}
    </FilterContext.Provider>
  );
};
