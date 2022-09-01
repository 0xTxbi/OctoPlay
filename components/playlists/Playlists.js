import { useUserPlaylists } from "../../hooks/user/useUserPlaylists";
import Carousel from "../Carousel";
import ErrorModal from "../ErrorModal";
import Loader from "../Loader";
import PlaylistsCard from "./PlaylistsCard";

function Playlists() {
  const { userPlaylists, isLoading, isError } = useUserPlaylists();

  if (isLoading) return <Loader />;

  return (
    <>
      <Carousel
        variant={userPlaylists?.items?.length === 1 ? "single" : "multiple"}
      >
        {userPlaylists?.items?.map((playlist) => (
          <>
            <PlaylistsCard
              key={playlist?.id}
              name={playlist?.name}
              description={playlist?.description}
              playlistImage={playlist?.images[0]?.url}
              isPublic={playlist?.public}
              isCollaborative={playlist?.collaborative}
              totalTracks={playlist?.tracks?.total}
              uri={playlist?.uri}
            />
          </>
        ))}
      </Carousel>

      <ErrorModal error={isError?.message} />
    </>
  );
}

export default Playlists;
