export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  icon: string; // bootstrap icon name
};

export const services: Service[] = [
  {
    slug: "cloud",
    title: "Cloud Services",
    short: "AWS, Azure & GCP setup, migration and optimization.",
    bullets: ["Cloud Migration", "Backup & DR", "Hybrid Cloud", "Email Hosting"],
    icon: "cloud",
  },
  {
    slug: "network",
    title: "Network Services",
    short: "Secure, high-speed LAN/WAN and VPN networking.",
    bullets: ["LAN/WAN Setup", "VPN", "Wireless", "24/7 Monitoring"],
    icon: "diagram-3",
  },
  {
    slug: "security",
    title: "IT Security Services",
    short: "Protect your business from modern cyber threats.",
    bullets: ["Endpoint Security", "Vuln. Testing", "Access Control", "MFA"],
    icon: "shield-lock",
  },
  {
    slug: "it-support",
    title: "IT Support & AMC",
    short: "24/7 IT support in Hyderabad with rapid response.",
    bullets: ["Remote Support", "AMC", "Troubleshooting", "On-site Visits"],
    icon: "headset",
  },
  {
    slug: "wireless",
    title: "Wireless Solutions",
    short: "Enterprise Wi-Fi designed for offices & campuses.",
    bullets: ["Site Surveys", "Access Points", "Guest Networks", "Heatmaps"],
    icon: "wifi",
  },
  {
    slug: "applications",
    title: "Application & Software",
    short: "Business software, CRM, ERP and integrations.",
    bullets: ["Installation", "Customization", "CRM", "Integration"],
    icon: "code-square",
  },
  {
    slug: "data-center",
    title: "Data Center Services",
    short: "Design, virtualization, DR & 24/7 monitoring.",
    bullets: ["Virtualization", "Disaster Recovery", "Monitoring", "Cooling"],
    icon: "hdd-stack",
  },
  {
    slug: "communication",
    title: "Business Communication",
    short: "VoIP, email and collaboration for modern teams.",
    bullets: ["VoIP", "Email Solutions", "Video Conferencing", "Teams/Zoom"],
    icon: "telephone",
  },
  {
    slug: "surveillance",
    title: "Surveillance & Video",
    short: "Complete CCTV, AV and mobile alert systems.",
    bullets: ["HD CCTV", "Night Vision", "Cloud Storage", "Mobile Alerts"],
    icon: "camera-video",
  },
];

export const products = [
  {
    title: "IT Hardware & Accessories",
    desc: "High-performance desktops, laptops, servers and networking equipment.",
    bullets: ["Enterprise Servers", "Workstations", "Networking", "UPS Systems"],
    icon: "pc-display",
  },
  {
    title: "Firewall Devices",
    desc: "Advanced firewall solutions for complete network protection.",
    bullets: ["IPS/IDS", "Traffic Filtering", "Secure VPN", "Threat Intel"],
    icon: "shield-shaded",
  },
  {
    title: "Antivirus Solutions",
    desc: "Enterprise antivirus with real-time, centralized management.",
    bullets: ["Multi-Device", "Cloud Intel", "Ransomware Protection", "EDR"],
    icon: "bug",
  },
  {
    title: "CCTV Surveillance",
    desc: "Professional CCTV installation with remote monitoring.",
    bullets: ["HD Cameras", "Night Vision", "Remote Access", "Cloud Storage"],
    icon: "camera-video",
  },
  {
    title: "Video Conferencing",
    desc: "Smart conferencing systems for modern workplaces.",
    bullets: ["HD Cameras", "Conference Audio", "Interactive Displays"],
    icon: "camera-reels",
  },
  {
    title: "Licensed Software",
    desc: "Microsoft 365, Google Workspace and productivity tools.",
    bullets: ["Microsoft 365", "Google Workspace", "Adobe", "Zoho"],
    icon: "box-seam",
  },
];
