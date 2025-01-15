// var tl=gsap.timeline()

// tl.to("#box1",{
//     x:1200,
//     duration:2,
//     scale:0.5,
//     rotate:360,
//     // backgroundColor:"royalblue",

// })

// tl.to("#box2",{
//     x:1200,
//     duration:2,
//     scale:0.5,
//     rotate:360,
//     // backgroundColor:"royalblue",

// })
// tl.to("#box3",{
//     x:1200,
//     duration:2,
//     scale:0.5,
//     rotate:360,
//     // backgroundColor:"royalblue",

// })

// gsap.from("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"royalblue",

// })



// new file 

var tl=gsap.timeline()

gsap.from("#nav h3",{
    y:-50,
    duarion:1,
    delay:0.4,
    opacity:0,
    stagger:0.2,


})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4,

})


tl.from("img ",{
        x:100,
        roatte:45,
        opacity:0,
   duarion:0.5,
   stagger:0.5,
})

