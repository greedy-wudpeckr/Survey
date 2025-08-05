import { PlaceholderCard } from "./bento";
import {PlaceholderChat} from "./bento";


export default function FeedbackToolUI() {
 return (
   <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
     <div className="w-full max-w-6xl">
       {/* Heading */}
       <div className="text-center mb-12">
         <h1 className="text-4xl font-semibold mb-2 text-gray-900">
           Not your grandpa's survey tool
         </h1>
         <p className="text-lg text-gray-500">
           AI drives the entire feedback experience
         </p>
       </div>


       {/* Grid layout */}
       <div className="flex gap-6">
         <div className="flex flex-col gap-6">
           {/* Survey setup - span full width on mobile, large on desktop */}
           <div className="md:col-span-3">
             <PlaceholderCard  />
           </div>
           <div className="flex gap-6">
             {/* Action items */}
             <div className="md:col-span-1">
               <PlaceholderCard  gradient />
             </div>


             {/* AI conversations */}
             <div className="md:col-span-1">
               <PlaceholderChat  />
             </div>
           </div>
         </div>


         {/* AI insights */}
         <div className="md:col-span-1">
           <PlaceholderCard  rightPanel />
         </div>
       </div>
     </div>
   </div>
 );
}



