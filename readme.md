# Deno Random Prime Numbers
## Description
Generate random prime numbers with a desired bit-length.

## Usage
### Generate a Random Prime Number
```typescript
import { randomPrime } from "https://deno.land/x/random_prime/mod.ts";

// Generate a random 1024-bit prime number
const prime: bigint = randomPrime(1024)
```
### Test if an Integer is a Prime Number with Miller-Rabin
```typescript
import { isPrime } from "https://deno.land/x/random_prime/mod.ts";

// Have a number to test for primality
const number: bigint = 167n;

// Test for primality
isPrime(number) ? console.log("probable prime") : console.log("composite");
```

## License
MIT License.