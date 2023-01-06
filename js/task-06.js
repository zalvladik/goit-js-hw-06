const borderSetting = document.querySelector('#validation-input')
borderSetting.addEventListener('blur', () =>{
    if(borderSetting.value.length == borderSetting.dataset.length) {
        borderSetting.classList.remove('invalid')
        borderSetting.classList.add('valid')
    } else {
        borderSetting.classList.remove('valid')
        borderSetting.classList.add('invalid')
    }
    console.log(borderSetting)
  }
)

