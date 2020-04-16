class PrimeFinder {
  constructor(max){
    this.max = max;
    this.flags = []
    for(var i = 0; i < this.max; i++){
      this.flags.push(true);
    }
    this.prime = 2;
  }

  getPrimes(){
    while(this.prime < Math.ceil(Math.sqrt(this.max))){
      this.updateFlagsForMultiples();
      this.goToNextPrime();
    }
    this.printResult();
  }

  updateFlagsForMultiples(){
    for(var i = this.prime * this.prime; i < this.flags.length; i += this.prime){
      this.flags[i] = false;
    }
  }

  goToNextPrime(){
    let n = this.prime + 1
    while(!this.flags[n] && this.prime < this.flags.length){
      n++;
    }
    this.prime = n;
  }

  printResult(){
    let result = [];
    for(var j = 0; j < this.flags.length; j++){
      if(this.flags[j] == true){
        result.push(j);
      }
    }
    console.log(result);
  }
}

pf = new PrimeFinder(10).getPrimes();
