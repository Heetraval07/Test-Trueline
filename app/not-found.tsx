import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-pad bg-page">
      <div className="container-tl text-center">
        <p className="text-[90px] font-extrabold leading-none text-navy">404</p>
        <h1 className="mt-4 text-[30px] font-semibold">Page not found</h1>
        <p className="copy mx-auto mt-3 max-w-[480px]">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button href="/" className="mt-8">Back to Home</Button>
      </div>
    </section>
  );
}
