import "./components/export"
console.log ("hola")
class AppContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const formContainer = this.ownerDocument.createElement('div');
      formContainer.innerHTML = `
        <form id="myForm">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required>
  
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
  
          <button type="button" onclick="submitForm()">Enviar</button>
        </form>
      `;
  
      this.shadowRoot?.appendChild(formContainer);
  
      // Agregar el script directamente aquí en lugar de un archivo separado
      const script = this.ownerDocument.createElement('script');
      script.textContent = `
        function submitForm() {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
  
          // Aquí puedes realizar acciones con los datos del formulario
          console.log('Nombre:', name);
          console.log('Email:', email);
        }
      `;
      this.shadowRoot?.appendChild(script);
    }
  }
  
  customElements.define('app-container', AppContainer);
  