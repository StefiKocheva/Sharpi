function showMessageInEnglish() {
    let message = "";
    message = confirm("Are you sure you want to download this file?");

    if (message == true) {   
      return message;
    }
    else {
      return false;
    }
}

function showMessageInBulgarian() {
    let message = "";
    message = confirm("Сигурен ли си, че искаш да свалиш този файл?");
        
    if (message == true) {   
      return message;
    }
    else {
      return false;
    }
}