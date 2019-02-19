function checkFields() {
    missinginfo = "";
    if (document.register.namn.value == "") {
    missinginfo += "\n - Namn";
    }
    if (document.ergister.ename.value == "") {
        missinginfo += "\n - Efternamn";
    }
    if (document.register.address.value == "") {
    missinginfo += "\n - Address";
    }
    if ((document.register.mail.value == "") || 
    (document.register.mail.value.indexOf('@') == -1) || 
    (document.register.mail.value.indexOf('.') == -1)) {
    missinginfo += "\n - Epost";
    }
    if(document.register.comments.value == "") {
    missinginfo += "\n - Kommentar";
    }
    if (missinginfo != "") {
    missinginfo ="_____________________________\n" +
    "Du har inte fyllt i fälten:\n" +
    missinginfo + "\n_____________________________" +
    "\nFyll i de angivna fälten innan du skickar formuläret!";
    alert(missinginfo);
    return false;
    }
    else return true;
    }