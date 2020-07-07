# Deno Random Prime Numbers
## Description
Generate random prime numbers with a desired bit-length and an optional number of tests.

## Usage
### Generate a Random Prime Number
`const prime = randomPrime(bitlength, tests)`

Where:
* `prime` is a `bigint`.
* `bitlength` is a `number`.
* `tests` is an optional `number` with a default value of 10.

**Example:**
```typescript
import { randomPrime } from "https://deno.land/x/random_prime/mod.ts";

// Generate a random 1024-bit prime number with 10 primality tests
var prime: bigint = randomPrime(1024)

// Generate a random 2048-bit prime number with 20 primality tests
var prime: bigint = randomPrime(2048, 20)
```
### Test if a BigInt is a Prime Number with Miller-Rabin
`const isPrime = isProbablePrime(candidate, tests)`

Where:
* `isPrime` is a `boolean`.
* `candidate` is a `bigint`.
* `tests` is an optional `number` with a default value of 10.

```typescript
import { isProbablePrime } from "https://deno.land/x/random_prime/mod.ts";

// Have a number to test for primality
const candidate: bigint = 167n;

// Check if candidate is a probable prime with 10 primality tests
isProbablePrime(number) ? console.log("probable prime") : console.log("composite");
```

## License
MIT License.