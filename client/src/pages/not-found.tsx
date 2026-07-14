import { site } from "@/content/site";

export default function NotFound() {
  return <main className="not-found"><h1>{site.notFound.title}</h1><p>{site.notFound.text}</p><a className="button" href="/">{site.notFound.action}</a></main>;
}
