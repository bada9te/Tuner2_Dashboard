"use client"

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function BreadNav() {
  const pathname = usePathname();

  // Get the path segments from the URL (e.g., /documents/add)
  const pathSegments = pathname.split('/').filter(Boolean);

  // Build breadcrumb items
  const crumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    return isLast ? (
        <li key={href} aria-current="page">
            <span className="inline-flex items-center gap-1 text-green-500">
            {label}
            </span>
        </li>
    ) : (
        <li key={href}>
            <Link href={href} className="inline-flex items-center gap-1 hover:underline">
                {label}
            </Link>
        </li>
    );
  });

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/" className="flex items-center justify-center">
            Home
          </Link>
        </li>
        {...crumbs}
      </ul>
    </div>
  );
}
