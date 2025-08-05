export function PlaceholderCard({ height = "h-80", gradient = false, rightPanel = false }) {
 const baseClasses = `rounded-xl border border-gray-200 shadow-sm w-full flex transition-all duration-200 hover:shadow-md ${height}`;
  const backgroundClasses = gradient
   ? "bg-gradient-to-br from-pink-100 via-indigo-50 to-blue-50"
   : "bg-white";
  return (
   <div className={`${baseClasses} ${backgroundClasses}`}>
     <div className="text-left p-6 flex flex-col w-full">
       {gradient ? (
         <div>
           <h2 className="text-xl font-semibold mb-3">AI action items</h2>
           <span className="text-gray-600 leading-relaxed">
             AI reviews each response and determines if<br />
             you need to take action. Soon, AI can do action<br />
             items for you.
           </span>
         </div>
       ) : rightPanel ? (
         <div className="flex pb-10 items-start h-full">
           <img className="rounded-xl max-w-96 max-h-fit px-10 h015 object-contain" src="side.png" alt="Side panel content" />
         </div>
       ) : (
         <div>
           <h1 className="text-xl font-semibold mb-3">AI survey setup</h1>
           <span className="text-gray-600 leading-relaxed">
             Type a short sentence about what you want to<br />
             learn, and AI will create an entire project for you.
           </span>
         </div>
       )}
     </div>
   </div>
 );
}


// For a chat bubble-like UI
export function PlaceholderChat({ height = "h-96" }) {
 return (
   <div className={`rounded-xl bg-white border border-gray-200 shadow-sm w-full flex flex-col justify-between p-6 transition-all duration-200 hover:shadow-md ${height}`}>
     <div className="flex flex-col">
       <h2 className="text-xl font-semibold mb-3">AI conversations</h2>
       <span className="text-gray-600 leading-relaxed">
         Users chat with AI as they answer your<br />
         questions, providing an awesome personalized<br />
         experience.
       </span>
     </div>
    
     <div className="flex justify-end items-end mt-4">
       <img className="max-w-full max-h-52 object-contain" src="chat.png" alt="Chat interface" />
     </div>
   </div>
 );
}

