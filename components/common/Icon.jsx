import {
  Network, Wifi, Cable, Server, Database, Cctv, Laptop, Printer, Settings, PhoneCall,
  Zap, ShieldCheck, Shield, Eye, Target, Users, MessageSquare, TrendingUp, Headphones,
  Handshake, IndianRupee, Search, Lightbulb, Building2, Briefcase, GraduationCap,
  Landmark, LayoutGrid, Cpu, Mail, Globe, MapPin, Check, ArrowRight, Cloud, Plus,
  Phone, MessagesSquare,
} from "lucide-react";

const map = {
  network: Network, wifi: Wifi, cable: Cable, server: Server, database: Database,
  cctv: Cctv, laptop: Laptop, printer: Printer, settings: Settings, phone: PhoneCall,
  zap: Zap, shield: Shield, shieldcheck: ShieldCheck, eye: Eye, target: Target,
  users: Users, message: MessageSquare, trending: TrendingUp, headset: Headphones,
  handshake: Handshake, rupee: IndianRupee, search: Search, lightbulb: Lightbulb,
  building: Building2, briefcase: Briefcase, graduation: GraduationCap,
  landmark: Landmark, workspace: LayoutGrid, cpu: Cpu, mail: Mail, globe: Globe,
  pin: MapPin, check: Check, arrow: ArrowRight, cloud: Cloud, plus: Plus,
  call: Phone, chat: MessagesSquare,
};

export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8, ...rest }) {
  const Cmp = map[name] || Check;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
