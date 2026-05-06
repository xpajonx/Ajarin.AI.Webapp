import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-spacing-lg text-center">
      <div className="max-w-2xl space-y-spacing-md">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Belajar AI bareng <span className="text-primary">Pak Arin</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Gampang, Gratis, Gak Ribet. Platform belajar AI podcast-first untuk Indonesia.
        </p>
        <div className="flex items-center justify-center gap-spacing-md pt-spacing-lg">
          <Button size="lg" className="h-size-touch-target px-spacing-xl font-semibold">
            Mulai Belajar
          </Button>
          <Button variant="outline" size="lg" className="h-size-touch-target px-spacing-xl">
            Pelajari Dulu
          </Button>
        </div>
      </div>
    </main>
  );
}
