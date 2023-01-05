const borderSetting = document.querySelector('#validation-input')
borderSetting.addEventListener('blur', () =>{
    if(borderSetting.value.length > borderSetting.dataset.length) {
        borderSetting.classList.remove('valid')
        borderSetting.classList.add('invalid')
    } else {
        borderSetting.classList.remove('invalid')
        borderSetting.classList.add('valid')
    }
    console.log(borderSetting)
  }
)

