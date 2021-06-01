HTMLElement.prototype.validate = function() {
    [...this.elements].forEach(formElement => formElement.isValidElement())
}

HTMLElement.prototype.watchValidate = function() {
    [...this.elements].forEach(formElement => {
        ['change', 'keyup'].forEach(method => formElement.addEventListener(method, () => formElement.isValidElement()))
    })
}

HTMLElement.prototype.isValidElement = function() {
    let parent = this
    if (this.getAttribute('type') === 'radio' || this.getAttribute('type') === 'checkbox') {
        parent = this.closest('.checkbox-container') || this.closest('.radio-container')
    }
    if (!this.checkValidity()) {

        this.closest('li').classList.add('error')

        if (parent.nextElementSibling?.className !== 'error-msg') {
            const error = document.createElement('small')
            error.className = 'error-msg'
            error.innerText = this.validationMessage
            parent.insertAdjacentElement('afterend', error)
        } else {
            parent.nextElementSibling.innerText = this.validationMessage
        }

    } else {
        this.closest('li').classList.remove('error')
        if (parent.nextElementSibling?.className === 'error-msg') {
            parent.nextElementSibling.remove()
        }
    }
}

HTMLElement.prototype.sendIfIsValid = function() {
    if (this.checkValidity()) {
        new FormData(this)
    }
}

HTMLElement.prototype.getResult = function(callback) {
    this.addEventListener('formdata', function(e) {
        const data = e.formData
        var request = new XMLHttpRequest();
        request.open("POST", this.action);
        request.addEventListener('load', callback)
        request.send(data);
    })
}