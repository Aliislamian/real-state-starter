import React, {useState, useEffect, createContext} from 'react';

// import data 
import {housesData} from '../data';
// console.log(housesData);
// create context

export const HouseContext = createContext();

  const HouseContextProvider = ({children}) => {
  const [houses , setHouses] = useState(housesData);
  const [country , setCountry] = useState('Location(any)')
  const [countries , setCountries] = useState([])
  const [property , setProperty] = useState('Property Type (any)')
  const [properties , setProperties] = useState([]) 
  const [price , setPrice] = useState('price range (any)') 
  const [loading , setLoading] = useState(false) 

// SET HOUSE STATE
  useEffect(()=> {
    const allCounttries = houses.map((house) => {
      return house.country
    })
    // remove duplicates
    const unqiuecountres = ['location(any)', ...new Set(allCounttries)];
      setCountries(unqiuecountres)
  },[])

// SET PROPERTY STATE
  useEffect(()=> {
    const allProperties = houses.map((house) => {
      return house.type
    })
    // remove duplicates

    const unqiueProperties = ['location(any)', ...new Set(allProperties)];
    setProperties(unqiueProperties)
    // console.log("types =====>>>", unqiueProperties);

  }, [])

  const handleClick = () => {
    setLoading(true)
    // console.log(country, property, price);

    // create function that cheak if the stringe include (any)
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
      

    };

    // console.log("types =====>>>",isDefault(property));
    const minPrice = (parseInt(price.split(' ')[0]));
    // console.log(minPrice);
    const maxPrice = (parseInt(price.split(' ')[2]));
    // console.log(maxPrice);

    const newHouses = housesData.filter((house) => {
      // console.log("house type ", house.type);
     const housePrice = parseInt(house.price);

     // if all values are selected 

     if(house.country === country && house.type === property && house.price >= minPrice && house.price <= maxPrice) {
      return house
     }

    if(!isDefault(country) && isDefault(property) && isDefault(price)){
       return  house.country === country;
      
     };

     if(!isDefault(property) && isDefault(country) && isDefault(price)){
      return house.type === property; 
     }
     if(!isDefault(price) && isDefault(country) && isDefault(property)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house;
      }
     }

     if(!isDefault(country) && !isDefault(property) && isDefault(price)){
      return house.country === country && house.type === property;
     }

     if(!isDefault(country) && isDefault(property) && !isDefault(price)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house.country === country;
      }
     }
     if(isDefault(country) && !isDefault(property) && !isDefault(price)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house.type === property;
      }
     }
    });
    console.log(newHouses);
    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false);
    }, 1000)
  }

  return <HouseContext.Provider value={
    {
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick, 
      
    }
  }>
    {children}
    </HouseContext.Provider>;
};

export default HouseContextProvider;
