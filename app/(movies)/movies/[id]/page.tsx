import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type IParams = Promise<{ id: string }>;

export default async function MovieDetail(props: { params: IParams }) {
  const params = await props.params;
  const { id } = params;

  return (
    <div>
      <Suspense fallback={<h2>Loading movie info...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
