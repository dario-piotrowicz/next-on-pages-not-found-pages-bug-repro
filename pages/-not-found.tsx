
export const runtime = 'nodejs';

export const getServerSideProps = (async () => {
  return { props: { text: 'My custom not-found page' } };
});

export default function MyNotFoundPage({text}: { text: string }) {
  return <h1>{text}</h1>;
}