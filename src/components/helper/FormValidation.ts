
export const formValidation = (nameType : string, name : string, id:string , setError: (value: string) => void) => {
    nameType && document.getElementById(id)?.addEventListener("keyup", function() {
    const nameRegex = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    let nameInput =(document.getElementById(id) as HTMLInputElement)?.value.trim()
    if (!nameInput){
        setError(`${name} is required.`);
    }else if (name === "Full name" && !nameType.match(nameRegex) || name === "Email" && !nameType.match(emailRegex)) {
        setError(`${name} is invalid.`);
      } else {
        setError("");
      }
})
};

