import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative w-full h-[60vh] min-h-[400px] flex items-end justify-start overflow-hidden border-b-2 border-border">
      {/* Background Image/Collage */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <img 
          src="images/artisan-1.jpg" 
          alt="Hero" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      <div className="container relative z-10 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-[10vw] leading-[0.9] tracking-tighter font-black text-foreground mix-blend-exclusion uppercase">
            ROOTS <span className="font-serif">培根计划</span>
            <span className="block text-[2.5vw] font-bold tracking-wide text-muted-foreground mt-4 font-serif italic normal-case">
              Where Creativity Takes Root (创意扎根之地)
            </span>
          </h1>
          
          <div className="mt-8 max-w-xl">
            <p className="text-xl font-body font-medium leading-relaxed">
              汇集全球优秀手工匠人与独立工作室。
              <br/>
              从陶瓷到玻璃，从木作到金工，探索器物背后的故事。
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
