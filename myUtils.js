
	
	 function isPrime(i) {
	
		if(i <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(i)) {
			if(i % div === 0) {
				return false;
			}
			div++;	
		}
		 
		 return true;
		
	}
	
  function printPrimes(primes){
	   for(let i=0; i<primes.length;i++){
		   console.log(primes[i]);
	  }

   }
   module.exports = {
	"printPrimes" :printPrimes,
	"isPrime":isPrime,
}