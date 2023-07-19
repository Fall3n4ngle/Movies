import { MdRecommend, MdOutlineWatchLater } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

import { ILink } from "../models/Link";

export const privateLinks: ILink[] = [
  { label: "Recommended Movies", href: "/movie/recommended", icon: <MdRecommend /> },
  { label: "Recommended Tv Shows", href: "/tv/recommended", icon: <MdRecommend /> },
  { label: "Movie Watchlist", href: "/movie/watchlist", icon: <MdOutlineWatchLater /> },
  { label: "Tv Shows Watchlist", href: "/tv/watchlist", icon: <MdOutlineWatchLater /> },
  { label: "Rated Movies", href: "/movie/rated", icon: <AiFillStar /> },
  { label: "Rated Tv Shows", href: "/tv/rated", icon: <AiFillStar /> },
  { label: "Favorite Movies", href: "/movie/favorite", icon: <AiOutlineHeart /> },
  { label: "Favorite Shows", href: "/tv/favorite", icon: <AiOutlineHeart /> },
];

export const publicLinks: ILink[] = [
  { label: "Movies", href: "/movie", icon: <BiCameraMovie /> },
  { label: "Shows", href: "/tv", icon: <BiCameraMovie /> },
];
