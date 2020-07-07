/**
 * This file contains the tests for the Deno Random Primes module.
 * 
 * @author Jacob Ian Matthews
 * @version 1.0 07/07/2020
 */

// Import the generation and testing functions
import { randomPrime, isPrime } from "./src/randomPrimes.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// Create a test for the module
Deno.test("Random Primes Test", () => {
  // Generate a 1024-bit random prime number
  const prime = randomPrime(1024);

  // Assert that the number generated is a prime number
  assertEquals(isPrime(prime), true);
});
