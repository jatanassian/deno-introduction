// Open the file
let file = await Deno.open("greet.txt");

// Output it to standard output (in the terminal)
await Deno.copy(file, Deno.stdout);

// Close the file
file.close();

// Run "deno run --allow-read readFile.ts" in the terminal
