# Deno Random Prime Numbers
Generate random prime numbers with a desired bit-length and an optional number of tests.

Created by Jacob Ian Matthews ([Website](https://jacobianmatthews.com)  | [GitHub](https://github.com/jacob-ian))

## Usage
### Generate a Random Prime Number
`randomPrime(bitlength, tests)`

Where:
* `randomPrime()` returns a `bigint`.
* `bitlength` is a `number` that is >= 8.
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
`isProbablePrime(candidate, tests)`

Where:
* `isProbablePrime()` returns a `boolean`.
* `candidate` is a `bigint`.
* `tests` is an optional `number` with a default value of 10.

**Example:**
```typescript
import { isProbablePrime } from "https://deno.land/x/random_prime/mod.ts";

// Have a number to test for primality
const candidate: bigint = 167n;

// Check if candidate is a probable prime with 10 primality tests
isProbablePrime(candidate) ? console.log("probable prime") : console.log("composite");
```
### Notes
The probability that a composite number is incorrectly classified as a prime number decreases with an increased number of primality tests such that:
`P=(1/4)^tests`.

## License
MIT License.
