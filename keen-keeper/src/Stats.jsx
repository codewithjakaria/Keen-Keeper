import Layout from './Layout';

export default function Stats({ setSelectedFriend, timeline }) {
  const videoCount = timeline.filter(item => item.type === 'Video').length;
  const callCount = timeline.filter(item => item.type === 'Call').length;
  const messageCount = timeline.filter(item => item.type === 'Text').length;

  const total = videoCount + callCount + messageCount || 1;
  const circumference = 2 * Math.PI * 70;

  const calculateSlice = count =>
    `${(count / total) * circumference} ${circumference}`;

  const videoOffset = 0;
  const callOffset = -((videoCount / total) * circumference);
  const textOffset = -(((videoCount + callCount) / total) * circumference);

  return (
    <Layout setSelectedFriend={setSelectedFriend}>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black text-[#0F172A] mb-12 tracking-tighter">
          Friendship Analytics
        </h1>
        <div className="bg-white p-12 rounded-[40px] border border-[#F1F5F9] shadow-sm flex flex-col items-center">
          <div className="w-full text-left mb-10">
            <h2 className="text-[#64748B] text-xl font-bold">
              By Interaction Type
            </h2>
          </div>
          <div className="relative w-72 h-72 flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 180 180"
              className="-rotate-90 transition-transform"
            >
              <circle
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke="#F1F5F9"
                strokeWidth="18"
              />
              <circle
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke="#244D3F"
                strokeWidth="20"
                strokeDasharray={calculateSlice(videoCount)}
                strokeDashoffset={videoOffset}
                strokeLinecap="round"
                className="transition-all duration-700"
              />
              <circle
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke="#4ADE80"
                strokeWidth="20"
                strokeDasharray={calculateSlice(callCount)}
                strokeDashoffset={callOffset}
                strokeLinecap="round"
                className="transition-all duration-700"
              />
              <circle
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="20"
                strokeDasharray={calculateSlice(messageCount)}
                strokeDashoffset={textOffset}
                strokeLinecap="round"
                className="transition-all duration-700"
              />
            </svg>
          </div>
          <div className="flex gap-10 mt-16 flex-wrap justify-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
              <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">
                Text
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#4ADE80]"></div>
              <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">
                Call
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#244D3F]"></div>
              <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider">
                Video
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
