
// all object 
 export  const initialState = {
    open: false,
    email: "",
    password: "",
  };

// here is open and close screen 
export function TheCloseAndOpen(data, setData) {


    const checkOut = data?.open === true ? false : true
    setData({
        ...data,
        open: checkOut
    })
}


// valdation 
export const TheValidation =(Name)=>{
  if(Name?.length === Number(3)) return true
  else false

}