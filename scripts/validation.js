function validation(mail, student_id) {
    var email = mail;
    var student_num = student_id;
    var data = JSON.parse(sessionStorage.getItem('DB_data'));

    for (i = 0; i < data.length; i++) {
        var db_email = data[i].email;
        var db_student_id = data[i].student_id;

        if (email == db_email || student_num == db_student_id) {
            return false;
        }
    }
    return true;
}

function validUsername(name) {
    var userName = name;
    var data = JSON.parse(sessionStorage.getItem('DB_data'));

    for (i = 0; i < data.length; i++) {
        var db_user = data[i].userName;

        if (userName == db_user) {
            return false;
        }
    }
    return true;
}