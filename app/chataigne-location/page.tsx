import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Bell,
  Bike,
  ChevronDown,
  Clock,
  FileStack,
  Filter,
  MessageSquare,
  Plug,
  Search,
  Settings,
  ShoppingBag,
  Store,
  User,
  LogOut,
  Phone,
  CreditCard,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Building2, MapPin } from "lucide-react";
import Avvvatars from "avvvatars-react";

type Platform = "whatsapp" | "deliveroo" | "ubereats";

type Order = {
  id: string;
  platform: Platform;
  status: string;
  createdAt: string;
  customer: {
    name: string;
    phone: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  delivery: string;
  total: number;
};

const ordersMock: Order[] = [
  {
    id: "12345",
    platform: "whatsapp",
    status: "new",
    createdAt: "5 min ago",
    customer: {
      name: "Jean Dupont",
      phone: "+33 6 12 34 56 78",
    },
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 18.9 },
      { name: "Coca-Cola", quantity: 2, price: 7.0 },
      { name: "Tiramisu", quantity: 1, price: 6.5 },
    ],
    delivery: "As soon as possible",
    total: 32.4,
  },
  {
    id: "12346",
    platform: "deliveroo",
    status: "new",
    createdAt: "2 min ago",
    customer: {
      name: "Marie Martin",
      phone: "+33 6 98 76 54 32",
    },
    items: [
      { name: "Burger Classic", quantity: 2, price: 23.8 },
      { name: "Fries", quantity: 1, price: 3.5 },
      { name: "Sprite", quantity: 2, price: 7.0 },
    ],
    delivery: "19:30",
    total: 34.3,
  },
  {
    id: "12347",
    platform: "ubereats",
    status: "new",
    createdAt: "1 min ago",
    customer: {
      name: "Lucas Bernard",
      phone: "+33 6 23 45 67 89",
    },
    items: [
      { name: "Double Cheese", quantity: 2, price: 25.8 },
      { name: "Onion Rings", quantity: 1, price: 4.5 },
      { name: "Milkshake Vanilla", quantity: 2, price: 9.0 },
    ],
    delivery: "20:00",
    total: 39.3,
  },
  {
    id: "12348",
    platform: "whatsapp",
    status: "new",
    createdAt: "30 sec ago",
    customer: {
      name: "Emma Petit",
      phone: "+33 6 34 56 78 90",
    },
    items: [
      { name: "Veggie Pizza", quantity: 1, price: 16.9 },
      { name: "Green Salad", quantity: 1, price: 5.5 },
      { name: "Ice Tea", quantity: 2, price: 6.0 },
    ],
    delivery: "As soon as possible",
    total: 28.4,
  },
  {
    id: "12349",
    platform: "deliveroo",
    status: "new",
    createdAt: "15 sec ago",
    customer: {
      name: "Sophie Lambert",
      phone: "+33 6 45 67 89 01",
    },
    items: [
      { name: "Chicken Wings", quantity: 2, price: 14.8 },
      { name: "Sweet Potato Fries", quantity: 1, price: 4.5 },
      { name: "Lemonade", quantity: 2, price: 7.0 },
    ],
    delivery: "20:15",
    total: 26.3,
  },
  {
    id: "12350",
    platform: "ubereats",
    status: "new",
    createdAt: "45 sec ago",
    customer: {
      name: "Pierre Moreau",
      phone: "+33 6 56 78 90 12",
    },
    items: [
      { name: "Big Mac Menu", quantity: 2, price: 19.8 },
      { name: "Nuggets x9", quantity: 1, price: 6.5 },
      { name: "McFlurry", quantity: 2, price: 8.0 },
    ],
    delivery: "20:30",
    total: 34.3,
  },
  {
    id: "12351",
    platform: "whatsapp",
    status: "new",
    createdAt: "1 min ago",
    customer: {
      name: "Julie Dubois",
      phone: "+33 6 67 89 01 23",
    },
    items: [
      { name: "Royal Deluxe Menu", quantity: 1, price: 12.9 },
      { name: "Sundae", quantity: 2, price: 6.0 },
      { name: "Apple Pie", quantity: 2, price: 4.0 },
    ],
    delivery: "As soon as possible",
    total: 22.9,
  },
  {
    id: "12352",
    platform: "deliveroo",
    status: "new",
    createdAt: "2 min ago",
    customer: {
      name: "Antoine Martin",
      phone: "+33 6 78 90 12 34",
    },
    items: [
      { name: "Signature Burger", quantity: 2, price: 27.8 },
      { name: "Coleslaw", quantity: 2, price: 7.0 },
      { name: "Brownie", quantity: 1, price: 4.5 },
    ],
    delivery: "21:00",
    total: 39.3,
  },
  {
    id: "12353",
    platform: "ubereats",
    status: "new",
    createdAt: "3 min ago",
    customer: {
      name: "Camille Roux",
      phone: "+33 6 89 01 23 45",
    },
    items: [
      { name: "Vegan Burger", quantity: 1, price: 15.9 },
      { name: "Carrot Sticks", quantity: 1, price: 3.5 },
      { name: "Fruit Salad", quantity: 1, price: 5.5 },
    ],
    delivery: "21:15",
    total: 24.9,
  },
];

const platformConfig = {
  whatsapp: {
    icon: MessageSquare,
    color: "#25D366",
    name: "WhatsApp",
  },
  deliveroo: {
    icon: Bike,
    color: "#f97316",
    name: "Deliveroo",
  },
  ubereats: {
    icon: Bike,
    color: "#3b82f6",
    name: "Uber Eats",
  },
};

export default function ChataigneLocation() {
  return (
    <div className="min-h-screen bg-[#FAFBF6] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col fixed h-screen shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="mb-4">
            <Image
              src="/chataigne.svg"
              alt="Chataigne"
              width={120}
              height={30}
              className="h-7 w-auto"
            />
          </div>

          {/* Restaurant Info */}
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <button className="w-full p-4 bg-white border border-gray-100 rounded-xl hover:bg-gray-50/50 transition-all duration-200 group relative">
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium text-sm">
                        McDonald's Lafayette
                      </h2>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">Paris, France</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Building2 className="h-3 w-3 shrink-0" />
                      <span className="truncate">McDonald's France</span>
                    </div>
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[400px] p-0">
                <SheetHeader className="p-6 border-b border-gray-100">
                  <SheetTitle>Select a restaurant</SheetTitle>
                  <div className="relative mt-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      placeholder="Search for an organization, a restaurant..."
                      className="pl-9 bg-gray-50/50"
                    />
                  </div>
                </SheetHeader>
                <div className="overflow-y-auto">
                  {/* McDonald's */}
                  <div className="border-b border-gray-100">
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-[#25D366]" />
                      </div>
                      <div>
                        <span className="font-medium">McDonald's France</span>
                        <span className="text-xs text-gray-500 block">
                          12 restaurants
                        </span>
                      </div>
                    </div>
                    <div className="pl-6">
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                            <Store className="h-4 w-4 text-[#25D366]" />
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <span className="block font-medium truncate">
                              McDonald's Champs-Élysées
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Paris, France
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className="ml-2 bg-green-500/10 text-green-600 border-green-200"
                          >
                            Active
                          </Badge>
                        </div>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                            <Store className="h-4 w-4 text-[#25D366]" />
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <span className="block font-medium truncate">
                              McDonald's La Défense
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Paris, France
                            </span>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>

                  {/* KFC */}
                  <div className="border-b border-gray-100">
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <span className="font-medium">KFC France</span>
                        <span className="text-xs text-gray-500 block">
                          8 restaurants
                        </span>
                      </div>
                    </div>
                    <div className="pl-6">
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                            <Store className="h-4 w-4 text-orange-600" />
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <span className="block font-medium truncate">
                              KFC Opéra
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Paris, France
                            </span>
                          </div>
                        </div>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-4 hover:bg-gray-50/80 h-auto"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                            <Store className="h-4 w-4 text-orange-600" />
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <span className="block font-medium truncate">
                              KFC Bellecour
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> Lyon, France
                            </span>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <div className="space-y-1">
            {/* Commandes */}
            <Button
              variant="ghost"
              className="w-full justify-start relative group hover:bg-[#25D366]/5 h-auto py-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <ShoppingBag className="h-4.5 w-4.5 text-[#25D366]" />
              </div>
              <div className="ml-3 text-left">
                <span className="block font-medium text-sm">Orders</span>
                <span className="text-[11px] text-gray-500">12 pending</span>
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Badge className="bg-[#25D366] h-5 text-[11px]">12</Badge>
              </div>
            </Button>

            {/* Catalogue */}
            <Button
              variant="ghost"
              className="w-full justify-start relative group hover:bg-orange-500/5 h-auto py-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <FileStack className="h-4.5 w-4.5 text-orange-600" />
              </div>
              <div className="ml-3 text-left">
                <span className="block font-medium text-sm">Catalog</span>
                <span className="text-[11px] text-gray-500">86 products</span>
              </div>
            </Button>

            {/* Customers */}
            <Button
              variant="ghost"
              className="w-full justify-start relative group hover:bg-blue-500/5 h-auto py-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <User className="h-4.5 w-4.5 text-blue-600" />
              </div>
              <div className="ml-3 text-left">
                <span className="block font-medium text-sm">Customers</span>
                <span className="text-[11px] text-gray-500">342 customers</span>
              </div>
            </Button>

            {/* Analytics */}
            <Button
              variant="ghost"
              className="w-full justify-start relative group hover:bg-purple-500/5 h-auto py-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <BarChart3 className="h-4.5 w-4.5 text-purple-600" />
              </div>
              <div className="ml-3 text-left">
                <span className="block font-medium text-sm">Analytics</span>
                <span className="text-[11px] text-gray-500">Overview</span>
              </div>
            </Button>
          </div>
        </nav>

        {/* Bottom section */}
        <div>
          {/* Settings */}
          <div className="px-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-500 hover:text-gray-900 hover:bg-gray-50/50 h-8 text-xs gap-2"
                >
                  <Settings className="h-3.5 w-3.5" />
                  Restaurant settings
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                  <Settings className="h-4 w-4" /> General
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Plug className="h-4 w-4" /> Integrations
                  <Badge
                    variant="outline"
                    className="ml-auto text-[10px] h-4 px-1.5"
                  >
                    2
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-100 mt-2"></div>

          {/* User Profile */}
          <div className="p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full flex items-center gap-2.5 px-2 hover:bg-gray-500/5 h-10 justify-start"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                    <Avvvatars
                      value="Thomas Durant"
                      style="shape"
                      size={28}
                      shadow={true}
                      border={true}
                      borderSize={1}
                      borderColor="#ffffff"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-medium text-gray-700">
                      Thomas Durant
                    </span>
                    <span className="text-[11px] text-[#25D366] font-medium">
                      Owner
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                  <User className="h-4 w-4" /> My profile
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Settings className="h-4 w-4" /> Preferences
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                  <LogOut className="h-4 w-4" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Welcome message */}
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Orders
                </h1>
                <p className="text-gray-500">
                  Manage and track all your restaurant orders
                </p>
              </div>

              {/* Compact Stats */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#25D366]/5 rounded-lg border border-[#25D366]/10">
                  <ShoppingBag className="h-4 w-4 text-[#25D366]" />
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      12
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      en attente
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#25D366]/5 rounded-lg border border-[#25D366]/10">
                  <CreditCard className="h-4 w-4 text-[#25D366]" />
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      392.50 €
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      aujourd'hui
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-xl bg-white/80">
          <div className="px-8 pb-0">
            <div className="flex items-center gap-6 text-sm">
              <button className="px-6 py-4 text-[#25D366] border-b-2 border-[#25D366] font-medium">
                New
              </button>
              <button className="px-6 py-4 text-gray-500 border-b-2 border-transparent hover:text-gray-800 hover:border-gray-200 transition-colors">
                In preparation
              </button>
              <button className="px-6 py-4 text-gray-500 border-b-2 border-transparent hover:text-gray-800 hover:border-gray-200 transition-colors">
                Ready
              </button>
              <button className="px-6 py-4 text-gray-500 border-b-2 border-transparent hover:text-gray-800 hover:border-gray-200 transition-colors">
                Delivered
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="p-8">
          <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
            {ordersMock.map((order) => {
              const platform = platformConfig[order.platform];
              const Icon = platform.icon;

              return (
                <Collapsible key={order.id}>
                  <CollapsibleTrigger asChild>
                    <div className="w-full cursor-pointer">
                      <div
                        className={cn(
                          "flex items-center px-8 py-5 hover:bg-gray-50/80 group border-l-4 border-r-4 relative",
                          {
                            "border-l-[#25D366] border-r-[#25D366] hover:bg-[#25D366]/5":
                              order.platform === "whatsapp",
                            "border-l-orange-500 border-r-orange-500 hover:bg-orange-500/5":
                              order.platform === "deliveroo",
                            "border-l-blue-500 border-r-blue-500 hover:bg-blue-500/5":
                              order.platform === "ubereats",
                          }
                        )}
                      >
                        <div className="flex items-center gap-8 flex-1 min-w-0">
                          {/* Left section - Order info */}
                          <div className="flex-1 min-w-0 space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-sm text-gray-900">
                                #{order.id}
                              </span>
                              <Badge
                                className={cn(
                                  "px-2.5 py-1 text-xs font-medium flex items-center gap-1.5 whitespace-nowrap border",
                                  {
                                    "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20":
                                      order.platform === "whatsapp",
                                    "bg-orange-500/10 text-orange-600 border-orange-500/20":
                                      order.platform === "deliveroo",
                                    "bg-blue-500/10 text-blue-600 border-blue-500/20":
                                      order.platform === "ubereats",
                                  }
                                )}
                              >
                                <Icon className="h-3.5 w-3.5" />
                                {platform.name}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" />
                                {order.delivery}
                              </span>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-sm text-gray-700 flex items-center gap-2">
                                <User className="h-4 w-4 text-gray-400" />
                                {order.customer.name}
                              </div>
                              <div className="text-sm text-gray-500 flex items-center gap-2">
                                <Phone className="h-4 w-4 text-gray-400" />
                                {order.customer.phone}
                              </div>
                            </div>
                          </div>

                          {/* Right section - Actions */}
                          <div className="flex items-center gap-6">
                            <span className="text-sm font-medium text-gray-900">
                              {order.total.toFixed(2)} €
                            </span>
                            <div className="flex items-center gap-3">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-3 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 rounded-lg transition-colors"
                              >
                                Decline
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-3 text-xs font-medium text-[#25D366] hover:text-white hover:bg-[#25D366] rounded-lg transition-colors"
                              >
                                Accept
                              </Button>
                            </div>
                            <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50/80 transition-colors">
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn("absolute right-0 top-0 bottom-0 w-1", {
                          "bg-[#25D366]": order.platform === "whatsapp",
                          "bg-orange-500": order.platform === "deliveroo",
                          "bg-blue-500": order.platform === "ubereats",
                        })}
                      ></div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Articles */}
                        <div className="bg-white rounded-xl border border-gray-100 p-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                            <ShoppingBag className="h-4 w-4 text-gray-400" />
                            Articles
                          </h4>
                          <ul className="space-y-2.5">
                            {order.items.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between text-sm"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-md bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                                    {item.quantity}
                                  </span>
                                  <span className="text-gray-600">
                                    {item.name}
                                  </span>
                                </div>
                                <span className="font-medium text-gray-900">
                                  {item.price.toFixed(2)} €
                                </span>
                              </li>
                            ))}
                            <li className="pt-2 border-t border-gray-100">
                              <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-gray-900">
                                  Total
                                </span>
                                <span className="font-semibold text-[#25D366]">
                                  {order.total.toFixed(2)} €
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>

                        {/* Customer information */}
                        <div className="bg-white rounded-xl border border-gray-100 p-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-400" />
                            Customer information
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <User className="h-4 w-4 text-gray-500" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {order.customer.name}
                                </p>
                                <p className="text-gray-500 text-xs">
                                  Regular customer
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="h-4 w-4 text-gray-400" />
                              {order.customer.phone}
                            </div>
                          </div>
                        </div>

                        {/* Delivery information */}
                        <div className="bg-white rounded-xl border border-gray-100 p-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            Delivery information
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <Clock className="h-4 w-4 text-gray-500" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {order.delivery}
                                </p>
                                <p className="text-gray-500 text-xs">
                                  Created {order.createdAt}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <Icon className="h-4 w-4 text-gray-500" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {platform.name}
                                </p>
                                <p className="text-gray-500 text-xs">
                                  Delivery platform
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
