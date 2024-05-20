import promptSync from 'prompt-sync'

const prompt = promptSync()

const user = {
  name: '',
  score: ''
}

let running = true

function getPlayerLevel (score) {
  // Se XP for menor do que 1.000 = Ferro
  // Se XP for entre 1.001 e 2.000 = Bronze
  // Se XP for entre 2.001 e 5.000 = Prata
  // Se XP for entre 5.001 e 7.000 = Ouro
  // Se XP for entre 7.001 e 8.000 = Platina
  // Se XP for entre 8.001 e 9.000 = Ascendente
  // Se XP for entre 9.001 e 10.000= Imortal
  // Se XP for maior ou igual a 10.001 = Radiante

  const levelByScores = {
    [score <= 1000]: 'Ferro',
    [score >= 1001 && score <= 2000]: 'Bronze',
    [score >= 2001 && score <= 5000]: 'Prata',
    [score >= 5001 && score <= 7000]: 'Ouro',
    [score >= 7001 && score <= 8000]: 'Platina',
    [score >= 8001 && score <= 9000]: 'Ascendente',
    [score >= 9001 && score <= 10000]: 'Imortal',
    [score >= 10001]: 'Radiante'
  }

  return levelByScores.true
}

function start () {
  while (running) {
    console.log('\n --Veja o nível do seu herói!-- \n')

    user.name = prompt('Qual o nome do herói? ')
    user.score = prompt('Quantos pontos de experiência ele possuí? ')
    console.log(`O Herói de nome **${user.name}** está no nível de **${getPlayerLevel(user.score)}** `)
    
    const runningInput = Number(prompt('Para ver nível de outro herói digite 1, para sair digite 2 ou CTRL+C: '))
  
    if (runningInput !== 1) {
      running = false
    }
  }

  console.log('Fim do jogo!')
}

start()
