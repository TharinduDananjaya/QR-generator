const user_name = document.querySelector('.user-name');
const user_email = document.querySelector('.user-email');
const user_phone = document.querySelector('.user-phone');
const generateButton = document.querySelector('.generate-qr');
const loader = document.querySelector('.loader');
const qrImage = document.querySelector('.qr-image');



generateButton.onclick = async () => {
    qrImage.src = '';
    let userNameValue = user_name.value;
    let userEmailValue = user_email.value;
    let userPhoneValue = user_phone.value;
    
    let allValues = `${userNameValue} ${userEmailValue} ${userPhoneValue}`;
 
    loader.style.display = 'block';

    if(userNameValue.length == 0 || userEmailValue.length == 0 || userPhoneValue.length == 0){
        alert('Enter valid details');
        loader.style.display = 'none';
    }else{
    let imageSource = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${allValues}`;
    let data = await fetch(imageSource);
    let response = await data.blob();
    //binary large object 
    let url = URL.createObjectURL(response);

    qrImage.src = url;
    loader.style.display = 'none';
    }
 }







