// console.log(typeof  window);

// console.log(process.argv);
// process.stdout.write("hello \n");
process.stdin.resume();
process.stdin.on('data', function(data) { process.stdout.write('read from console: ' + data.toString());
});
// function inherit(p) {
//     if(p == null) throw TypeError();
//     if(Object.create) return Object.create(p);
//     let t = typeof p;
//     if(t !== "object" || t !== "function") throw TypeError();
//     function f(){};
//     f.prototype = p;
//     return new f();
// }
//
// function sendMessage( msg, obj ) {
//     console.log("arg: " + arguments);
//     if (arguments.length === 2 ){
//         obj.handleMsg( msg );
//     }else{
//         console.log( msg );
//     }
// }
//
// sendMessage( "Hello, World!" );
// sendMessage( "How are you?", {
//     handleMsg: function( msg ) {
//         alert( "This is a custom message: " + msg );
//     } });
//
// function strict( types, args ) {
//     if (types.length !== args.length ) {
//         throw "Invalid number of arguments. Expected " + types.length +
//         ", received " + args.length + " instead.";
//     }
//     for (let i = 0; i < args.length; i++ ) {
//     //如 JavaScript 某一项类型不匹配，则抛出异常
//         if ( args[i].constructor != types[i] ) {
//             throw "Invalid argument type. Expected " + types[i].name +", received " + args[i].constructor.name + " instead.";
//         }
//     }
// }
// function userList( prefix, num, users ) {
//     strict( [ String, Number, Array ], arguments );
//     for (let i = 0; i < num; i++ ) {
//         console.log(prefix + ": " + users[i] );
//     }
// }