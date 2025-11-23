import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground dark:text-card-foreground"
        >
            {/* Background Circle */}
            <circle cx="100" cy="100" r="90" fill="currentColor" />

            {/* Centered Bar Chart Symbol */}
            <rect x="60" y="90" width="15" height="60" fill="var(--color-primary-foreground)" rx="2" />
            <rect x="80" y="70" width="15" height="80" fill="var(--color-primary-foreground)" rx="2" />
            <rect x="100" y="50" width="15" height="100" fill="var(--color-primary-foreground)" rx="2" />
            <rect x="120" y="40" width="15" height="110" fill="var(--color-primary-foreground)" rx="2" />
        </svg>
    );
}
