// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { useState } from "react";
// import LazyVideo from "./LazyVideo";
// 
// import food from "@/assets/food.mp4";
// import f from "@/assets/f.mp4";
// import p11 from "@/assets/p1.mp4";
// import p22 from "@/assets/p2.mp4";
// import v from "@/assets/v.mp4";
// import v1 from "@/assets/v1.mp4";
// 
// import p1Img from "@/assets/p1.jpg";
// import p2Img from "@/assets/p2.jpg";
// import h1Img from "@/assets/hero-1.jpg";
// import h2Img from "@/assets/hero-2.jpg";
// import h3Img from "@/assets/hero-3.jpg";
// import sVideoImg from "@/assets/service-video.jpg";
// 
// const stories = [
//   { src: food, poster: sVideoImg, title: "Curry Culture", tag: "2 MILLION+ VIEWS" },
//   { src: v, poster: h2Img, title: "Aagaaz", tag: "BRAND FILM" },
//   { src: p11, poster: p1Img, title: "Khwab", tag: "1 MILLION+ VIEWS" },
//   { src: f, poster: h1Img, title: "YFL Appliance", tag: "FIRST EVER" },
//   { src: p22, poster: p2Img, title: "Creator House", tag: "INDIA'S FIRST" },
//   { src: v1, poster: h3Img, title: "Culture Studio", tag: "SIGNATURE" },
// ];
// 
// export default function StoriesSection() {
//   const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
//   const [visibleCount, setVisibleCount] = useState(6);
// 
//   return (
//     <section className="py-20 md:py-32 px-4 md:px-8 bg-black -mt-[1px]">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-14 md:mb-20"
//         >
//           <p className="font-montserrat text-[10px] md:text-[11px] font-[700] uppercase tracking-[0.35em] text-accent mb-5">
//             Our Works
//           </p>
//           <h2 className="font-display text-[48px] sm:text-[72px] md:text-[110px] lg:text-[140px] leading-[0.9] uppercase text-white">
//             Stories we<br className="md:hidden" /> have told
//           </h2>
//         </motion.div>
// 
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {stories.slice(0, visibleCount).map((story, i) => (
//             <motion.div
//               key={story.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{
//                 duration: 0.7,
//                 delay: (i % 3) * 0.1,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-video bg-black"
//               onMouseEnter={() => setHoveredIdx(i)}
//               onMouseLeave={() => setHoveredIdx(null)}
//             >
//               <LazyVideo
//                 src={story.src}
//                 poster={story.poster}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 preload="metadata"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
// 
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
// 
//               <motion.div
//                 animate={{
//                   scale: hoveredIdx === i ? 1.1 : 1,
//                   opacity: hoveredIdx === i ? 1 : 0.85,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0 flex items-center justify-center pointer-events-none"
//               >
//                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-2xl">
//                   <Play className="w-5 h-5 md:w-6 md:h-6 text-black fill-black ml-1" />
//                 </div>
//               </motion.div>
// 
//               <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 pointer-events-none">
//                 <p className="font-montserrat text-[9px] md:text-[10px] font-[700] uppercase tracking-[0.2em] text-accent mb-1.5">
//                   {story.tag}
//                 </p>
//                 <h3 className="font-display text-[22px] md:text-[28px] uppercase text-white leading-tight">
//                   {story.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
// 
//         {visibleCount < stories.length && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="flex justify-center mt-12"
//           >
//             <button
//               onClick={() => setVisibleCount(stories.length)}
//               className="font-montserrat text-[11px] font-[700] uppercase tracking-[0.25em] text-foreground border-b-2 border-foreground pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
//             >
//               Load More
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }
