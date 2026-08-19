"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.
// Windows PowerShell
// PS C:\Users\User> node
// Welcome to Node.js v20.19.6.
// Type ".help" for more information.
// > 20+20
// 40
// > 3*3+(8-7)
// 10
// > 1566/3
// 522
// > (5+5)/2
// 5
// > .exit
// PS C:\Users\User>

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
console.log("Hello, JavaScript!");
// PS C:\Users\User\Desktop\startupistan-practice> cd .\JS-Exercises\
// PS C:\Users\User\Desktop\startupistan-practice\JS-Exercises> node lesson-01.js
// Hello, world!
// PS C:\Users\User\Desktop\startupistan-practice\JS-Exercises>

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.
// Node.js executed the last saved version of the file because I had not saved my changes.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.
// Both Node.js and Chrome executed the JavaScript code and displayed the result.
// They differed because Chrome ran the code in the browser, while Node.js ran it in the terminal.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.
// PS C:\Users\User\Desktop\startupistan-practice> node lesson-01.js
// node:internal/modules/cjs/loader:1210
//   throw err;
//   ^

// Error: Cannot find module 'C:\Users\User\Desktop\startupistan-practice\lesson-01.js'
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1207:15)
//     at Module._load (node:internal/modules/cjs/loader:1038:27)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
//     at node:internal/main/run_main_module:28:49 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }

// Node.js v20.19.6
// PS C:\Users\User\Desktop\startupistan-practice>

// I resolved the problem by navigating to the folder that contains the lesson-01.js file.

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
