# javascript-form-validation

Videoda birlikte hazırladığımız validasyon işlemlerinin kaynak kodları.

## Kullanım

Tek yapmanız gereken basit bir form oluşturmak

```html
<form action="api/add-post" id="form1" method="post" novalidate>
    <ul>
        <li>
            <input type="text" placeholder="Post Title" name="title" required>
        </li>
        <li>
            <textarea name="description" placeholder="Post Description" required></textarea>
        </li>
        <li>
            <button type="submit">Gönder</button>
        </li>
    </ul>
</form>
```
Daha sonra birlikte hazırladığımız `validation.js` dosyasını sayfaya dahil etmek

```html
<script src="./validation.js"></script>
```

Ve `form` etiketinizi seçerek işlemi gerçekleştirmeniz.

```javascript
const form1 = document.getElementById('form1')
form1.watchValidate(); // form öğelerini dinler
form2.addEventListener('submit', function(e) {
    e.preventDefault()
    this.validate(); // form öğelerinin geçerliliğini kontrol eder
    this.sendIfIsValid(); // tüm form öğeleri başarılıysa `action` adresine post işlemi gönderir
})
// post işlemi sonucunu döner
form2.getResult(function(e){
    console.log(e.currentTarget.response); // dönen değer
})
```

Daha fazl detayı `index.html` dosyasındaki örnekte bulabilirsiniz.