class Toast{
    _defaultOptions={
        duration:500
    }
     
    constructor(options = {}){
        this.configs = {...this._defaultOptions,...options}       
    }

    show(message,type){
        const container = this._buildAppendContainer()

        const messageElemet = this._buildMesssage(message,type)

        container.appendChild(messageElemet);
        // document.body.appendChild(container);
        this._destroyMessage(messageElemet)
    }

    _buildAppendContainer(){
        if(!this._container) {
            this._container = this._buildElement('toast-container');
            document.body.appendChild(this._container);
        }
        return this._container
    }

    _buildMesssage(message,type){
        const messageElement= this._buildElement('toast-message');
        messageElement.classList.add(`toast--${type}`)
        messageElement.innerText = message;
        return messageElement
    }

    _buildElement(className){
        const elem = document.createElement('div');
        elem.classList.add(className)
        return elem   
    }

    _destroyMessage(message){
        setTimeout(()=>{
            if(!this._container.children.length){
                this._container.children.remove()
            }
            message.remove()  
        },this.configs.duration)
    }

}





/*function toast(messageText, duration) {
  const message = document.querySelector(".toast");
  message.classList.add("toast--show");
  message.innerText=messageText;
  setTimeout(() => {
    message.classList.remove("toast--show");
  }, duration);
}
*/


