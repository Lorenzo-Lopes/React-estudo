import { useState } from "react"
function Condicional(){
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()
  
  function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)

  }
  function limparEmail(){
    setUserEmail('')
  }
  return(
    <div>
      <form>
        <input 
        type="email"
        placeholder="Digite seu email"
        onChange={(e)=> setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>Enviar Email</button>
        {userEmail &&(
          <div>
            <p>O email do usuario é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar Email</button>
          </div>
          
        )}
      </form>
    </div>
  )
}
export default Condicional