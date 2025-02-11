/* FORM2 - Validação de Formulário - JS Básico */

// Captura o formulário e os campos de mensagens...
    let formulario2 = document.getElementById("form2")
    let msgUser = document.getElementById("msgUser") 
    let msgEmail = document.getElementById("msgEmail") 
    let msgSel = document.getElementById("msgSel")
    let msgRad = document.getElementById("msgRad")
    let msgCheck = document.getElementById("msgCheck")
    
// Declara as variáveis...    
    let userStr2, emailStr2, sel, err; 

// Ao clicar no botão de envio, o evento 'submit' é armazenado em 'event'...
formulario2.addEventListener("submit", function(event) {
// ...e assim, o envio padrão é cancelado: 
    event.preventDefault()
    
// Inicializa/limpa as variáveis de mensagens...
    err = 0
    msgUser.innerText = msgEmail.innerText = msgRad.innerText = msgSel.innerText = msgCheck.innerText = ""

// Captura o nome do usuário e verifica...
    
    userStr2 = document.getElementById("user2")
    if (userStr2.value.length <= 3 || userStr2.value == false) { 
        msgUser.innerText = "* Nome e sobrenome inválidos..."
        err++  
    }
    
// Captura o email digitado e verifica...
    
    emailStr2 = document.getElementById("email2").value;
    if (emailStr2.indexOf("@") < 0) { 
       msgEmail.innerText = "* E-mail inválido..."
       err++
    } 
    
// Captura os botões 'radio' (array)...
    let arrRadio2 = document.getElementsByName('enquete2')
    
// Verifica os botões 'arrRadio2' passados como argumento à 'radioValid()'...
    let opcaoRad = radioValid(arrRadio2) 
    
// Na função de verificação, 'arrRadio2' é recebido como parâmetro por 'botoes'...   
    function radioValid(botoes) { 
        let n = botoes.length 
        for(let i = 0; i < n; i++) { 
            if(botoes[i].checked) 
               return botoes[i].value 
        } 
    }  
    
// Se o retorno da função 'radioValid' for espaço (false), exibe mensagem de erro... 
   
    if (!opcaoRad) {
        msgRad.innerText = "* Selecione uma opção..."
        err++ 
    }  
    
// Captura a opção escolhida da Caixa de seleção (select)...    
    sel2 = document.getElementById("sel2").value; 
    
// Se o valor de sel2 for espaço (false), exibe mensagem de erro... 
    
    if (!sel2) {
       msgSel.innerText = "* Selecione uma opção..."
       err++ 
    }    
 
// Captura os botões 'checkbox' (array), semelhante ao botões 'radio'...
    let arrCheck2 = document.getElementsByName('check2[]')
    
// Verifica os botões 'arrCheck2' passados como argumento à 'checkValid()'...
    let opcaoCheck = checkValid(arrCheck2) 
    
// Na função de verificação, 'arrCheck2' é recebido como parâmetro por 'botoes'...
    
    function checkValid(botoes) { 
        let n = botoes.length 
        for(let i = 0; i < n; i++) { 
            if(botoes[i].checked) 
               return botoes[i].value 
        } 
    }  

// Se o retorno da função 'checkValid' for espaço (false), exibe mensagem de erro... 
    
    if (!opcaoCheck) {
        msgCheck.innerText = "* Selecione um hobby..."
        err++ 
    }     
      
// Verifica a ocorrência de erros em 'err'; se não houver, envia o formulário...
    
    if (!err) { 
// Informa os dados para o envio do formulário...        
       formulario2.action="mailto:beteweb@gmail.com?subject=Teste no GitHub&cc=bete@fatecsp.br&body=Conteúdo do email que será preenchido automaticamente"; 
       formulario2.method="post";
       formulario2.enctype="text/plain"; 
// Envia o formulário!        
       formulario2.submit();     
        
// Impressão dos dados do formulário na página só para teste...
       let resultado = document.getElementById('resultado');
        
       resultado.innerHTML = 
           `<p>${userStr2.value}</p>
            <p>${emailStr2}</p>
            <p>${opcaoRad}</p>
            <p>${sel2}</p>
            <p>${opcaoCheck}</p>`    
    } 

}) 
