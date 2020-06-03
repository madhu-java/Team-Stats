const team = {
  _players:[
    {firstName:'Dhoni' ,lastName:'MS',age:38},
    {firstName:'Virat' ,lastName:'Kohli',age:31},
    {firstName:'Rohith' ,lastName:'Sharma',age:33},
  ],
  _games:[
    {
      opponent:'Australia',teamPonits:'200',opponentPoints:250,
    },
    {opponent:'NewZealand',teamPonits:'250',opponentPoints:200,},
    {opponent:'England',teamPonits:'320',opponentPoints:250,}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName,age){
    const newPlayer = {
      firstName,
      lastName,
      age,
    };
   this.players.push(newPlayer);
  },
  addGame(opponentName, teamPoints, opponentPoints){
   const newGame = {
     opponentName, 
     teamPoints, 
     opponentPoints,
   };
   this.games.push(newGame);
  }
};

console.log(team.players);
console.log(team.games);
team.addPlayer('Dinesh','Karthik',33);
team.addPlayer('Ravindra','Jadeja',3);
team.addPlayer('Rahul','KL',28);
team.addGame('Srilankha',250,280);
team.addGame('Pakistan',320,250);
team.addGame('Bangladesh',280,20);
console.log('---------------');
console.log(team.players);
console.log(team.games);
