/* resources/js/components/cards/BankCard.tsx */
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
    AmexLogo,
    AmexNetworkLogo,
    BarclaycardLogo,
    HsbcLogo,
    MastercardNetworkLogo,
    MonzoLogo,
    NationwideLogo,
    NatwestLogo,
    RevolutLogo,
    StarlingLogo,
    VisaNetworkLogo,
} from '@/components/cards/logos';

export type BrandKey =
    | 'hsbc'
    | 'hsbc-credit'
    | 'nationwide'
    | 'natwest'
    | 'barclaycard-avios'
    | 'revolut'
    | 'starling'
    | 'monzo-debit'
    | 'monzo-flex'
    | 'amex-everyday'
    | 'amex-gold';

export interface BankCardProps {
    brand: BrandKey;
    cardholder?: string;
    last4?: string;
    currency?: string;
    width?: number;
    height?: number;
    showBack?: boolean;
}

const BRAND_PRESETS: Record<
    BrandKey,
    {
        label: string;
        logo: string;
        fintechModern: boolean;
        gradientStops: { offset: string; color: string }[];
        numbersOnBack?: boolean;
        network?: 'visa' | 'mastercard' | 'amex' | 'none';
        metallic?: boolean;
    }
> = {
    hsbc: {
        label: 'HSBC',
        logo: HsbcLogo,
        fintechModern: false,
        gradientStops: [
            { offset: '0%', color: '#87898C' },
            { offset: '100%', color: '#76787B' },
        ],
        network: 'visa',
        metallic: true,
    },
    'hsbc-credit': {
        label: 'HSBC Credit',
        logo: HsbcLogo,
        fintechModern: false,
        gradientStops: [
            { offset: '0%', color: '#87898C' },
            { offset: '100%', color: '#76787B' },
        ],
        network: 'mastercard',
        metallic: true,
    },
    nationwide: {
        label: 'Nationwide',
        logo: NationwideLogo,
        fintechModern: false,
        gradientStops: [
            { offset: '0%', color: '#07133B' },
            { offset: '100%', color: '#07133B' },
        ],
        network: 'visa',
        metallic: false,
    },
    natwest: {
        label: 'NatWest',
        logo: NatwestLogo,
        fintechModern: false,
        gradientStops: [
            { offset: '0%', color: '#7B3FA0' },
            { offset: '100%', color: '#42145F' },
        ],
        network: 'mastercard',
        metallic: true,
    },
    'barclaycard-avios': {
        label: 'Barclaycard Avios',
        logo: BarclaycardLogo,
        fintechModern: false,
        gradientStops: [
            { offset: '0%', color: '#0F3A78' },
            { offset: '100%', color: '#062448' },
        ],
        network: 'mastercard',
        metallic: true,
    },
    revolut: {
        label: 'Revolut',
        logo: RevolutLogo,
        fintechModern: true,
        gradientStops: [
            { offset: '0%', color: '#5478FF' },
            { offset: '100%', color: '#00C2FF' },
        ],
        network: 'visa',
        metallic: false,
    },
    starling: {
        label: 'Starling',
        logo: StarlingLogo,
        fintechModern: true,
        gradientStops: [
            { offset: '0%', color: '#19D3C5' },
            { offset: '100%', color: '#19D3C5' },
        ],
        numbersOnBack: true,
        network: 'visa',
        metallic: false,
    },
    'monzo-debit': {
        label: 'Monzo',
        logo: MonzoLogo,
        fintechModern: true,
        gradientStops: [
            { offset: '0%', color: '#FF4B44' },
            { offset: '100%', color: '#FF4B44' },
            // { offset: '0%', color: '#FF5A5F' },
            // { offset: '30%', color: '#FFB16C' },
            // { offset: '65%', color: '#9B72F6' },
            // { offset: '100%', color: '#4CC6F4' },
        ],
        numbersOnBack: true,
        network: 'mastercard',
        metallic: false,
    },
    'monzo-flex': {
        label: 'Monzo Flex',
        logo: MonzoLogo,
        fintechModern: true,
        gradientStops: [
            { offset: '0%', color: '#07121C' },
            { offset: '100%', color: '#07121C' },
        ],
        numbersOnBack: true,
        network: 'mastercard',
        metallic: false,
    },
    'amex-everyday': {
        label: 'Amex',
        logo: AmexLogo,
        fintechModern: false,
        gradientStops: [
            { offset: '0%', color: '#ECEDEE' },
            { offset: '100%', color: '#ECEDEE' },
        ],
        network: 'amex',
        metallic: true,
    },
    'amex-gold': {
        label: 'Amex Gold',
        logo: AmexLogo,
        fintechModern: false,
        gradientStops: [
            { offset: '0%', color: '#F5DD8A' },
            { offset: '100%', color: '#D6B24F' },
        ],
        network: 'amex',
        metallic: true,
    },
};

function BankLogo({ brand, width = 96, height = 28 }: { brand: BrandKey; width?: number; height?: number }) {
    try {
        const url = BRAND_PRESETS[brand].logo;
        console.log(url)
        if (!url) {
            const label = BRAND_PRESETS[brand].label;

            return (
                <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
                    <rect rx="4" width={width} height={height} fill="rgba(255,255,255,0.12)" />
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize={10} fill="#fff">
                        {label}
                    </text>
                </svg>
            );
        }

        return <image href={url} x="0" y="0" width={width} height={height} preserveAspectRatio="xMidYMid meet" aria-hidden="true" />;
    } catch {
        const label = BRAND_PRESETS[brand].label;
        return (
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
                <rect rx="4" width={width} height={height} fill="rgba(255,255,255,0.12)" />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize={10} fill="#fff">
                    {label}
                </text>
            </svg>
        );
    }
}

function RealisticChip({ scale = 1 }: { scale?: number }) {
    const w = 56 * scale;
    const h = 40 * scale;
    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
            <defs>
                <linearGradient id="chipGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f3e9c7" />
                    <stop offset="100%" stopColor="#bfa97a" />
                </linearGradient>
            </defs>

            <rect rx="6" width={w} height={h} fill="url(#chipGrad)" stroke="#9f8660" strokeWidth={1} />
            {/* decorative horizontal lines to mimic metal inserts */}
            <g fill="#9f8660" opacity={0.9}>
                <rect x={6 * scale} y={8 * scale} width={w - 12 * scale} height={3 * scale} rx={1.2 * scale} />
                <rect x={6 * scale} y={h / 2 - 3 * scale} width={w - 12 * scale} height={3 * scale} rx={1.2 * scale} />
                <rect x={6 * scale} y={h - 12 * scale} width={w - 12 * scale} height={3 * scale} rx={1.2 * scale} />
            </g>

            {/* fake circuitry lines */}
            <g stroke="#8b6f4d" strokeWidth={1.5 * scale} fill="none" opacity={0.55}>
                <path d={`M ${8 * scale} ${12 * scale} q ${8 * scale} -6 ${20 * scale} 0`} />
                <path d={`M ${8 * scale} ${h - 12 * scale} q ${8 * scale} 6 ${20 * scale} 0`} />
            </g>
        </svg>
    );
}

function NetworkMark({ network }: { network?: 'visa' | 'mastercard' | 'amex' | 'none' }) {
    if (!network) return null;

    const map = {
        amex: AmexNetworkLogo,
        mastercard: MastercardNetworkLogo,
        visa: VisaNetworkLogo,
    };

    const CompOrUrl: string = map[network];

    if (!CompOrUrl) return null;

    if (typeof CompOrUrl === 'string') {
        return (
            <svg width={56} height={36} viewBox={`0 0 56 36`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <image href={CompOrUrl} x="0" y="0" width={56} height={36} preserveAspectRatio="xMidYMid meet" />
            </svg>
        );
    }

    const Logo = CompOrUrl as React.ComponentType<React.SVGProps<SVGSVGElement>>;
    return (
        <g>
            <Logo width={56} height={36} />
        </g>
    );
}

const Defs = ({ id }: { id: string }) => (
    <defs>
        <linearGradient id={`grad-${id}`} x1="0" x2="1" y1="0" y2="1">
            {/* Stops will be filled inline in main render */}
        </linearGradient>

        {/* Subtle noise filter */}
        <filter id={`noise-${id}`}>
            <feTurbulence baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" result="mono" />
            <feBlend in="SourceGraphic" in2="mono" mode="overlay" />
        </filter>

        {/* Emboss for text (gives slightly raised effect) */}
        <filter id={`emboss-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
            <feOffset in="blur" dx="-0.6" dy="-0.6" result="offset1" />
            <feColorMatrix in="offset1" type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.12  0 0 0 0 0.12  0 0 0 0.5" result="shadow" />
            <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
);

export default function BankCard({
    brand,
    cardholder = 'AJ Singh',
    last4 = '4242',
    width = 360,
    height = 220,
    showBack = false,
}: BankCardProps) {
    const [flipped, setFlipped] = useState<boolean>(showBack);
    const preset = BRAND_PRESETS[brand];
    const id = `card-${brand}`;

    // Visual geometry
    const radius = 18;
    const chipX = 28;
    const chipY = 46;

    // Text helpers
    const masked = `•••• •••• •••• ${last4}`;

    return (
        <div style={{ width, height, perspective: 1400 }} onClick={() => setFlipped((s) => !s)}>
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                    width,
                    height,
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* FRONT */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: radius,
                        overflow: 'hidden',
                        backfaceVisibility: 'hidden',
                        boxShadow: '0 10px 30px rgba(2,6,23,0.2)',
                    }}
                >
                    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                        <Defs id={id} />

                        {/* gradient background built inline */}
                        <defs>
                            <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
                                {preset.gradientStops.map((s, i) => (
                                    <stop key={i} offset={s.offset} stopColor={s.color} />
                                ))}
                            </linearGradient>
                        </defs>

                        <rect
                            x="0"
                            y="0"
                            rx={radius}
                            width={width}
                            height={height}
                            fill={`url(#g-${id})`}
                            filter={preset.metallic ? `url(#noise-${id})` : undefined}
                        />

                        {/* Gloss highlight for realistic cards */}
                        {preset.metallic && (
                            <rect
                                x={0}
                                y={0}
                                width={width}
                                height={height * 0.45}
                                rx={radius}
                                fill="white"
                                opacity={0.08}
                                style={{ mixBlendMode: 'overlay' }}
                            />
                        )}

                        {/* Decorative texture for fintech cards (chevrons / geometric) */}
                        {!preset.metallic && preset.fintechModern && (
                            <g opacity={0.08}>
                                <circle cx={width * 0.12} cy={height * 0.2} r={60} fill="#ffffff" />
                                <rect x={width * 0.6} y={height * 0.1} width={width * 0.35} height={8} rx={4} fill="#fff" />
                            </g>
                        )}

                        {/* Bank logo (placeholder or real SVG if placed) */}
                        <g transform={`translate(${width - 140}, 28)`}>
                            <BankLogo brand={brand} width={120} height={32} />
                        </g>

                        {/* Chip */}
                        {!preset.numbersOnBack && (
                            <g transform={`translate(${chipX}, ${chipY})`}>
                                <RealisticChip scale={1} />
                            </g>
                        )}

                        {/* Card number (front) */}
                        {!preset.numbersOnBack && (
                            <text
                                x={24}
                                y={height - 68}
                                fill={preset.fintechModern ? '#fff' : '#fff'}
                                fontFamily="Inter, Roboto, -apple-system"
                                fontSize={20}
                                style={preset.metallic ? { filter: `url(#emboss-${id})` } : undefined}
                            >
                                {masked}
                            </text>
                        )}

                        {/* Cardholder */}
                        {!preset.numbersOnBack && (
                            <text x={24} y={height - 42} fill="#fff" fontFamily="Inter, Roboto, -apple-system" fontSize={12} opacity={0.95}>
                                {cardholder.toUpperCase()}
                            </text>
                        )}

                        {/* For fintech cards: decorative product element */}
                        {preset.fintechModern && (
                            <g transform={`translate(${width - 160}, ${height - 78})`} opacity={0.9}>
                                <rect x="0" y="-10" width="120" height="40" rx="8" fill="rgba(255,255,255,0.06)" />
                            </g>
                        )}

                        {/* network mark bottom-right */}
                        <g transform={`translate(${width - 84}, ${height - 64})`}>
                            <NetworkMark network={preset.network} />
                        </g>
                    </svg>
                </div>

                {/* BACK */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: radius,
                        overflow: 'hidden',
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        boxShadow: '0 10px 30px rgba(2,6,23,0.2)',
                    }}
                >
                    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                        <defs>
                            <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
                                {preset.gradientStops.map((s, i) => (
                                    <stop key={i} offset={s.offset} stopColor={s.color} />
                                ))}
                            </linearGradient>
                        </defs>

                        <rect x="0" y="0" rx={radius} width={width} height={height} fill={`url(#bg-${id})`} />

                        {/* Magnetic stripe */}
                        <rect x="0" y="22" width={width} height={46} fill="#101010" opacity={0.9} />

                        {/* signature box */}
                        <rect x={24} y={94} width={width - 48} height={34} rx={4} fill="#fff" opacity={0.95} />
                        <text x={width - 84} y={116} fontFamily="Inter" fontSize={12} fill="#000" fontWeight={700}>
                            123
                        </text>

                        {/* Bank numbers placement */}
                        {preset.numbersOnBack ? (
                            <>
                                <text x={24} y={height - 72} fill="#fff" fontSize={22} fontFamily="Inter">
                                    {masked}
                                </text>
                                <text x={24} y={height - 42} fill="#fff" fontSize={12} fontFamily="Inter">
                                    {cardholder.toUpperCase()}
                                </text>
                            </>
                        ) : (
                            <>
                                {/* Last four */}
                                <text x={24} y={height - 42} fill="#fff" fontSize={12} fontFamily="Inter" className='font-family-ariail'>
                                    {cardholder.toUpperCase()}
                                </text>
                                <text x={width - 80} y={height - 42} fill="#fff" fontSize={12} fontFamily="Arial">
                                    {last4}
                                </text>
                            </>
                        )}

                        {/* Small hotline text */}
                        <text x={24} y={height - 16} fontSize={10} fill="#fff" opacity={0.9} fontFamily="Inter">
                            Lost or stolen: 0800 123 456 | Customer Services: 0800 999 777
                        </text>

                        {/* Network mark */}
                        <g transform={`translate(${width - 84}, ${height - 64})`}>
                            <NetworkMark network={preset.network} />
                        </g>
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}
