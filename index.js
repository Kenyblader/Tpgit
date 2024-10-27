function maFonction ()
{
    console.log("ok")
    let x=document.getElementById("ip").value
    try{
        let y=eval(x)
        document.getElementById("op").innerText="le resultat de votre operation est "+y
    }catch{
        document.getElementById("op").innerText="Desole il y'a eu une erreur , Verifier votre operation et recommencer"
    }
    
}