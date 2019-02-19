function validateForm(kontakt)
{
     if(!kontakt.payment.selectedIndex)
    {
        alert ("Du måste välja ett betalsätt"); 
        kontakt.payment.focus();
        return false;
    }
       
else if (!kontakt.namn.value)
        {
        alert('Du måste ange För och efternamn.');
        kontakt.namn.focus();
        return false;
          }
 else if (!kontakt.adress.value)
        {
        alert('Du måste ange din adress');
        kontakt.adress.focus();
        return false;
        }
          else if (!kontakt.email.value)
          {
           alert('Du måste ange en e-postadress.');
             kontakt.email.focus();
             return false;
           }
                 
     else if (!kontakt.email.value || !kontakt.email.value.match(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) 
         {
         alert('Du måste fylla i en korrekt e-postadress.');
         kontakt.email.focus();
         return false;
         } 
    else if (!kontakt.password.value)
        {
        alert('Du måste ange ett lösenord');
        kontakt.password.focus();
        return false;
        }
                
    else if (kontakt.password.value.length<6 || kontakt.password.value.length>10)
        {
        alert("Lösenordet måste vara 6-10 tecken.");
        document.kontakt.password.focus();
        return false;
        }

    else if (!kontakt.repeatPassword.value)
        {
        alert('Du måste repetera lösenordet.');
        kontakt.repeatPassword.focus();
        return false;
        }

    else if (kontakt.repeatPassword.value!==kontakt.password.value)  
        {
        alert('Du måste upprepa lösenordet exakt likadant.');
        kontakt.repeatPassword.focus();
        return false;
        }
    else if (!kontakt.kommentar.value)
        {
        alert('Du måste skriva något om dig själv.');
         kontakt.kommentar.focus();
            return false;
                }
        else if (!document.kontakt.checkbox.checked) {
            alert("Du måste acceptera villkoren.");
        return false;
        }

    }
    
