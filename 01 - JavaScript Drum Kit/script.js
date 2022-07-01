window.addEventListener('keydown', (e) => {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   //selecionar a div referente a cada tecla por meio da classe key
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   console.log(key)
   if (!audio) return; //nao retorna null se for tecla sem audio associado
   audio.currentTime = 0; ///"rebobina" o audio para permitir acionamento antes da trilha encerrar
   audio.play()
   key.classList.add('playing')
})