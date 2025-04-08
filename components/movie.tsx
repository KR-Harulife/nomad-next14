import Link from "next/link";
import styles from "./movie.module.css";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  return (
    <div className={styles.movie}>
      <img
        src={poster_path}
        alt={title}
      />
      <Link href={`/movies/${id}`}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
}
