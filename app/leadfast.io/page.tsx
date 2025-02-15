"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  User,
  Mail,
  Phone,
  Building2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Leadfast() {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [selectedEmailType, setSelectedEmailType] = useState("");
  const [selectedEmailStatus, setSelectedEmailStatus] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState("");
  const [expertise, setExpertise] = useState<string[]>([]);
  const [expertiseInput, setExpertiseInput] = useState("");
  const [customRequest, setCustomRequest] = useState("");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleEmailContinue = () => {
    setStep(3);
  };

  const handleProfileContinue = () => {
    setStep(4);
  };

  const handleCompanyContinue = () => {
    setStep(5);
  };

  const handleCustomRequest = () => {
    setStep(6);
  };

  const handleBack = () => {
    if (step === 6) {
      setStep(1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const toggleSector = (sector: string) => {
    setSelectedSectors((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSize((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const addExpertise = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && expertiseInput.trim()) {
      e.preventDefault();
      setExpertise((prev) => [...prev, expertiseInput.trim()]);
      setExpertiseInput("");
    }
  };

  const removeExpertise = (expertise: string) => {
    setExpertise((prev) => prev.filter((e) => e !== expertise));
  };

  const handleFinish = () => {
    console.log({
      jobTitle,
      selectedEmailType,
      selectedEmailStatus,
      selectedLevels,
      selectedSectors,
      selectedSize,
      companyName,
      expertise,
    });
    setIsCompleted(true);
  };

  const handleCustomFinish = () => {
    console.log({
      customRequest,
    });
    setIsCompleted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Navbar */}
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

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-white">
          <div className="min-h-screen lg:min-h-[100dvh] w-full max-w-xl mx-auto px-6 lg:px-12 pt-24 lg:pt-12 pb-12 flex flex-col justify-between">
            {isCompleted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/0 rounded-sm blur-xl" />
                  <Image
                    src="/leadfast.jpeg"
                    alt="LeadFast.io"
                    width={96}
                    height={96}
                    className="rounded-xl relative"
                  />
                </div>
                <h2 className="text-3xl font-medium mb-4">
                  Merci pour votre confiance !
                </h2>
                <p className="text-lg text-black/60 mb-8 max-w-md">
                  Nous avons bien reçu vos critères de recherche. Notre équipe
                  va commencer à générer vos leads qualifiés.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Configuration terminée
                </div>
              </div>
            ) : step === 1 ? (
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/[0.02] rounded-full self-start mb-8">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-[10px] font-medium text-white">
                    1
                  </span>
                  <span className="text-sm font-light text-black/60">
                    Informations personnelles
                  </span>
                </div>

                <div className="w-full space-y-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1">
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2">
                          <User className="w-5 h-5 text-black/20" />
                        </div>
                        <Input
                          id="firstname"
                          type="text"
                          placeholder="Prénom"
                          className="h-14 pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                        />
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2">
                          <User className="w-5 h-5 text-black/20" />
                        </div>
                        <Input
                          id="lastname"
                          type="text"
                          placeholder="Nom"
                          className="h-14 pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-black/20" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email professionnel"
                      className="h-14 pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2">
                      <Phone className="w-5 h-5 text-black/20" />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Téléphone"
                      className="h-14 pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-black/10 hover:bg-black/[0.02] hover:border-black/20 rounded-xl text-black/60 text-sm px-6"
                    onClick={handleCustomRequest}
                  >
                    Demande sur mesure
                  </Button>

                  <Button
                    onClick={handleContinue}
                    type="button"
                    className="h-12 bg-black hover:bg-black/90 rounded-xl text-sm px-6 ml-auto"
                  >
                    <span className="flex items-center gap-2">
                      Continuer
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            ) : step === 2 ? (
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/[0.02] rounded-full self-start mb-8">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-[10px] font-medium text-white">
                    2
                  </span>
                  <span className="text-sm font-light text-black/60">
                    Préférences de contact
                  </span>
                </div>

                <div className="w-full space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-6">Type d'email</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card
                        className="p-4 cursor-pointer hover:border-black/20 transition-colors group"
                        onClick={() => setSelectedEmailType("Pro")}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-black/[0.02] group-hover:bg-black/[0.05] transition-colors">
                            <svg
                              className="w-5 h-5 text-black/40"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">
                              Email Professionnel
                            </h4>
                            <p className="text-xs text-black/60">
                              Entreprises et professionnels
                            </p>
                          </div>
                        </div>
                      </Card>

                      <Card
                        className="p-4 cursor-pointer hover:border-black/20 transition-colors group"
                        onClick={() => setSelectedEmailType("Perso")}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-black/[0.02] group-hover:bg-black/[0.05] transition-colors">
                            <svg
                              className="w-5 h-5 text-black/40"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">
                              Email Personnel
                            </h4>
                            <p className="text-xs text-black/60">
                              Usage personnel uniquement
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-6">
                      Statut de l'email
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <Card
                        className="p-4 cursor-pointer hover:border-black/20 transition-colors group"
                        onClick={() => setSelectedEmailStatus("Verified")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                              <svg
                                className="w-5 h-5 text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">
                                Email vérifié
                              </h4>
                              <p className="text-xs text-black/60">
                                Adresse email confirmée et active
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-black/40 transition-colors" />
                        </div>
                      </Card>

                      <Card
                        className="p-4 cursor-pointer hover:border-black/20 transition-colors group"
                        onClick={() => setSelectedEmailStatus("Not verified")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-yellow-50 group-hover:bg-yellow-100 transition-colors">
                              <svg
                                className="w-5 h-5 text-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                <path
                                  d="M12 14.5l-8-5"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">
                                Non vérifié
                              </h4>
                              <p className="text-xs text-black/60">
                                Vérification requise
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-black/40 transition-colors" />
                        </div>
                      </Card>

                      <Card
                        className="p-4 cursor-pointer hover:border-black/20 transition-colors group"
                        onClick={() => setSelectedEmailStatus("Disposable")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                              <svg
                                className="w-5 h-5 text-red-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">
                                Email jetable
                              </h4>
                              <p className="text-xs text-black/60">
                                Service d'email temporaire
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-black/40 transition-colors" />
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-black/10 hover:bg-black/[0.02] hover:border-black/20 rounded-xl text-black/60 text-sm px-6"
                    onClick={handleBack}
                  >
                    Retour
                  </Button>

                  <Button
                    type="button"
                    className="h-12 bg-black hover:bg-black/90 rounded-xl text-sm px-6 ml-auto"
                    onClick={handleEmailContinue}
                  >
                    <span className="flex items-center gap-2">
                      Continuer
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            ) : step === 3 ? (
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/[0.02] rounded-full self-start mb-8">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-[10px] font-medium text-white">
                    3
                  </span>
                  <span className="text-sm font-light text-black/60">
                    Profil recherché
                  </span>
                </div>

                <div className="w-full space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-6">
                      Intitulé du poste
                    </h3>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Ex: CEO, CTO, Marketing Manager..."
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="h-14 pl-5 pr-12 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                      />
                      <div className="absolute right-5 top-1/2 -translate-y-1/2">
                        <svg
                          className="w-5 h-5 text-black/20"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-6">
                      Niveau hiérarchique
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-between pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 hover:bg-black/[0.02] hover:border-black/10"
                        >
                          <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-black/20 absolute left-5" />
                            <span className="text-black/60">
                              Sélectionner un niveau...
                            </span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-black/20" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-2 max-h-[400px] overflow-hidden">
                        <div className="space-y-2">
                          <div className="relative">
                            <Input
                              type="text"
                              placeholder="Rechercher un niveau..."
                              className="h-10 pl-10 pr-4 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-black/20"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                              </svg>
                            </div>
                          </div>

                          <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent divide-y divide-black/5">
                            {[
                              {
                                id: "Owner",
                                label: "Owner",
                                desc: "Propriétaire d'entreprise",
                                color: "purple",
                              },
                              {
                                id: "Founder",
                                label: "Founder",
                                desc: "Fondateur",
                                color: "indigo",
                              },
                              {
                                id: "C-Suite",
                                label: "C-Suite",
                                desc: "CEO, CTO, CFO, etc.",
                                color: "blue",
                              },
                              {
                                id: "Partner",
                                label: "Partner",
                                desc: "Associé",
                                color: "emerald",
                              },
                              {
                                id: "VP",
                                label: "VP",
                                desc: "Vice Président",
                                color: "cyan",
                              },
                              {
                                id: "Head",
                                label: "Head",
                                desc: "Responsable",
                                color: "teal",
                              },
                              {
                                id: "Director",
                                label: "Director",
                                desc: "Directeur",
                                color: "green",
                              },
                              {
                                id: "Manager",
                                label: "Manager",
                                desc: "Chef d'équipe",
                                color: "yellow",
                              },
                              {
                                id: "Senior",
                                label: "Senior",
                                desc: "Expérimenté",
                                color: "orange",
                              },
                              {
                                id: "Entry",
                                label: "Entry",
                                desc: "Débutant",
                                color: "rose",
                              },
                              {
                                id: "Intern",
                                label: "Intern",
                                desc: "Stagiaire",
                                color: "pink",
                              },
                            ].map((level) => (
                              <div
                                key={level.id}
                                className={cn(
                                  "py-2 px-2 cursor-pointer hover:bg-black/[0.02] transition-colors group flex items-center",
                                  selectedLevels.includes(level.id) &&
                                    "bg-black/[0.02]"
                                )}
                                onClick={() => toggleLevel(level.id)}
                              >
                                <div className="flex items-center gap-2 flex-1">
                                  <div
                                    className={`p-1.5 rounded-lg bg-${level.color}-50 group-hover:bg-${level.color}-100 transition-colors`}
                                  >
                                    <svg
                                      className={`w-4 h-4 text-${level.color}-500`}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm">
                                      {level.label}
                                    </h4>
                                    <p className="text-xs text-black/60">
                                      {level.desc}
                                    </p>
                                  </div>
                                </div>
                                {selectedLevels.includes(level.id) && (
                                  <div>
                                    <svg
                                      className="w-5 h-5 text-black"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-black/10 hover:bg-black/[0.02] hover:border-black/20 rounded-xl text-black/60 text-sm px-6"
                    onClick={handleBack}
                  >
                    Retour
                  </Button>

                  <Button
                    type="button"
                    className="h-12 bg-black hover:bg-black/90 rounded-xl text-sm px-6 ml-auto"
                    onClick={handleProfileContinue}
                  >
                    <span className="flex items-center gap-2">
                      Continuer
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            ) : step === 4 ? (
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/[0.02] rounded-full self-start mb-8">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-[10px] font-medium text-white">
                    4
                  </span>
                  <span className="text-sm font-light text-black/60">
                    Entreprise cible
                  </span>
                </div>

                <div className="w-full space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-6">
                      Secteur d'activité
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-between pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 hover:bg-black/[0.02] hover:border-black/10"
                        >
                          <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-black/20 absolute left-5" />
                            <span className="text-black/60">
                              Sélectionner un secteur...
                            </span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-black/20" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-2 max-h-[400px] overflow-hidden">
                        <div className="space-y-2">
                          <div className="relative">
                            <Input
                              type="text"
                              placeholder="Rechercher un secteur..."
                              className="h-10 pl-10 pr-4 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                              <svg
                                className="w-4 h-4 text-black/20"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                              </svg>
                            </div>
                          </div>

                          <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent divide-y divide-black/5">
                            {[
                              {
                                id: "Tech",
                                label: "Technologie",
                                desc: "IT, Software, Hardware",
                                color: "blue",
                              },
                              {
                                id: "Finance",
                                label: "Finance",
                                desc: "Banque, Assurance, Investissement",
                                color: "green",
                              },
                              {
                                id: "Healthcare",
                                label: "Santé",
                                desc: "Médical, Pharmacie, Biotech",
                                color: "red",
                              },
                              {
                                id: "Manufacturing",
                                label: "Industrie",
                                desc: "Production, Fabrication",
                                color: "orange",
                              },
                              {
                                id: "Retail",
                                label: "Commerce",
                                desc: "Distribution, E-commerce",
                                color: "yellow",
                              },
                              {
                                id: "Education",
                                label: "Education",
                                desc: "Formation, E-learning",
                                color: "purple",
                              },
                              {
                                id: "Media",
                                label: "Média",
                                desc: "Presse, Audiovisuel, Digital",
                                color: "pink",
                              },
                            ].map((sector) => (
                              <div
                                key={sector.id}
                                className={cn(
                                  "py-2 px-2 cursor-pointer hover:bg-black/[0.02] transition-colors group flex items-center",
                                  selectedSectors.includes(sector.id) &&
                                    "bg-black/[0.02]"
                                )}
                                onClick={() => toggleSector(sector.id)}
                              >
                                <div className="flex items-center gap-2 flex-1">
                                  <div
                                    className={`p-1.5 rounded-lg bg-${sector.color}-50 group-hover:bg-${sector.color}-100 transition-colors`}
                                  >
                                    <Building2
                                      className={`w-4 h-4 text-${sector.color}-500`}
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm">
                                      {sector.label}
                                    </h4>
                                    <p className="text-xs text-black/60">
                                      {sector.desc}
                                    </p>
                                  </div>
                                </div>
                                {selectedSectors.includes(sector.id) && (
                                  <div>
                                    <svg
                                      className="w-5 h-5 text-black"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-6">
                      Taille de l'entreprise
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-between pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 hover:bg-black/[0.02] hover:border-black/10"
                        >
                          <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-black/20 absolute left-5" />
                            <span className="text-black/60">
                              Sélectionner une taille...
                            </span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-black/20" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-2 max-h-[400px] overflow-hidden">
                        <div className="space-y-2">
                          <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent divide-y divide-black/5">
                            {[
                              {
                                id: "1-10",
                                label: "1-10 employés",
                                desc: "Très petite entreprise",
                                color: "blue",
                              },
                              {
                                id: "11-50",
                                label: "11-50 employés",
                                desc: "Petite entreprise",
                                color: "green",
                              },
                              {
                                id: "51-200",
                                label: "51-200 employés",
                                desc: "Entreprise moyenne",
                                color: "yellow",
                              },
                              {
                                id: "201-500",
                                label: "201-500 employés",
                                desc: "Grande entreprise",
                                color: "orange",
                              },
                              {
                                id: "501-1000",
                                label: "501-1000 employés",
                                desc: "Très grande entreprise",
                                color: "red",
                              },
                              {
                                id: "1001-5000",
                                label: "1001-5000 employés",
                                desc: "Entreprise majeure",
                                color: "purple",
                              },
                              {
                                id: "5000+",
                                label: "5000+ employés",
                                desc: "Groupe international",
                                color: "pink",
                              },
                            ].map((size) => (
                              <div
                                key={size.id}
                                className={cn(
                                  "py-2 px-2 cursor-pointer hover:bg-black/[0.02] transition-colors group flex items-center",
                                  selectedSize.includes(size.id) &&
                                    "bg-black/[0.02]"
                                )}
                                onClick={() => toggleSize(size.id)}
                              >
                                <div className="flex items-center gap-2 flex-1">
                                  <div
                                    className={`p-1.5 rounded-lg bg-${size.color}-50 group-hover:bg-${size.color}-100 transition-colors`}
                                  >
                                    <User
                                      className={`w-4 h-4 text-${size.color}-500`}
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm">
                                      {size.label}
                                    </h4>
                                    <p className="text-xs text-black/60">
                                      {size.desc}
                                    </p>
                                  </div>
                                </div>
                                {selectedSize.includes(size.id) && (
                                  <div>
                                    <svg
                                      className="w-5 h-5 text-black"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-black/10 hover:bg-black/[0.02] hover:border-black/20 rounded-xl text-black/60 text-sm px-6"
                    onClick={handleBack}
                  >
                    Retour
                  </Button>

                  <Button
                    type="button"
                    className="h-12 bg-black hover:bg-black/90 rounded-xl text-sm px-6 ml-auto"
                    onClick={handleCompanyContinue}
                  >
                    <span className="flex items-center gap-2">
                      Continuer
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            ) : step === 5 ? (
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/[0.02] rounded-full self-start mb-8">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-[10px] font-medium text-white">
                    5
                  </span>
                  <span className="text-sm font-light text-black/60">
                    Entreprise spécifique
                  </span>
                </div>

                <div className="w-full space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-6">
                      Nom de l'entreprise
                    </h3>
                    <div className="relative">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2">
                        <Building2 className="w-5 h-5 text-black/20" />
                      </div>
                      <Input
                        type="text"
                        placeholder="Ex: Apple, Google, Microsoft..."
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="h-14 pl-12 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-6">
                      Mots-clés d'expertise
                    </h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Ex: saas, data science, consulting..."
                          value={expertiseInput}
                          onChange={(e) => setExpertiseInput(e.target.value)}
                          onKeyDown={addExpertise}
                          className="h-14 pl-5 pr-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30"
                        />
                        <p className="mt-2 text-xs text-black/40">
                          Appuyez sur Entrée pour ajouter un mot-clé
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {expertise.map((keyword) => (
                          <Badge
                            key={keyword}
                            variant="secondary"
                            className="px-3 py-1 bg-black/[0.02] hover:bg-black/[0.05] text-black/60 border-transparent cursor-pointer transition-colors"
                            onClick={() => removeExpertise(keyword)}
                          >
                            {keyword}
                            <svg
                              className="w-4 h-4 ml-2 text-black/40"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-black/10 hover:bg-black/[0.02] hover:border-black/20 rounded-xl text-black/60 text-sm px-6"
                    onClick={handleBack}
                  >
                    Retour
                  </Button>

                  <Button
                    type="button"
                    className="h-12 bg-black hover:bg-black/90 rounded-xl text-sm px-6 ml-auto"
                    onClick={handleFinish}
                  >
                    <span className="flex items-center gap-2">
                      Terminer
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            ) : step === 6 ? (
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/[0.02] rounded-full self-start mb-8">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-[10px] font-medium text-white">
                    ★
                  </span>
                  <span className="text-sm font-light text-black/60">
                    Demande sur mesure
                  </span>
                </div>

                <div className="w-full space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-6">Votre demande</h3>
                    <div className="relative">
                      <textarea
                        placeholder="Décrivez votre besoin spécifique..."
                        value={customRequest}
                        onChange={(e) => setCustomRequest(e.target.value)}
                        className="w-full h-48 p-5 font-light bg-black/[0.02] border-transparent rounded-xl focus-visible:ring-1 focus-visible:ring-black/5 focus-visible:border-black/10 placeholder:text-black/30 resize-none"
                      />
                      <p className="mt-2 text-xs text-black/40">
                        Notre équipe analysera votre demande et vous proposera
                        une solution adaptée.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 border-black/10 hover:bg-black/[0.02] hover:border-black/20 rounded-xl text-black/60 text-sm px-6"
                    onClick={handleBack}
                  >
                    Retour
                  </Button>

                  <Button
                    type="button"
                    className="h-12 bg-black hover:bg-black/90 rounded-xl text-sm px-6 ml-auto"
                    onClick={handleCustomFinish}
                  >
                    <span className="flex items-center gap-2">
                      Terminer
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
