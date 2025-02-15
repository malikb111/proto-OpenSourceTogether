import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function LeftSection() {
  return (
    <div>
      <nav className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black z-50 flex items-center px-6 border-b border-white/[0.05]">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 rounded-sm blur" />
            <Image
              src="/leadfast.jpeg"
              alt="LeadFast.io"
              width={24}
              height={24}
              className="rounded-sm relative"
            />
          </div>
          <div className="text-base font-medium text-white">
            LeadFast<span className="text-white/70">.io</span>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen lg:min-h-[100dvh]">
        {/* Left Section - Hidden on mobile */}
        <div className="hidden lg:block w-1/2 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-gradient-to-r from-white/[0.02] to-transparent rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />

          <div className="relative h-full w-full max-w-xl mx-auto px-12 py-12 flex flex-col">
            <header className="mb-24">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 rounded-sm blur" />
                  <Image
                    src="/leadfast.jpeg"
                    alt="LeadFast.io"
                    width={32}
                    height={32}
                    className="rounded-sm relative"
                  />
                </div>
                <div className="text-base font-medium text-white">
                  LeadFast<span className="text-white/70">.io</span>
                </div>
              </div>
            </header>

            <div className="flex-1 flex flex-col justify-center space-y-12">
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="bg-white/[0.05] text-white/70 border-white/[0.05] gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                  Plateforme en ligne
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-light text-white leading-[1.1] tracking-tight">
                  Générez vos leads{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white">
                    automatiquement
                  </span>
                </h1>
                <p className="text-lg text-white/70 max-w-xl font-light">
                  Transformez votre prospection avec notre solution
                  intelligente. Plus de temps perdu en recherches manuelles.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <Card className="p-6 bg-white/[0.03] border-white/[0.05]">
                  <div className="text-4xl font-light text-white mb-2">1K+</div>
                  <span className="text-sm text-white/50">
                    Prospects qualifiés par mois
                  </span>
                </Card>

                <Card className="p-6 bg-white/[0.03] border-white/[0.05]">
                  <div className="text-4xl font-light text-white mb-2">7j</div>
                  <span className="text-sm text-white/50">
                    D'essai gratuit sans engagement
                  </span>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
