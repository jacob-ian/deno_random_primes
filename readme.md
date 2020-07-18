# Deno Random Prime Numbers 🦕
A random prime number generator for Deno.

This module can generate a pseudorandom prime number with a `bigint` type from a:
* desired bit-length (e.g. 1024-bit); and
* an optional number of primality tests

**NOTE: This module is currently exposed to a variable time attack and therefore shouldn't be used for cryptography until further notice.**

*Created by Jacob Ian Matthews - [Website](https://jacobianmatthews.com)  | [GitHub](https://github.com/jacob-ian)*

## Usage
### Generate a Random Prime Number
`randomPrime(bitlength, tests)`

Where:
* `randomPrime()` returns a `bigint`.
* `bitlength` is a `number` that is >= 8.
* `tests` is an optional `number` with a default value of 5.

**Example:**
```typescript
import { randomPrime } from "https://deno.land/x/random_prime/mod.ts";

// Generate a random 1024-bit prime number with 5 primality tests
var prime: bigint = randomPrime(1024)

// Generate a random 2048-bit prime number with 10 primality tests
var prime: bigint = randomPrime(2048, 10)
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
## Performance Information
Increasing the number of primality tests and increasing the bit-length will decrease the speed of prime number generation. 

The probability that a composite number is incorrectly classified as a prime number decreases with an increased number of primality tests such that:

`P(misclassified)=(1/4)^t`

Where: 
* `t` is the number of tests.

## License
MIT License.

## References
The Miller-Rabin Primality Test algorithm was sourced from:<br>
Menezes, A., P. van Oorschot and S. Vanstone. 1996. *Handbook of Applied Cryptography*. Boca Raton, Florida: Taylor & Francis Group, LLC.


