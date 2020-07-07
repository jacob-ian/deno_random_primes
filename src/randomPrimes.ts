/**
 * This file contains the methods to generate random prime numbers.
 * 
 * @module deno_random_primes
 * @author Jacob Ian Matthews
 * @version 1.0 07/07/2020
 */
/* IMPORTS */
import {
  randomBigIntBits,
  randomBigIntRange,
} from "https://deno.land/x/random_bigint@v1.2/mod.ts";

/**
 * Generate a probable random prime number from a bit-length.
 * @param bits the desired bit-length of the prime number.
 * @param tests the number of times to test the generated 
 * prime number for its prime status. (optional). Default is 10.
 * @return a prime number as a bigint
 */
export function randomPrime(bits: number, tests?: number): bigint {
  // Create a variable to store the random prime
  var prime = 0n;

  // Start a loop to generate a random integer with the correct
  // number of bits and tests its primality
  var found = false;
  while (!found) {
    // Generate a random integer
    const random = randomBigIntBits(bits);

    // Test its primality
    if (isProbablePrime(random, tests)) {
      // Let the prime to be outputted be the random integer
      prime = random;

      // End the loop
      found = true;
    }
  }
  // Return the probable prime number
  return prime;
}

/**
 * Test if a number is a probable prime number using Miller-Rabin.
 * @param cand the candidate prime number to test.
 * @param tests the number of tests to complete on the candidate (optional). Default is 10.
 * @return a boolean result of probable prime (true) or 
 * definite composite (false)
 */
export function isProbablePrime(cand: bigint, tests?: number): boolean {
  // Check that the number is positive
  if (cand < 1n) {
    // There aren't negative prime numbers
    return false;
  }
  // Check if it is 2 or 3
  if (cand === 2n || cand === 3n) {
    // It is a prime number
    return true;
  }
  // Ensure that the candidate is odd
  if (cand % 2n === 0n) {
    // Return false as it is even
    return false;
  }

  // Check if tests has been defined
  if (tests && tests >= 1) {
    // Complete the Miller-Rabin tests with the desired tests
    return millerRabin(cand, tests);
  } else {
    // Complete the Miller-Rabin test with the default number
    // of security tests. 10 tests gives a probabilty that the
    // candidate isn't a prime of (1/4)^10 = (9E-5) %.
    const defaultTests = 10;
    return millerRabin(cand, defaultTests);
  }
}

/**
 * A Miller-Rabin Primality test
 * @param integer An odd integer >= 3 to be tested for primality
 * @param security The number of times to repeat the test: >=1
 * @return true if integer is a probable prime
 */
function millerRabin(integer: bigint, security: number): boolean {
  // Check the input variables
  if (integer >= 3n && security >= 1) {
    // Show that integer - 1 = 2^s * r such that r is odd
    // TODO
    // Create a loop for the number of times the security desires
    for (var i = 0; i < security; i++) {
      // Choose a random base to make a test with
      const base = randomBigIntRange(2n, integer - 2n);

      // Compute y = base ^ r (mod integer)
      var y = modPow(base, r, integer);

      // Check the result of y
      if (y !== 1n && y !== integer - 1n) {
        // Create another loop
        var j = 0;
        while (j <= s - 1n && y !== integer - 1n) {
          // Compute the new value for y
          y = modPow(y, 2n, integer);

          // Check the result
          if (y === 1n) {
            // The number is definitely composite
            return false;
          }

          // Increment j
          j++;
        }
        // Check the value of y
        if (y !== integer - 1n) {
          // The number is definitely composite
          return false;
        }
      }
    }

    // Return that it is probably a prime
    return true;
  } else {
    // Return that it is composite
    return false;
  }
}

/**
   * Calculate the value of base^exponent (mod modulus) for BigInts.
   * @param base the value to be exponentiated
   * @param exponent the value of the exponent
   * @param modulus the modulus
   * @return a BigInt value of the calculation
   */
export function modPow(
  base: bigint,
  exponent: bigint,
  modulus: bigint,
): bigint {
  // Create the value variable and start it at 1
  var value = 1n;

  // Let the base equal its modulo
  var base = base % modulus;

  // Create a loop to loop through the exponent
  while (exponent > 0n) {
    // Check the modulus of the exponent and 2
    if (exponent % 2n === 1n) {
      // Add to the signature
      value = (value * base) % modulus;
    }

    // Bitwise decrease the exponent
    exponent = exponent >> 1n;

    // Change the message variable
    base = (base * base) % modulus;
  }

  // Return the final value
  return value;
}
