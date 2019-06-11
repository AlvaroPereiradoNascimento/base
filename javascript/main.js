function sizeOfThings(){
  //Obter a largura total da sua janela (navegador)
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
 
  //Obter a largura total da sua tela jogando em uma variavel
  var screenWidth = screen.width;
  var screenHeight = screen.height;
 
  document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
  document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;
 
};
sizeOfThings();
 
window.addEventListener('resize', function(){
    sizeOfThings();
});

function width(){
  //Obter a largura total da sua janela (navegador)
  var windowWidth = window.innerWidth;
 
  //Obter a largura total da sua tela jogando em uma variavel
  var screenWidth = screen.width;
 
  document.querySelector('.window-size').innerHTML = windowWidth;
  document.querySelector('.screen-size').innerHTML = screenWidth;
 
};