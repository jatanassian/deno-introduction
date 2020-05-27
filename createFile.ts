// Create an encoder to use utf-8 encoding
const encoder = new TextEncoder();

const greetText = encoder.encode("Hello World\nPlaying around with Deno");

// No need to wrap in a function (like in Node) because we have a top level await
await Deno.writeFile("greet.txt", greetText);

// Run "deno run --allow-write createFile.ts" in the terminal
