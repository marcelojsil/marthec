<motion.div
          className="absolute top-[35%] left-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_#ff6a00]"
          animate={{
          x: ["0vw", "100vw"],
         }}
          transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
         }}
/>


    <motion.div
  className="absolute inset-0 opacity-30 bg-cover bg-center"
  style={{
    backgroundImage: "url(/images/construcao-bg.png)",
  }}
  animate={{
    x: [-15, 15, -15],
    y: [-10, 10, -10],
  }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"
animate={{
backgroundPosition:[
"0px 0px",
"60px 60px"
]
}}
transition={{
duration:12,
repeat:Infinity,
ease:"linear"
}}
/>

           {[...Array(6)].map((_, i) => (
    <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_#ff6a00]"
        initial={{
            x: 0,
            y: 20 + i * 90,
        }}
        animate={{
            x: ["0vw", "110vw"],
        }}
        transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i,
        }}
    />
))}
