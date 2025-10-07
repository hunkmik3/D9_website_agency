// Component đơn giản thay thế YoutubePlayer
const SimpleYoutubePlayer = ({ id, title, ...others }) => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500 mb-2">Video YouTube</p>
        <p className="text-sm text-gray-400">{title || 'Video không khả dụng'}</p>
        <p className="text-xs text-gray-400 mt-1">ID: {id}</p>
      </div>
    </div>
  );
};

const shortcodes = {
  YoutubePlayer: SimpleYoutubePlayer,
};

export default shortcodes;