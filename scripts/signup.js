var form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log("working");
    var firstname = document.getElementById('firstname').value;
	var student_num = document.getElementById('school_num').value;
	sessionStorage.setItem('student_num', student_num);
	var email = document.getElementById('email').value;
	var gender = document.getElementById('gender');
	var gender_value = gender.options[gender.selectedIndex].value;
	console.log(gender_value);
	formData = new FormData();
	formData.append('firstname', firstname);
	formData.append('student_num', student_num);
	formData.append('email', email);
	formData.append('gender', gender_value);
    var request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if(request.readyState == 4 && request.status == 200)
			{
				alert(request.responseText);
			}
		}
		request.open('POST', 'signup.php');
		request.send(formData);

    window.location = "sign2.html";
});


