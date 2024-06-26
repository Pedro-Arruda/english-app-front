interface ITalkingTopic {
  topic: {
    name: string;
    description: string;
    imgUrl: string;
  };
  handleClickTopic: (prompt: string) => void;
}

export const TalkingTopic = ({ topic, handleClickTopic }: ITalkingTopic) => {
  const prompt = `
  Im learning english, lets strike up a conversation. Please correct me anytime about my english, 
  and keep making open questions to keep the conversation running. 
  Already answer with just one question, the topic will be: ${topic.description}`;
  return (
    <div
      className="flex items-center flex-shrink flex-col w-36 cursor-pointer"
      onClick={() => handleClickTopic(prompt)}
    >
      <img src={topic.imgUrl} className="h-24 w-full rounded-md" />
      {topic.name}
    </div>
  );
};
