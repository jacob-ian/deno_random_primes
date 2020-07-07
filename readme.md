# Deno Random Prime Numbers
## Description
Generate random prime numbers with a desired bit-length and an optional number of tests.

## Usage
### Generate a Random Prime Number
`const prime: bigint = randomPrime(bitlength, tests)`

**Example:**
```typescript
import { randomPrime } from "https://deno.land/x/random_prime/mod.ts";

// Generate a random 1024-bit prime number with 10 primality tests
var prime: bigint = randomPrime(1024)

// Generate a random 2048-bit prime number with 20 primality tests
var prime: bigint = randomPrime(2048, 20)
```
### Test if a BigInt is a Prime Number with Miller-Rabin
`const isPrime: boolean = isProbablePrime(candidate, tests)`
```typescript
import { isProbablePrime } from "https://deno.land/x/random_prime/mod.ts";

// Have a number to test for primality
const number: bigint = 167n;

// Test for primality
isProbablePrime(number) ? console.log("probable prime") : console.log("composite");
```

## License
MIT License.