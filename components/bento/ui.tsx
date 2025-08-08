import { PlaceholderCard } from "./bento";
import { PlaceholderChat } from "./bento";


export default function FeedbackToolUI() {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-4 py-8 min-h-screen">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 font-semibold text-gray-900 text-4xl">
            Not your grandpa&apos;s survey tool
          </h1>
          <p className="text-gray-500 text-lg">
            AI drives the entire feedback experience
          </p>
        </div>

        {/* Grid layout */}
        <div className="flex items-stretch gap-6">
          {/* Left side (Survey setup + Action items + Conversations) */}
          <div className="flex flex-col flex-1 gap-6">
            {/* Survey setup */}
            <div className="flex-1">
              <PlaceholderCard />
            </div>

            {/* Bottom section fills height */}
            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                {/* Action items */}
                <PlaceholderCard gradient />
              </div>
              <div className="flex flex-col flex-1">
                {/* Conversations fill remaining height */}
                <PlaceholderChat />
              </div>
            </div>
          </div>

          {/* Right side (AI insights) */}
          <div className="flex flex-col">
            <PlaceholderCard rightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}



