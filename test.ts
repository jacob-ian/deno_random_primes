/**
 * This file contains the tests for the Deno Random Primes module.
 * 
 * @author Jacob Ian Matthews
 * @version 1.0 07/07/2020
 */

// Import the generation and testing functions
import { randomPrime, isProbablePrime } from "./src/randomPrimes.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// Create a test for the module
Deno.test("Generate a Prime Number", () => {
  // Generate a 1024-bit random prime number
  const prime = randomPrime(1024, 3);

  // Log the generated number
  console.log(`\nPrime number generated: ${prime}`);

  // Assert that the number generated is a prime number
  assertEquals(isProbablePrime(prime), true);
});
