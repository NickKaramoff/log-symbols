import lib from '..';

// THROWS The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
console.log(10 * lib.info);

// THROWS Property 'sort' does not exist on type 'string'.
console.log(lib.info.sort());
