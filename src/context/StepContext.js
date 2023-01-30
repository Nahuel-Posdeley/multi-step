import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [firsName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddres, setEmailAddres] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [userData, setUserData] = useState({});
  const [data,setData] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (![firsName, lastName, contactNumber].includes("") && currentStep === 0){
      setCurrentStep(currentStep + 1)
      setUserData(Object.assign(userData, {
        'firsName': firsName,
        'lastName': lastName,
        'contactNumber': contactNumber,
      }));
    }else  if(![emailAddres,country,district].includes('') && currentStep === 1){
      setCurrentStep(currentStep + 1)
      setUserData(Object.assign(userData, {
        'emailAddres': emailAddres,
        'country': country,
        'district': district,
      }))
    } else if(![city,landmark,postalCode].includes('') && currentStep === 2){
      setCurrentStep(currentStep + 1)
      setUserData(Object.assign(userData, {
        'city': city,
        'landmark': landmark,
        'postalCode': postalCode,
      }));

       const getDataString = localStorage.getItem('userData');
       const dat = JSON.parse(getDataString);

       const updateData = []
       if(dat){
        console.log(dat)
        updateData.push(dat)
        updateData.push(userData)
        console.log('if')
       }else{
        console.log('else')
        updateData.push(userData)
       }
       console.log(updateData)

       const updateDataString = JSON.stringify(updateData);
       localStorage.setItem('userData', updateDataString);
      setData(userData)
    }
  }
  return (
    <Context.Provider
      value={{
        currentStep,
        setCurrentStep,
        firsName,
        setFirsName,
        lastName,
        setLastName,
        contactNumber,
        setContactNumber,
        emailAddres,
        setEmailAddres,
        country,
        setCountry,
        district,
        setDistrict,
        city,
        setCity,
        landmark,
        setLandmark,
        postalCode,
        setPostalCode,
        handleSubmit,
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const DataContext = () => {
  const data = useContext(Context);
  return data;
};
