import Image from "next/image";

export function PlaceholderCard({ gradient = false, rightPanel = false }) {
  const baseClasses = `rounded-xl border border-gray-200 shadow-sm w-full flex-1 h-full flex transition-all duration-200 hover:shadow-md`;
  const backgroundClasses = gradient
    ? "bg-gradient-to-br from-pink-100 via-indigo-50 to-blue-50"
    : "bg-white";
  return (
    <div className={`${baseClasses} ${backgroundClasses}`}>
      <div className="flex flex-col w-full text-left">
        {gradient ? (
          <div className="p-6">
            <h2 className="mb-3 font-semibold text-xl">AI action items</h2>
            <span className="text-gray-600 leading-relaxed">
              AI reviews each response and determines if
              you need to take action. Soon, AI can do action
              items for you.
            </span>
          </div>
        ) : rightPanel ? (
          <div className="flex items-start p-4 pb-0 h-full">
              <Image
                height={350}
                width={300}
                src="side.png"
                alt="Side panel content" />
          </div>
        ) : (
          <div className="p-6">
            <h1 className="mb-3 font-semibold text-xl">AI survey setup</h1>
            <p className="max-w-sm text-gray-600 leading-relaxed">
              Type a short sentence about what you want to learn, and AI will create an entire project for you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


// For a chat bubble-like UI
export function PlaceholderChat() {
  return (
    <div className={`rounded-xl bg-white border border-gray-200 shadow-sm w-full flex flex-col justify-between p-6 transition-all duration-200 hover:shadow-md`}>
      <div className="flex flex-col">
        <h2 className="mb-3 font-semibold text-xl">AI conversations</h2>
        <span className="text-gray-600 leading-relaxed">
          Users chat with AI as they answer your
          questions, providing an awesome personalized
          experience.
        </span>
      </div>

      <div className="flex justify-end items-end mt-4">
        <Image
          height={300}
          width={500}
          className="object-contain"
          src="chat.png"
          alt="Chat interface" />
      </div>
    </div>
  );
}

