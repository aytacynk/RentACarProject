/* Teklif Form Code */
function SaveForm() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();

    if ((name == "") || (email == "") || (phone == "") || (message == "")) {
        alert("Lütfen Formu Eksiksiz Olarak Doldurunz!");
    }
    else {
        alert("Mesajınız alınmıştır.En kısa sürede size geri dönüş yapacağız!");
        $.ajax({
            method: "POST",
            url: "/Home/Contact",
            data: { 'name': name, 'email': email, 'phone': phone, 'message': message }
        });
    }
}

/* ------------- */
/* Teklif Form JS Code END */
