const form1 = document.getElementById('form1');
form1.watchValidate();
form1.addEventListener('submit', function(e) {
    e.preventDefault();

    // tüm elemanları kontrol et
    this.validate();

    // formu gönder
    this.sendIfIsValid();

    // alternatif olarak kendiniz formu kontorl edip gönderebilirsiniz
    // if (this.checkValidity()) {
    //     new FormData(form1)
    // }

});
form1.getResult(function(e) {
    console.log(e.currentTarget.response);
});


const form2 = document.getElementById('form2')
form2.watchValidate()
form2.addEventListener('submit', function(e) {
    e.preventDefault()
    this.validate()
    this.sendIfIsValid()
})
form2.getResult(function(e){
    console.log(e.currentTarget.response)
})