export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export const topNavigation: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { label: "WHO WE ARE", href: "/about/who-we-are" },
      {
        label: "HEALTHY, SAFETY AND ENVIRONMENTAL (HSE)",
        href: "/about/hse",
      },
      {
        label: "QUALITY COMPLIANCE, CLIENTS SERVED",
        href: "/about/quality-compliance-clients-served",
      },
    ],
  },
  {
    label: "SOLUTIONS",
    href: "/solutions",
    hasDropdown: true,
    dropdownItems: [
      { label: "PROJECT PLANNING", href: "/solutions/project-planning" },
      {
        label: "INTEGRATION MANAGEMENT SUPPORT",
        href: "/solutions/integration-management-support",
      },
      {
        label: "ENGINEERING SUPPORT",
        href: "/solutions/engineering-support",
      },
      {
        label: "ELECTRICAL, INSTRUMENTATION, CONTROLS (EI&C) & FIBER OPTIC",
        href: "/solutions/eic-fiber-optic",
      },
      {
        label: "CONSTRUCTION / DECOMMISSIONING SUPPORT",
        href: "/solutions/construction-decommissioning-support",
      },
      {
        label: "PRE-COMMISSIONING SUPPORT",
        href: "/solutions/pre-commissioning-support",
      },
      {
        label: "COMMISSIONING & START-UP SUPPORT (CSU)",
        href: "/solutions/commissioning-start-up-support",
      },
      {
        label: "OPERATIONS & MAINTENANCE SUPPORT (O&M)",
        href: "/solutions/operations-maintenance-support",
      },
      {
        label: "ASSET INTEGRITY MANAGEMENT",
        href: "/solutions/asset-integrity-management",
      },
      { label: "MARINE CONSTRUCTION", href: "/solutions/marine-construction" },
      {
        label: "TURNAROUNDS SUPPORT (TAR)",
        href: "/solutions/turnarounds-support",
      },
      {
        label: "STAFFING / RESOURCES SUPPORT",
        href: "/solutions/staffing-resources-support",
      },
    ],
  },
  { label: "CAREERS", href: "/careers" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

export const footerNavigation: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SOLUTIONS", href: "/solutions" },
  { label: "CAREERS", href: "/careers" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];
