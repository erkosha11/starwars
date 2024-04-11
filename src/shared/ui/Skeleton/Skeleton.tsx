import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={386}
    height={206}
    viewBox="0 0 386 206"
    backgroundColor="#5f5f5f"
    foregroundColor="#5f5f5f"
  >
    <rect x="0" y="0" rx="15" ry="15" width="386" height="206" />
  </ContentLoader>
);

export default Skeleton;
