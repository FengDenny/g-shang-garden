export const FormValidation = (lang:string, nameType : string, name : string, id:string , setError: (value: string) => void) => {  

    nameType && document.getElementById(id)?.addEventListener("keyup", function() {
    const nameRegex = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    let nameInput =(document.getElementById(id) as HTMLInputElement)?.value.trim()

    console.log(name)

    if (!nameInput){
      lang === "en" ?  setError(`${name} is required.`) :  setError(`${name} 是必须的.`)
    }else if (
    (name === "Full name" || name ==="全名") && !nameType.match(nameRegex)
    || (name === "Email address" || name === "电子邮件地址") && !nameType.match(emailRegex)
    ) {
      lang === "en" ?  setError(`${name} is invalid.`) :  setError(`${name} 是无效的.`)
      } else {
        setError("");
      }
})
};

