const team = {
  _players:[
    {firstName:'Dhoni' ,lastName:'MS',age:38},
    {firstName:'Virat' ,lastName:'Kohli',age:31},
    {firstName:'Rohith' ,lastName:'Sharma',age:33},
  ],
  _games:[
    {
      opponent:'Australia',teamPoints:'200',opponentPoints:250,
    },
    {opponent:'NewZealand',teamPoints:'250',opponentPoints:200,},
    {opponent:'England',teamPoints:'320',opponentPoints:250,}
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
  addGame(opponent, teamPoints, opponentPoints){
   const newGame = {
     opponent, 
     teamPoints, 
     opponentPoints,
   };
   this.games.push(newGame);
  }
};

//console.log(team.players);
//console.log(team.games);
//adding more players to team
team.addPlayer('Dinesh','Karthik',33);
team.addPlayer('Ravindra','Jadeja',3);
team.addPlayer('Rahul','KL',28);
//adding more games to games
team.addGame('Srilankha',250,280);
team.addGame('Pakistan',320,250);
team.addGame('Bangladesh',280,20);
//console.log('---------------');
//console.log(team.players);
//console.log(team.games);
//printing th players in the team
console.log('Players in the Team');
for(let player in team.players){
  console.log(`${team.players[player].firstName},${team.players[player].lastName},${team.players[player].age}`);
};

//printing info abt matches
console.log('Match Results');
for(let game in team.games){
  const t=team.games[game].teamPoints;
  
  const opp = team.games[game].opponentPoints;
  console.log(`Your opponent team is ${team.games[game].opponent}`);
  if(t > opp){
    console.log(`Your team  won the match with ${t-opp} runs`);
  }else{
    console.log(`Your team  lost the match with ${opp-t}  runs`);
  }
}